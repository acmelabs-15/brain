#!/usr/bin/env bash
# A brain repo mid-build: setup-brain's workspace.md and one spec folder, SPEC-001, whose plan
# holds two open task rows and whose todo holds one block per row. No old-layout file.
set -euo pipefail
git init -q .
git config user.email eval@example.com
git config user.name eval
mkdir -p docs/agents specs/SPEC-001-greeter/tasks
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md
cat > specs/SPEC-001-greeter/spec.md <<'SPEC'
---
spec: SPEC-001
sources: []
---
# SPEC-001: Greeter

## Objective
A module that greets by name. `greet("Ann")` returns `"Hello, Ann"`; `shout("Ann")` returns `"HELLO, ANN"`.

## Commands
Test: `bun test`

## Testing Strategy
`bun:test`, with the tests in `src/__tests__/`.
SPEC
cat > specs/SPEC-001-greeter/tasks/plan.md <<'PLAN'
---
spec: SPEC-001
---
# SPEC-001 plan: Greeter

## Overview
Two tasks, in order: `greet`, then `shout` on top of it.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Greet by name | task | open | — | — |
| 02 | Shout a greeting | task | open | 01 | — |

## Parallel waves
| Wave | Rows |
|---|---|
| 1 | 01 |
| 2 | 02 |

Critical path, 2 rows: 01, 02.

Files that more than one task in a wave touches: none.

Phases that share a wave: none.
PLAN
cat > specs/SPEC-001-greeter/tasks/todo.md <<'TODO'
---
spec: SPEC-001
---
# SPEC-001 todo: Greeter

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Greet by name

**Description:** `greet(name)` returns a greeting for one name.

**Acceptance criteria:**
- [ ] `greet("Ann")` returns `"Hello, Ann"`

**Verification:**
- [ ] `bun test src/__tests__/greet.test.ts` passes

**Files likely touched:**
- `src/greet.ts`
- `src/__tests__/greet.test.ts`

**Scope:** XS

## Task 02: Shout a greeting

**Description:** `shout(name)` returns the greeting of `greet` in capitals.

**Acceptance criteria:**
- [ ] `shout("Ann")` returns `"HELLO, ANN"`, built on `greet`

**Verification:**
- [ ] `bun test src/__tests__/shout.test.ts` passes

**Files likely touched:**
- `src/shout.ts`
- `src/__tests__/shout.test.ts`

**Scope:** XS
TODO
printf '{ "name": "greeter", "type": "module" }\n' > package.json
git add -A && git commit -qm "scaffold"
