#!/usr/bin/env bash
set -euo pipefail
git init -q .
printf '{ "name": "probe", "version": "0.0.1" }\n' > package.json
# The block and the docs files as setup-brain writes them, so a second run has nothing to do.
plugin="${EVAL_BRAIN_ROOT:-}"
if [ -n "$plugin" ] && [ -f "$plugin/plain-talk/AGENTS-block.md" ]; then
  cp "$plugin/plain-talk/AGENTS-block.md" AGENTS.md
  mkdir -p docs/agents
  sed 's/{{layout}}/single-context/' "$plugin/skills/setup-brain/domain.md" > docs/agents/domain.md
  cp "$plugin/skills/setup-brain/issue-tracker-local.md" docs/agents/issue-tracker.md
  cp "$plugin/skills/setup-brain/triage-labels.md" docs/agents/triage-labels.md
else
  printf '<!-- brain:plain-talk:start -->\n## Talk plain\n<!-- brain:plain-talk:end -->\n' > AGENTS.md
  mkdir -p docs/agents
  printf '# Domain docs\n' > docs/agents/domain.md
fi
