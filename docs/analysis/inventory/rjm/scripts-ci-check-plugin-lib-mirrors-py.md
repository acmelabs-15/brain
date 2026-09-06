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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_plugin_lib_mirrors.py

## Purpose — required, verbatim
> "Check that plugin lib mirrors are in sync." — scripts/ci/check_plugin_lib_mirrors.py:2

## Design intent — required
Validates two-tier mirroring synchronization across platforms in CI: first checks `scripts/` to `.claude/lib/` mirror sync via `scripts/sync_plugin_lib.py --check`, and if that passes, checks `.claude/lib/` to `src/copilot-cli/lib/` mirror sync via `build/scripts/build_all.py --check`.

## Phase — required
cross-phase

## Inputs — required
- Execution of `scripts/sync_plugin_lib.py --check`: `scripts/ci/check_plugin_lib_mirrors.py:19`
- Execution of `build/scripts/build_all.py --check`: `scripts/ci/check_plugin_lib_mirrors.py:20`

## Outputs — required
- Progress and status logs printed to stdout: `scripts/ci/check_plugin_lib_mirrors.py:35`, `scripts/ci/check_plugin_lib_mirrors.py:39`

## Invokes — required
- script scripts/sync_plugin_lib.py — scripts/ci/check_plugin_lib_mirrors.py:19
- script build/scripts/build_all.py — scripts/ci/check_plugin_lib_mirrors.py:20

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-035` — scripts/ci/check_plugin_lib_mirrors.py:9 — used here
`_MIRROR_SCRIPT` — scripts/ci/check_plugin_lib_mirrors.py:19 — defined here
`_BUILD_SCRIPT` — scripts/ci/check_plugin_lib_mirrors.py:20 — defined here
`run_check` — scripts/ci/check_plugin_lib_mirrors.py:23 — defined here
`main` — scripts/ci/check_plugin_lib_mirrors.py:34 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_plugin_lib_mirrors.py`, language: Python 3, lines: 49
- documented invocation: `"Check that plugin lib mirrors are in sync." — scripts/ci/check_plugin_lib_mirrors.py:2`
- **executed:** yes
- actual command run: `.venv/bin/python3 scripts/ci/check_plugin_lib_mirrors.py`, abridged stdout: `Checking scripts/ -> .claude/lib/ sync via sync_plugin_lib.py --check\n\nAll plugin lib copies are in sync.\n\nChecking .claude/lib/ -> src/copilot-cli/lib/ sync via build_all.py --check`, **actual exit code**: 0
- documented exit codes: `"0      - Both checks passed" — scripts/ci/check_plugin_lib_mirrors.py:10`, `"other  - First non-zero exit code from the two checks" — scripts/ci/check_plugin_lib_mirrors.py:11` vs. actual exit paths: `scripts/ci/check_plugin_lib_mirrors.py:43` (`return mirror_rc` if mirror_rc != 0), `scripts/ci/check_plugin_lib_mirrors.py:44` (`return build_rc`); dispatched via `sys.exit(main())` at `scripts/ci/check_plugin_lib_mirrors.py:48`
- for validators/gates: can exit non-zero (exits with the non-zero returncode of either subprocess check if mirrors are out of sync); exits 0 on clean tree
- does the output match what the documentation claims? yes, runs both checks sequentially and passes with exit 0 when both mirrors are synchronized

## Defects — required
none

## Observations
Hardcodes relative paths to `scripts/sync_plugin_lib.py` and `build/scripts/build_all.py`, requiring execution from repo root. The build script dependency requires python environment with pyyaml installed (`.venv`).

## Context cost
1323 bytes, approximately 330 tokens.
