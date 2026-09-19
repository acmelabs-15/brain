#!/usr/bin/env bash
# The docs files exactly as setup-brain writes them, so a second run has nothing to do in the repo.
# The plugin root is found from this script's own location; the case fails loudly when it is not.
set -euo pipefail
git init -q .
printf '{ "name": "probe", "version": "0.0.1" }\n' > package.json
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/domain.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
mkdir -p docs/agents
sed 's/{{layout}}/single-context/' "$plugin/skills/setup-brain/domain.md" > docs/agents/domain.md
sed 's|{{repo}}|<owner>/<name>|' "$plugin/skills/setup-brain/issue-tracker-local.md" > docs/agents/issue-tracker.md
cp "$plugin/skills/setup-brain/triage-labels.md" docs/agents/triage-labels.md
