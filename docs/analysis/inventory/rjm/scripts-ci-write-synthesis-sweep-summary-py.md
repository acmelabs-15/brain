---
package: rjm
path: scripts/ci/write_synthesis_sweep_summary.py
type: script
bytes: 1950
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/write_synthesis_sweep_summary.py, sha256: 9732aaa0ee10e54638d74fbe8b52f84ddafbc55ac0d3ed4cf2a0f0ae628bf82e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/write_synthesis_sweep_summary.py

## Purpose — required, verbatim
> "Write the Copilot Context Synthesis Sweep step summary." — scripts/ci/write_synthesis_sweep_summary.py:1

## Design intent — required
CI step summary generator replacing an inline bash block in `copilot-context-synthesis.yml` per ADR-006 ("no logic in YAML"). It reads trigger metadata, issue count, and issue lists from environment variables and formats a markdown sweep summary indicating whether any `copilot-ready` issues were discovered or all issues are processed.

## Phase — required
cross-phase

## Inputs — required
- Destination file path via environment variable `GITHUB_STEP_SUMMARY` — scripts/ci/write_synthesis_sweep_summary.py:48
- Trigger identifier via environment variable `TRIGGER` — scripts/ci/write_synthesis_sweep_summary.py:53
- Count string via environment variable `ISSUES_COUNT` — scripts/ci/write_synthesis_sweep_summary.py:54
- Issue numbers list string via environment variable `ISSUES` — scripts/ci/write_synthesis_sweep_summary.py:55

## Outputs — required
- Sweep summary in Markdown appended to destination summary file — scripts/ci/write_synthesis_sweep_summary.py:5,66
- Error message to stderr when destination path is missing or unwritable — scripts/ci/write_synthesis_sweep_summary.py:50,68
- Process exit code: 0 on success, 2 on configuration error — scripts/ci/write_synthesis_sweep_summary.py:8-9

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `copilot-context-synthesis.yml` — scripts/ci/write_synthesis_sweep_summary.py:3 — used here
- `ADR-006` — scripts/ci/write_synthesis_sweep_summary.py:4 — used here
- `ADR-035` — scripts/ci/write_synthesis_sweep_summary.py:7 — used here
- `EXIT_SUCCESS` — scripts/ci/write_synthesis_sweep_summary.py:17 — defined here
- `EXIT_CONFIG` — scripts/ci/write_synthesis_sweep_summary.py:18 — defined here
- `copilot-ready` — scripts/ci/write_synthesis_sweep_summary.py:32 — used here

## Structure
- build_sweep_summary(trigger: str, count: int, issues: str) -> str
- main() -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/write_synthesis_sweep_summary.py`, Python 3, 76 lines
- **documented invocation:**
  > "(ADR-006: no logic in YAML). Reads trigger, count, and issues from env" — scripts/ci/write_synthesis_sweep_summary.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/write_synthesis_sweep_summary.py`
- **actual exit code:** 2
- **abridged stdout/stderr:** `ERROR: GITHUB_STEP_SUMMARY not set`
- **documented exit codes:**
  > "0  - Success" — scripts/ci/write_synthesis_sweep_summary.py:8
  > "2  - Configuration error (GITHUB_STEP_SUMMARY not set)" — scripts/ci/write_synthesis_sweep_summary.py:9
  vs. actual exit paths:
  - `scripts/ci/write_synthesis_sweep_summary.py:51`: `return EXIT_CONFIG` (when `GITHUB_STEP_SUMMARY` is empty)
  - `scripts/ci/write_synthesis_sweep_summary.py:69`: `return EXIT_CONFIG` (when summary file write raises OSError)
  - `scripts/ci/write_synthesis_sweep_summary.py:71`: `return EXIT_SUCCESS` (when summary is successfully appended)
  - `scripts/ci/write_synthesis_sweep_summary.py:75`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 2 when `GITHUB_STEP_SUMMARY` is unset or unwritable). Fails on source repo default branch: yes (exits 2 when run directly without setting environment variables).
- **output match:** yes, parses issues count with fallback to 0 and formats clean markdown summaries for empty vs. non-empty issue batches.

## Defects — required
none

## Observations
Gracefully coerces non-numeric `ISSUES_COUNT` values to integer 0 (lines 57-60) to avoid uncaught exceptions during summary generation.

## Context cost
File size: 1950 bytes (~490 tokens). Standard library only.
