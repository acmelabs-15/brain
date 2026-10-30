#!/usr/bin/env bash
# A fresh brain repo: git, and the workspace.md that setup-brain writes. No spec folder yet, so
# the spec in the prompt gets its own through brain new-doc. setup-brain's workspace.md comes
# from the plugin, found from this script; the case fails loudly when it is not.
set -euo pipefail
git init -q .
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
mkdir -p docs/agents
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md
