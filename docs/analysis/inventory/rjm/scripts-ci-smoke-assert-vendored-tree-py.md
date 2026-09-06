---
package: rjm
path: scripts/ci/smoke_assert_vendored_tree.py
type: script
bytes: 1681
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/smoke_assert_vendored_tree.py, sha256: d75a4e65f09d5668532eb6799648ce863bb35a241f0174b2be3366848154318d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/smoke_assert_vendored_tree.py

## Purpose — required, verbatim
> "Assert the vendored tree contains the expected paths." — scripts/ci/smoke_assert_vendored_tree.py:2

## Design intent — required
Verifies that a freshly initialized vendored agent package contains all required top-level directories and version metadata files (`.claude/agents`, `commands`, `skills`, `CLAUDE.md`, `AGENTS.md`, and `.ai-agents-version.json`), replacing an inline PowerShell assertion block in `cli-smoke.yml` per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"DEMO"` — scripts/ci/smoke_assert_vendored_tree.py:23: absolute path to demo directory

## Outputs — required
- Diagnostic verification log printed to stdout (`print(f"Vendored tree OK ({len(expected)} paths present)")` — scripts/ci/smoke_assert_vendored_tree.py:54)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`cli-smoke.yml` — scripts/ci/smoke_assert_vendored_tree.py:4 — used here
`ADR-006` — scripts/ci/smoke_assert_vendored_tree.py:4 — used here
`ADR-035` — scripts/ci/smoke_assert_vendored_tree.py:9 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/smoke_assert_vendored_tree.py`, language: Python 3, lines: 65
- documented invocation: `"Assert the vendored tree contains the expected paths." — scripts/ci/smoke_assert_vendored_tree.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/smoke_assert_vendored_tree.py`, stderr: `::error::DEMO env var is required`, **actual exit code**: 1
- documented exit codes: `"0 - all expected paths present" — scripts/ci/smoke_assert_vendored_tree.py:10`, `"1 - one or more paths missing" — scripts/ci/smoke_assert_vendored_tree.py:11`; actual exit paths: `scripts/ci/smoke_assert_vendored_tree.py:26` (`return 1` if DEMO unset), `scripts/ci/smoke_assert_vendored_tree.py:52` (`return 1` if missing any path), `scripts/ci/smoke_assert_vendored_tree.py:55` (`return 0`), `scripts/ci/smoke_assert_vendored_tree.py:60` (`return run()`), `scripts/ci/smoke_assert_vendored_tree.py:64` (`sys.exit(main())`)
- for validators/gates: structural integrity gate; exits 1 if any expected container or leaf path is missing, 0 if all 6 expected paths exist
- does the output match what the documentation claims? yes, checks presence of container and leaf paths

## Defects — required
none

## Observations
Distinguishes directory containers (`is_dir=True`) from file leaves (`is_dir=False`) to ensure proper type validation across all 6 checked paths.

## Context cost
1681 bytes, approximately 420 tokens.
