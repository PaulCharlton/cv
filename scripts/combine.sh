#!/usr/bin/env bash

set -euo pipefail  # Enable strict error handling

declare -r SEPARATOR="==================="

function main() {
  if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <output_file>" >&2
    exit 1
  fi

  local output_file="$1"

  # Ensure an output file is provided
  if [[ -z "$output_file" ]]; then
    echo "Usage: $0 <output_file>"
    exit 1
  fi

  # Clear the output file if it exists
  > "$output_file"

  # Loop through all files in the directory (excluding directories)
  for file in *; do
    if [[ -f "$file" ]]; then
      echo "$SEPARATOR" >> "$output_file"
      cat "$file" >> "$output_file"
      echo "" >> "$output_file"  # Add a newline for readability
    fi
  done

  echo "Concatenation complete. Output saved to $output_file"
}

main "$@"  # Call the main function with script arguments
