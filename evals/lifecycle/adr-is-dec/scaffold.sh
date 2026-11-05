#!/usr/bin/env bash
# A fresh brain repo: git, and the workspace.md that setup-brain writes. No decision record yet.
set -euo pipefail
git init -q .
mkdir -p docs/agents
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md
printf '# Orders\n\nThe order service of a small shop.\n' > README.md
