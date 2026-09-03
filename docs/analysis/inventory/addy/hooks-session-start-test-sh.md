---
package: addy
path: hooks/session-start-test.sh
type: script
bytes: 1224
unit: inv-addy-8
---

# hooks/session-start-test.sh

## Purpose — required, verbatim
> "# session-start-test.sh - Tests for the SessionStart hook JSON payload" — hooks/session-start-test.sh:2

## Design intent — required
A test script intended to validate the JSON payload emitted by `hooks/session-start.sh` during Claude Code session startup, ensuring that the hook correctly structures its output and injects the `using-agent-skills` meta-skill when `jq` is installed, or produces appropriate fallback guidance when `jq` is absent.

## Phase — required
`cross-phase` (hook verification test for developer tooling)

## Inputs — required
- Output of command `bash hooks/session-start.sh` (hooks/session-start-test.sh:14)
- System tool availability (`jq` checked via `command -v jq`) (hooks/session-start-test.sh:9-12)
- Temporary file allocated via `mktemp` (hooks/session-start-test.sh:6)
- Node.js runtime (`node`) executing an inline assertion script via heredoc (hooks/session-start-test.sh:17-46)

## Outputs — required
- Stdout message: `session-start JSON payload OK` (hooks/session-start-test.sh:45; currently unreachable due to defect)
- Stderr assertion error when payload format fails validation (hooks/session-start-test.sh:25, 29, 33, 37, 41)
- Exit code 0 on pass; exit code 1 on failure

## Invokes — required
- script hooks/session-start.sh — hooks/session-start-test.sh:14
- runtime node — hooks/session-start-test.sh:17
- tool jq — hooks/session-start-test.sh:10
- tool mktemp, trap, rm, printf — hooks/session-start-test.sh:6, 7, 15

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:79, 87, 99
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:69
- script hooks/simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:242

## Concepts named — required, verbatim
- `session-start-test.sh` — hooks/session-start-test.sh:2 — defined here
- `SessionStart` — hooks/session-start-test.sh:2 — used here
- `IMPORTANT` — hooks/session-start-test.sh:24, 25 — used here
- `INFO` — hooks/session-start-test.sh:36, 37 — used here
- `using-agent-skills` — hooks/session-start-test.sh:33 — used here
- `agent-skills loaded` — hooks/session-start-test.sh:28 — used here

## Structure
1. Shebang & purpose comment (`#!/bin/bash`) — hooks/session-start-test.sh:1-2
2. Options (`set -euo pipefail`) — hooks/session-start-test.sh:4
3. Temporary payload file setup & trap cleanup — hooks/session-start-test.sh:6-7
4. `jq` presence probe (`command -v jq`) — hooks/session-start-test.sh:9-12
5. Hook execution & payload capture (`bash hooks/session-start.sh`) — hooks/session-start-test.sh:14-15
6. Node.js inline validation script (`HAS_JQ=... node <<'NODE'`) — hooks/session-start-test.sh:17-46

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start-test.sh`
- language: bash (with inline node / JavaScript, 47 lines)
- documented invocation: `bash hooks/session-start-test.sh` — CONTRIBUTING.md:87, 99; docs/developer-onboarding.md:69
- executed: yes
- actual command run: `cd sources/addy && bash hooks/session-start-test.sh`
- abridged stdout: (none; crashed on stderr)
- abridged stderr:
  ```
  [stdin]:8
      throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
      ^

  Error: expected IMPORTANT priority, got undefined
      at [stdin]:8:11
  ```
- actual exit code: 1
- documented exit codes vs actual exit paths:
  - Documented: Expected output is `session-start JSON payload OK` with exit code 0 (CONTRIBUTING.md:90: "Expected output: `session-start JSON payload OK`. The script exits non-zero on any assertion failure.").
  - Actual exit paths:
    - Line 25: `throw new Error(...)` exits 1 (if `payload.priority !== 'IMPORTANT'`)
    - Line 29: `throw new Error(...)` exits 1 (if missing preface)
    - Line 33: `throw new Error(...)` exits 1 (if missing skill content)
    - Line 37: `throw new Error(...)` exits 1 (if `payload.priority !== 'INFO'`)
    - Line 41: `throw new Error(...)` exits 1 (if missing jq guidance)
    - Line 45: `console.log('session-start JSON payload OK')` / line 46: process exits 0
- validators/gates evaluation:
  - Can it exit non-zero? Yes.
  - Does it fail on default branch? YES. IT ALWAYS FAILS with exit code 1 on the pinned commit.
- does output match documentation claims: NO. Documentation claims output is `session-start JSON payload OK`, but in reality it throws an uncaught JavaScript Error and exits 1.

## Defects — required
- `always-failing-gate` · `script-bug` · hooks/session-start-test.sh:24-43: The gate fails unconditionally on every execution. `hooks/session-start.sh` was updated to emit Claude Code's standard `hookSpecificOutput` envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`), but `hooks/session-start-test.sh` was never updated and still asserts against deprecated top-level properties `payload.priority` and `payload.message`.
- `script-bug` · hooks/session-start-test.sh:24, 36: Asserts `payload.priority === 'IMPORTANT'` and `payload.priority === 'INFO'`, both of which are `undefined` on all current outputs of `hooks/session-start.sh`.
- `cross-file-contradiction` · hooks/session-start-test.sh:20-43 vs hooks/session-start.sh:5-7, 21-25: `session-start.sh` explicitly documents: "Every output path must emit the standard SessionStart envelope `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`. Hosts that validate hook output (Codex CLI, Claude Code) reject other shapes." In direct contradiction, `session-start-test.sh` requires `{priority: "...", message: "..."}`.
- `doc-drift` · CONTRIBUTING.md:79, 87-90, 94-105 vs hooks/session-start-test.sh:1-47: CONTRIBUTING.md documents that running `bash hooks/session-start-test.sh` validates the payload and outputs `session-start JSON payload OK`, which is false on this commit.

## Observations
- Demonstrates an explicit break in contract testing where hook implementation was updated for platform compatibility (`hookSpecificOutput`), but test suite was neglected.
- The test can be repaired by updating assertions to validate `payload.hookSpecificOutput.hookEventName === 'SessionStart'` and `payload.hookSpecificOutput.additionalContext.includes(...)`.

## Context cost
1,224 bytes (~310 tokens).
