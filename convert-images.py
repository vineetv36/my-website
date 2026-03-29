#!/usr/bin/env python3
"""
Convert all images in public/images/ to smaller WebP files.

Usage:
    python3 convert-images.py
    python3 convert-images.py --max-width 1200
    python3 convert-images.py --quality 75

Reads .jpg, .jpeg, .png, .tiff files recursively under public/images/,
converts each to a WebP at the specified max width (default 1600px),
and saves it alongside the original with a .webp extension.

Skips files that already have an up-to-date .webp version.
"""

import os
import sys
import argparse
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print("Pillow is required. Install it with: pip3 install Pillow")
    sys.exit(1)

SUPPORTED = {".jpg", ".jpeg", ".png", ".tiff", ".tif"}
IMAGES_DIR = Path(__file__).parent / "public" / "images"


def convert_image(src, max_width, quality):
    dest = src.with_suffix(".webp")

    # Skip if webp already exists and is newer than source
    if dest.exists() and dest.stat().st_mtime >= src.stat().st_mtime:
        return None

    img = Image.open(src)

    # Apply EXIF orientation so the image isn't rotated
    img = ImageOps.exif_transpose(img)

    # Convert RGBA/palette to RGB for WebP compatibility
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    # Resize if wider than max_width, preserving aspect ratio
    if img.width > max_width:
        ratio = max_width / img.width
        new_size = (max_width, int(img.height * ratio))
        img = img.resize(new_size, Image.LANCZOS)

    img.save(dest, "WEBP", quality=quality)
    return dest


def main():
    parser = argparse.ArgumentParser(description="Convert images to WebP")
    parser.add_argument("--max-width", type=int, default=1600, help="Max width in pixels (default: 1600)")
    parser.add_argument("--quality", type=int, default=80, help="WebP quality 1-100 (default: 80)")
    args = parser.parse_args()

    if not IMAGES_DIR.exists():
        print(f"Directory not found: {IMAGES_DIR}")
        sys.exit(1)

    sources = [p for p in IMAGES_DIR.rglob("*") if p.suffix.lower() in SUPPORTED]

    if not sources:
        print(f"No images found in {IMAGES_DIR}")
        return

    converted = 0
    skipped = 0

    for src in sorted(sources):
        result = convert_image(src, args.max_width, args.quality)
        rel = src.relative_to(Path(__file__).parent)
        if result:
            dest_rel = result.relative_to(Path(__file__).parent)
            size_kb = result.stat().st_size / 1024
            print(f"  {rel} -> {dest_rel} ({size_kb:.0f} KB)")
            converted += 1
        else:
            skipped += 1

    print(f"\nDone: {converted} converted, {skipped} skipped (already up to date)")


if __name__ == "__main__":
    main()
