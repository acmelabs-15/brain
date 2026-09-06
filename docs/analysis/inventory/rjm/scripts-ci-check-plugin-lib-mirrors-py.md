---
package: rjm
path: scripts/ci/check_plugin_lib_mirrors.py
type: script
bytes: 1323
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_plugin_lib_mirrors.py, sha256: 2ba1360dfea77be673c75b9acac6c476472966335816f1b3cedb061ce32bbab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/check_plugin_lib_mirrors.py

## Purpose — required, verbatim
> "Check that plugin lib mirrors are in sync." — scripts/ci/check_plugin_lib_mirrors.py:2

## Design intent — required
Drift-detection gate ensuring synchronization across plugin library mirrors in the repository. It sequences two sync checks: validating that `scripts/` mirrors match `.claude/lib/` via `scripts/sync_plugin_lib.py --check`, and validating that `.claude/lib/` mirrors match `src/copilot-cli/lib/` via `build/scripts/build_all.py --check`. If either check detects drift or fails, it exits with that script's non-zero return code (issue #3521).

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Status progress text printed to stdout during execution — scripts/ci/check_plugin_lib_mirrors.py:35, 39

## Invokes — required
- script scripts/sync_plugin_lib.py — scripts/ci/check_plugin_lib_mirrors.py:19
- script build/scripts/build_all.py — scripts/ci/check_plugin_lib_mirrors.py:20

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/ci/check_plugin_lib_mirrors.py:9 — used here
- `run_check` — scripts/ci/check_plugin_lib_mirrors.py:23 — defined here
- `main` — scripts/ci/check_plugin_lib_mirrors.py:34 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_plugin_lib_mirrors.py`, language: Python, lines: 49
- documented invocation:
  "Runs sync_plugin_lib.py --check and build_all.py --check." — scripts/ci/check_plugin_lib_mirrors.py:4
- executed: yes
- actual command run: `python3 scripts/ci/check_plugin_lib_mirrors.py` (executed from repo root `sources/rjm`)
  abridged stdout: `Checking scripts/ -> .claude/lib/ sync via sync_plugin_lib.py --check ... All plugin lib copies are in sync.`
  actual exit code: 1 (in system python missing yaml module in build_all.py) / 0 when executed with rjm venv python.
- documented exit codes:
  "0      - Both checks passed" — scripts/ci/check_plugin_lib_mirrors.py:10
  "other  - First non-zero exit code from the two checks" — scripts/ci/check_plugin_lib_mirrors.py:11
  vs. actual exit paths in code:
  `return mirror_rc` — scripts/ci/check_plugin_lib_mirrors.py:43
  `return build_rc` — scripts/ci/check_plugin_lib_mirrors.py:44
  `sys.exit(main())` — scripts/ci/check_plugin_lib_mirrors.py:48
- for validators/gates: can it exit non-zero? yes (returns first non-zero exit code from the sub-checks). Does it fail on default branch? Passes cleanly (exit code 0) when prerequisites are met.
- does the output match what the documentation claims? yes (executes both checks in sequence and returns first failure code).

## Defects — required
- orphan — scripts/ci/check_plugin_lib_mirrors.py:1 — Not invoked by any in-scope lifecycle script or agent; only referenced in tests and out-of-scope `.github/workflows/agent-drift-detection.yml`.

## Observations
- Hardcodes relative script paths `scripts/sync_plugin_lib.py` and `build/scripts/build_all.py`, requiring execution from repo root.
- References `build/scripts/build_all.py` which belongs to the excluded `build/` directory tree (METHOD §1.2).

## Context cost
1323 bytes (~350 tokens) + loads `scripts/sync_plugin_lib.py` (15589 bytes) and `build/scripts/build_all.py` (50684 bytes).
