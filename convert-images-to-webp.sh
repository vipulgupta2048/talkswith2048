#!/bin/bash

# Script to convert all jpeg, jpg, png image to webp format in the docs
# Run the script from the docs root directory to convert all image files in the specified directory
# Usage: ./convert-images-to-webp.sh [path]
# Example: ./convert-images-to-webp.sh ./docs/img

# Define the directory containing the images
IMAGE_DIR="${1:-./static/img}"

echo "Converting images in directory: $IMAGE_DIR"

# Exit 0 if cwebp is not installed
if ! command -v cwebp >/dev/null 2>&1; then
  echo "Warning: cwebp is not installed. Can't convert existing images to Webp format. Please install cwebp to use this script."
  exit 0
fi

# Find all .jpg, .jpeg, .png files in the directory and its subdirectories
find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r FILE; do
    # Get the file extension
    EXT="${FILE##*.}"
    # Get the file path without the extension
    BASENAME="${FILE%.*}"
    # Define the output file name with .webp extension
    OUTPUT_FILE="${BASENAME}.webp"

    # Convert the image to .webp format using lossless compression for best quality
    # -lossless for lossless compression, -q 100 for highest quality  
    cwebp -lossless "$FILE" -o "$OUTPUT_FILE"

    # Check if the conversion was successful
    if [ $? -eq 0 ]; then
        # Delete the original image file
        rm "$FILE"
        echo "Converted and deleted: $FILE"
    else
        echo "Failed to convert: $FILE"
    fi
done


echo "Updating image references to WebP format..."

# Function to update image references in a file
update_file_refs() {
    local file="$1"
    echo "Updating $file..."
    
    # Update .png references
    sed -i.bak 's/\.png/.webp/g' "$file"
    
    # Update .jpg references  
    sed -i.bak 's/\.jpg/.webp/g' "$file"
    
    # Update .jpeg references
    sed -i.bak 's/\.jpeg/.webp/g' "$file"
    
    # Remove backup files
    rm -f "$file.bak"
}

# Update all markdown files in docs folder
find docs -name "*.md" -type f | while read -r file; do
    update_file_refs "$file"
done

echo "✅ Image references updated to WebP format!"
