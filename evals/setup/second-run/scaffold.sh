#!/usr/bin/env bash
# The repo files exactly as setup-brain writes them, made from the plugin's templates at run
# time, so a second run has nothing to do in the repo. The plugin root is found from this
# script's own location; the case fails loudly when it is not.
set -euo pipefail
git init -q .
printf '{ "name": "probe", "version": "0.0.1" }\n' > package.json
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
templates="$plugin/skills/setup-brain"
for template in domain.md workspace.md STATUS.md; do
  if [ ! -f "$templates/$template" ]; then
    echo "scaffold: $templates/$template not found" >&2
    exit 1
  fi
done
mkdir -p docs/agents
sed 's/{{layout}}/single-context/' "$templates/domain.md" > docs/agents/domain.md
cp "$templates/workspace.md" docs/agents/workspace.md
cp "$templates/STATUS.md" docs/STATUS.md
