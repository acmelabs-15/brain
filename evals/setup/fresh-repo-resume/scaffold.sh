#!/usr/bin/env bash
# A fresh repo just after /setup-brain on Claude Code, committed: the repo's own AGENTS.md
# (stack, commands, boundaries; no brain text), and the files setup-brain writes, made from the
# plugin's templates at run time: domain.md, workspace.md and the STATUS.md seed. The plugin
# root is found from this script's own location; the case fails loudly when it is not.
set -euo pipefail
git init -q .
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
templates="$plugin/skills/setup-brain"
for template in domain.md workspace.md STATUS.md; do
  if [ ! -f "$templates/$template" ]; then
    echo "scaffold: $templates/$template not found" >&2
    exit 1
  fi
done
printf '{ "name": "probe", "version": "0.0.1" }\n' > package.json
cat > AGENTS.md <<'EOF'
# Probe

## Stack

- Bun and TypeScript.

## Commands

- `bun test` runs the tests.

## Boundaries

- Ask before you add a dependency.
EOF
mkdir -p docs/agents
sed 's/{{layout}}/single-context/' "$templates/domain.md" > docs/agents/domain.md
cp "$templates/workspace.md" docs/agents/workspace.md
cp "$templates/STATUS.md" docs/STATUS.md
git add -A
git -c user.name=eval -c user.email=eval@example.com commit -q -m "chore: set up brain"
