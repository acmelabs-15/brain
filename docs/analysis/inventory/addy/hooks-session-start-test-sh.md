---
package: addy
path: hooks/session-start-test.sh
type: file
bytes: 1224
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# hooks/session-start-test.sh

## Purpose — required, verbatim
> "Tests for the SessionStart hook JSON payload" — hooks/session-start-test.sh:2

## Design intent — required
Automated test script verifying the payload shape and content produced by `hooks/session-start.sh`. Asserts that the session-start hook emits JSON containing the expected priority level ('IMPORTANT' when jq is present, 'INFO' when missing) and verifies required introductory text and meta-skill instructions.

## Phase — required
none

## Inputs — required
- Subshell execution output from session-start.sh — hooks/session-start-test.sh:14

## Outputs — required
- Success confirmation string on stdout — hooks/session-start-test.sh:45

## Invokes — required
- script hooks/session-start.sh — hooks/session-start-test.sh:14

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:87
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:69

## Concepts named — required, verbatim
- `SessionStart` — hooks/session-start-test.sh:2 — used here
- `hook` — hooks/session-start-test.sh:2 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start-test.sh`, language: bash, lines: 47
- documented invocation: `bash hooks/session-start-test.sh` — CONTRIBUTING.md:87
- **executed:** yes
- actual command run: `bash hooks/session-start-test.sh`, abridged stdout: `Error: expected IMPORTANT priority, got undefined`, **actual exit code**: 1
- documented exit codes: "The script exits non-zero on any assertion failure." — CONTRIBUTING.md:90 vs. actual exit paths in code:
  - `throw new Error` — hooks/session-start-test.sh:25 (uncaught exception on unexpected priority exits non-zero)
  - `throw new Error` — hooks/session-start-test.sh:29 (uncaught exception on missing startup preface)
  - `throw new Error` — hooks/session-start-test.sh:33 (uncaught exception on missing using-agent-skills content)
  - `throw new Error` — hooks/session-start-test.sh:37 (uncaught exception on missing jq priority mismatch)
  - `throw new Error` — hooks/session-start-test.sh:41 (uncaught exception on missing jq fallback guidance)
  - `console.log` — hooks/session-start-test.sh:45 (implicit zero exit after successful execution)
- for validators/gates: test validator; can exit non-zero, and currently fails on the default branch because `hooks/session-start.sh` envelope was updated to `{ hookSpecificOutput: { ... } }` while this test was left expecting `{ priority, message }`
- does the output match what the documentation claims? no; CONTRIBUTING.md:90 expects `session-start JSON payload OK`, but execution fails with exit code 1

## Defects — required
- `script-bug` · hooks/session-start-test.sh:24 · Test asserts legacy `{ priority, message }` schema rather than current `{ hookSpecificOutput: { hookEventName, additionalContext } }` emitted by `hooks/session-start.sh`, causing test failure on clean repository checkout.
- `cross-file-contradiction` · hooks/session-start-test.sh:20 · Schema expectations contradict `hooks/session-start.sh:7` SessionStart envelope.

## Observations
Runs an embedded Node.js script to parse and validate JSON output. The test was not kept in sync when `hooks/session-start.sh` was migrated to support Claude Code and Codex CLI standardized hook envelopes.

## Context cost
1224 bytes, approximately 300 tokens.
