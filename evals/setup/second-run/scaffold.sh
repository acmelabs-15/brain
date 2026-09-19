#!/usr/bin/env bash
set -euo pipefail
git init -q .
printf '{ "name": "probe", "version": "0.0.1" }\n' > package.json
# The docs files as setup-brain writes them, so a second run has nothing to do in the repo.
plugin="${EVAL_BRAIN_ROOT:-}"
mkdir -p docs/agents
if [ -n "$plugin" ] && [ -f "$plugin/skills/setup-brain/domain.md" ]; then
  sed 's/{{layout}}/single-context/' "$plugin/skills/setup-brain/domain.md" > docs/agents/domain.md
  cp "$plugin/skills/setup-brain/issue-tracker-local.md" docs/agents/issue-tracker.md
  cp "$plugin/skills/setup-brain/triage-labels.md" docs/agents/triage-labels.md
else
  printf '# Domain docs\n' > docs/agents/domain.md
  printf '# Issue tracker: local\n' > docs/agents/issue-tracker.md
  printf '# Triage labels\n' > docs/agents/triage-labels.md
fi
