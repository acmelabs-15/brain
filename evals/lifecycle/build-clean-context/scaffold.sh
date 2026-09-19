#!/usr/bin/env bash
set -euo pipefail
git init -q .
git config user.email eval@example.com
git config user.name eval
mkdir -p spec src tasks
cat > spec/SPEC.md <<'SPEC'
# Spec: greeter
## Objective
A module that greets by name. `greet("Ann")` returns `"Hello, Ann"`; `shout("Ann")` returns `"HELLO, ANN"`.
## Commands
Test: bun test
## Testing Strategy
bun:test in src/__tests__/.
SPEC
cat > tasks/plan.md <<'PLAN'
# Plan: greeter
Two tasks, sequential.
PLAN
cat > tasks/todo.md <<'TODO'
# Tasks
- [ ] Task 1: greet
  - Acceptance: `greet("Ann")` returns `"Hello, Ann"`
  - Verify: bun test
  - Files: src/greet.ts, src/__tests__/greet.test.ts
- [ ] Task 2: shout
  - Acceptance: `shout("Ann")` returns `"HELLO, ANN"`, built on greet
  - Verify: bun test
  - Files: src/greet.ts, src/__tests__/greet.test.ts
TODO
printf '{ "name": "greeter", "type": "module" }\n' > package.json
git add -A && git commit -qm "scaffold"
