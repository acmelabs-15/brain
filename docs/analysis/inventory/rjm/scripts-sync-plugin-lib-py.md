---
package: rjm
path: scripts/sync_plugin_lib.py
type: script
bytes: 15589
unit: inv-rjm-262
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/sync_plugin_lib.py, sha256: 8311587c8a293fb29bddf255c8f8d6adcf33b4821de992b06dbb6d831bb3f982}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/sync_plugin_lib.py

## Purpose — required, verbatim
> "Sync scripts/ packages to .claude/lib/ with relative imports for plugin distribution." — scripts/sync_plugin_lib.py:2

## Design intent — required
Maintains synchronization between canonical development Python packages under `scripts/` (`hook_utilities`, `github_core`, `ai_review_common`) and distribution library copies under `.claude/lib/` by rewriting intra-package absolute imports to relative imports, byte-copying registered single-file modules, and providing a `--check` verification gate for CI pipelines to prevent distribution drift.

## Phase — required
cross-phase

## Inputs — required
- Canonical source package directories: `scripts/hook_utilities`, `scripts/github_core`, `scripts/ai_review_common`: `scripts/sync_plugin_lib.py:27-31`
- Canonical single source files: `scripts/hook_utilities/bootstrap.py`, `scripts/validation/validate_review_marker.py`: `scripts/sync_plugin_lib.py:41-47`
- CLI flag `--check`: `scripts/sync_plugin_lib.py:403`

## Outputs — required
- Mirrored package directories under `.claude/lib/` with relative imports: `scripts/sync_plugin_lib.py:28-30`
- Mirrored files: `.claude/lib/bootstrap.py`, `.claude/skills/review/scripts/validate_review_marker.py`: `scripts/sync_plugin_lib.py:42-46`
- Change summaries, error notifications, and drift listings to stdout/stderr: `scripts/sync_plugin_lib.py:427`, `scripts/sync_plugin_lib.py:431-435`, `scripts/sync_plugin_lib.py:437-440`

## Invokes — required
none

## Invoked by — required
- script pre_pr_sequence.py — scripts/validation/pre_pr_sequence.py:292
- script check_generated_staleness.py — scripts/validation/check_generated_staleness.py:12
- script validate_sync_registry.py — scripts/validation/validate_sync_registry.py:4
- doc generated-artifacts.instructions.md — src/copilot-cli/instructions/generated-artifacts.instructions.md:152

## Concepts named — required, verbatim
- `plugin distribution` — scripts/sync_plugin_lib.py:2 — used here
- `SYNC_PAIRS` — scripts/sync_plugin_lib.py:27 — defined here
- `SYNC_FILE_PAIRS` — scripts/sync_plugin_lib.py:41 — defined here
- `IMPORT_CONVERSIONS` — scripts/sync_plugin_lib.py:49 — defined here
- `LIB_ONLY_FILES` — scripts/sync_plugin_lib.py:59 — defined here
- `sync_pair` — scripts/sync_plugin_lib.py:187 — defined here
- `sync_file` — scripts/sync_plugin_lib.py:322 — defined here
- `main` — scripts/sync_plugin_lib.py:396 — defined here

## Structure
(no headings, flat python script with comment section dividers)

## Scripts — required if type is script or the skill ships scripts
For `scripts/sync_plugin_lib.py`:
- path, language, lines: `scripts/sync_plugin_lib.py`, Python, 445 lines
- documented invocation:
  "python3 scripts/sync_plugin_lib.py --check" — scripts/sync_plugin_lib.py:10
- **executed:** yes
- actual command run: `python3 scripts/sync_plugin_lib.py --check`
- actual stdout (abridged):
```
All plugin lib copies are in sync.
```
- **actual exit code:** 0
- documented exit codes:
  "exits 1 if out of sync" — scripts/sync_plugin_lib.py:10
  "Returns 0 on success, 1 if --check finds drift." — scripts/sync_plugin_lib.py:397
  vs. actual exit paths:
  `return 1 if any_errors else 0` at `scripts/sync_plugin_lib.py:428`
  `return 1` at `scripts/sync_plugin_lib.py:435` (drift detected in check mode)
  `return 1 if any_errors else 0` at `scripts/sync_plugin_lib.py:440`
  `sys.exit(main())` at `scripts/sync_plugin_lib.py:444`
- for validators/gates: yes, functions as a verification gate via `--check`. Exits 1 when files in `.claude/lib/` drift from `scripts/` sources or if I/O/traversal errors occur; exits 0 when copies are in sync. Passes (exits 0) on the default branch.
- does the output match what the documentation claims? yes, reports synchronization state and returns exit code 0 when in sync.

## Defects — required
none

## Observations
Uses Python's `ast` module to statically inspect single-file copy targets and enforce that they do not import the `scripts` package (`scripts/sync_plugin_lib.py:267-319`).

## Context cost
15589 bytes, ~3900 tokens.
