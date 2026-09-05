---
package: addy
path: hooks/session-start-test.sh
type: script
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
verified: 2026-09-04 quote-check+coverage
---

# hooks/session-start-test.sh

## Purpose — required, verbatim
> "Tests for the SessionStart hook JSON payload" — hooks/session-start-test.sh:2

## Design intent — required
Automated regression test for `hooks/session-start.sh`. It runs the hook script, captures its JSON stdout to a temporary file, and evaluates the payload using an inline Node.js script to check priority, message structure, and fallback behavior when `jq` is present or absent. Without this test, regressions in session startup context injection would go undetected during plugin development.

## Phase — required
none

## Inputs — required
- Output of `hooks/session-start.sh` — hooks/session-start-test.sh:14
- Environment variable `HAS_JQ` — hooks/session-start-test.sh:17
- Environment variable `PAYLOAD_PATH` — hooks/session-start-test.sh:17

## Outputs — required
- Test completion message `session-start JSON payload OK` on stdout — hooks/session-start-test.sh:45

## Invokes — required
- script session-start.sh — hooks/session-start-test.sh:14

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:87
- doc developer-onboarding.md — docs/developer-onboarding.md:69
- script simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:242

## Concepts named — required, verbatim
- `SessionStart` — hooks/session-start-test.sh:2 — used here
- `session-start-test` — hooks/session-start-test.sh:2 — defined here

## Structure
Executable test script without markdown headings:
- Temporary file setup and trap: `tmp_payload` — hooks/session-start-test.sh:6
- `jq` presence check: `has_jq` — hooks/session-start-test.sh:9-12
- Execution and output capture: `payload` — hooks/session-start-test.sh:14
- Node.js assertions on payload structure — hooks/session-start-test.sh:17-46

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `hooks/session-start-test.sh`, bash/node, 47 lines
- documented invocation: `bash hooks/session-start-test.sh` — CONTRIBUTING.md:87
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: Ran `bash hooks/session-start-test.sh`; stdout empty; stderr: `Error: expected IMPORTANT priority, got undefined`; **actual exit code**: 1.
- documented exit codes vs. actual exit paths: Documented: exits 0 with `session-start JSON payload OK` on success, non-zero on failure (CONTRIBUTING.md:90). Actual exit paths: exits 0 on line hooks/session-start-test.sh:45; throws unhandled error and exits 1 on failure at hooks/session-start-test.sh:25, 29, 33, 37, 41.
- for validators/gates: Always-failing gate on default repository branch.
- does the output match what the documentation claims? No, crashes with uncaught exception `expected IMPORTANT priority, got undefined` and exits 1 instead of exiting 0 with `session-start JSON payload OK`.

## Defects — required
- cross-file-contradiction · hooks/session-start-test.sh:24 · Test expects legacy JSON properties priority and message, contradicting hooks/session-start.sh:25 which outputs the standard hookSpecificOutput envelope.
- always-failing-gate · hooks/session-start-test.sh:24 · Test script fails unconditionally on default branch because hook envelope changed without updating this test.

## Observations
- Demonstrates drift between test suite and production hook: `session-start.sh` was migrated to the Claude Code / Codex `hookSpecificOutput` envelope format, but `session-start-test.sh` still checks the deprecated `{priority, message}` schema.
- Employs an inline Node.js script heredoc to perform JSON property inspection across environment variables.

## Context cost
1224 bytes (~306 tokens). Standalone test script.
