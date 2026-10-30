#!/usr/bin/env bash
# A repo on the brain 0.8 layout, committed: the 0.8 fixture of the workspace tests, copied from
# the plugin at run time, without the README that describes it to the tests. On top of it, an
# ADR folder as adr-tools writes it, doc/adr/, and a hand-written AGENTS.md whose "Task end"
# section brain's protocol covers, for the overlap step. The repo has its own git identity, so
# the migrate mode's commit works in a home with no git config. The plugin root is found from
# this script's own location; the case fails loudly when it is not.
set -euo pipefail
git init -q .
git config user.name eval
git config user.email eval@example.com
git config commit.gpgsign false
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
fixture="$plugin/scripts/workspace/__tests__/fixtures/layout-0.8"
if [ ! -f "$fixture/spec/SPEC-billing.md" ]; then
  echo "scaffold: the 0.8 fixture is not at $fixture" >&2
  exit 1
fi
cp -R "$fixture/." .
rm README.md
mkdir -p doc/adr
cat > doc/adr/0001-record-architecture-decisions.md <<'EOF'
# 1. Record architecture decisions

Date: 2026-07-01

## Status

Accepted

## Context

We need to record the architectural decisions made on this project.

## Decision

We will use Architecture Decision Records, as Michael Nygard describes them.

## Consequences

Each decision gets one short file in doc/adr/.
EOF
cat > AGENTS.md <<'EOF'
# Billing

## Commands

- `bun test` runs the tests.

## Task end

- Run `brain check`. Fix each finding, or name it as red in the next step.
- Rewrite `docs/STATUS.md`: the next action, anything red, and what waits on the user.
EOF
git add -A
git commit -q -m "chore: billing on brain 0.8"
