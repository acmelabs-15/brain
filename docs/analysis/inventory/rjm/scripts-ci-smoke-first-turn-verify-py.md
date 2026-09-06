---
package: rjm
path: scripts/ci/smoke_first_turn_verify.py
type: script
bytes: 1269
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/smoke_first_turn_verify.py, sha256: 6f793e3d980332f823ee1895ae17b61db70b0ae484a7efe88a0018c6bc801ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/smoke_first_turn_verify.py

## Purpose — required, verbatim
> "First-turn verification: assert excluded paths are NOT vendored." — scripts/ci/smoke_first_turn_verify.py:2

## Design intent — required
Enforces a negative security and cleanliness gate during CLI smoke tests by asserting that forbidden or internal trees (`.claude/hooks`, `.claude/lib`, `.claude/settings.json`, and `.claude/skills/github`) are never bundled into the vendored distribution package, replacing inline PowerShell in `cli-smoke.yml` per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"DEMO"` — scripts/ci/smoke_first_turn_verify.py:24: absolute path to demo directory

## Outputs — required
- Status verification log printed to stdout (`print("First-turn lint OK (no excluded trees vendored)")` — scripts/ci/smoke_first_turn_verify.py:45)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`cli-smoke.yml` — scripts/ci/smoke_first_turn_verify.py:5 — used here
`ADR-006` — scripts/ci/smoke_first_turn_verify.py:5 — used here
`ADR-035` — scripts/ci/smoke_first_turn_verify.py:10 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/smoke_first_turn_verify.py`, language: Python 3, lines: 56
- documented invocation: `"First-turn verification: assert excluded paths are NOT vendored." — scripts/ci/smoke_first_turn_verify.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/smoke_first_turn_verify.py`, stderr: `::error::DEMO env var is required`, **actual exit code**: 1
- documented exit codes: `"0 - none of the excluded paths are present" — scripts/ci/smoke_first_turn_verify.py:11`, `"1 - one or more excluded paths are present" — scripts/ci/smoke_first_turn_verify.py:12`; actual exit paths: `scripts/ci/smoke_first_turn_verify.py:27` (`return 1` if DEMO unset), `scripts/ci/smoke_first_turn_verify.py:43` (`return 1` if banned path present), `scripts/ci/smoke_first_turn_verify.py:46` (`return 0`), `scripts/ci/smoke_first_turn_verify.py:51` (`return run()`), `scripts/ci/smoke_first_turn_verify.py:55` (`sys.exit(main())`)
- for validators/gates: negative exclusion gate; exits 1 if any banned path exists in the vendored tree, 0 if all are absent
- does the output match what the documentation claims? yes, verifies absence of excluded paths

## Defects — required
none

## Observations
Acts as an exclusion verification gate guarding against accidental leakage of internal dev-only hooks, internal libraries, and environment settings into distributed tarballs.

## Context cost
1269 bytes, approximately 317 tokens.
