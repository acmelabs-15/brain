---
package: addy
path: hooks/session-start-test.sh
type: file
bytes: 1224
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/session-start-test.sh

## Purpose — required, verbatim
> "session-start-test.sh - Tests for the SessionStart hook JSON payload" — hooks/session-start-test.sh:2

## Design intent — required
Provides an automated verification script that executes `hooks/session-start.sh` and validates the emitted JSON payload using an embedded Node.js test runner. Intended to ensure that the session start hook injects the required metadata and preface content when `jq` is installed, and emits proper fallback instructions when `jq` is absent.

## Phase — required
addy:Verify

## Inputs — required
- Hook output from executing `bash hooks/session-start.sh` — hooks/session-start-test.sh:14
- Environment variable `HAS_JQ` — hooks/session-start-test.sh:17
- Environment variable `PAYLOAD_PATH` — hooks/session-start-test.sh:17

## Outputs — required
- Console log `session-start JSON payload OK` on pass — hooks/session-start-test.sh:45
- Error stack trace and exit 1 on assertion failure — hooks/session-start-test.sh:25

## Invokes — required
- script hooks/session-start.sh — hooks/session-start-test.sh:14

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SessionStart` — hooks/session-start-test.sh:2 — used here
- `JSON payload` — hooks/session-start-test.sh:2 — used here
- `jq` — hooks/session-start-test.sh:10 — used here
- `priority` — hooks/session-start-test.sh:24 — used here
- `IMPORTANT` — hooks/session-start-test.sh:24 — used here
- `message` — hooks/session-start-test.sh:28 — used here
- `agent-skills loaded.` — hooks/session-start-test.sh:28 — used here
- `# Using Agent Skills` — hooks/session-start-test.sh:32 — used here
- `INFO` — hooks/session-start-test.sh:36 — used here
- `jq is required` — hooks/session-start-test.sh:40 — used here

## Structure
- set -euo pipefail and temp payload setup — hooks/session-start-test.sh:4-7
- Dependency check for jq — hooks/session-start-test.sh:9-12
- Execution of session-start.sh — hooks/session-start-test.sh:14-15
- Node.js test runner execution with assertions — hooks/session-start-test.sh:17-46

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start-test.sh`, language: bash / node, lines: 47
- documented invocation: `payload="$(bash hooks/session-start.sh)"` — hooks/session-start-test.sh:14
- executed: yes
- actual command run: `bash hooks/session-start-test.sh`, stdout: (empty), actual exit code: 1, stderr: `Error: expected IMPORTANT priority, got undefined`
- documented exit codes: exit 0 on clean pass (`hooks/session-start-test.sh:45`); exit 1 on assertion failure (`hooks/session-start-test.sh:25`)
- for validators/gates: always fails on default branch with exit code 1 because `session-start.sh` outputs `hookSpecificOutput` envelope without top-level `priority` or `message`
- does output match documentation: no, crashes on default branch due to schema drift

## Defects — required
- script-bug / doc-drift — hooks/session-start-test.sh:24: regression test crashes with exit code 1 on default branch ("expected IMPORTANT priority" — hooks/session-start-test.sh:25) because target script `hooks/session-start.sh` was modified to output `{hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: ...}}` while this test continues to expect top-level `priority` and `message` properties. Addresses Phase 1V finding.

## Observations
Illustrates how contract changes in platform hook formats (`hookSpecificOutput` envelope) broke backward compatibility with existing test assertions that expected Claude Code's earlier flat envelope structure.

## Context cost
1224 bytes, approximately 310 tokens.
