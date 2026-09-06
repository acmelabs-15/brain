---
package: rjm
path: scripts/ci/taste_count_ratchet.py
type: script
bytes: 12794
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/taste_count_ratchet.py

## Purpose — required, verbatim
> "Whole-repo taste-lint error-count ratchet (issue #3779)." — scripts/ci/taste_count_ratchet.py:2

## Design intent — required
Freezes repository-wide error-severity taste-lint debt (naming, file size, complexity, skill size) by enforcing that the count of violations across all git-tracked files does not exceed the baseline recorded in `taste_count_baseline.txt` (issue #3779). It transforms the previously decorative and ignored error severity in `taste_lints.py` into a hard CI ratchet gate where existing debt passes but regressions block, while supporting `--update` to ratify reductions, and prioritizes newly touched files in regression output listings (issue #3902).

## Phase — required
rjm:test

## Inputs — required
- Git-tracked files via `tracked_files(repo_root, ("*",))` (line 103)
- Baseline file `taste_count_baseline.txt` (line 69)
- Linter `.claude/skills/taste-lints/scripts/taste_lints.py` (line 80)
- CLI options: `--repo-root`, `--baseline`, `--update`, `--base-ref` (parsed via `build_parser`)

## Outputs — required
- Diagnostic console logs reporting violation counts, slack, or regression advice
- Formatted list of violations prioritized by touched files on regression
- Updated baseline file `taste_count_baseline.txt` when `--update` is specified upon improvement

## Invokes — required
- script count_ratchet — scripts/ci/taste_count_ratchet.py:48
- file taste_count_baseline.txt — scripts/ci/taste_count_ratchet.py:69
- script .claude/skills/taste-lints/scripts/taste_lints.py — scripts/ci/taste_count_ratchet.py:80

## Invoked by — required
- script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:65
- script tests/ci/test_lefthook_ratchet_wiring.py — tests/ci/test_lefthook_ratchet_wiring.py:61

## Concepts named — required, verbatim
- `EXIT_CONFIG` — scripts/ci/taste_count_ratchet.py:49 — used here
- `EXIT_EXTERNAL` — scripts/ci/taste_count_ratchet.py:50 — used here
- `EXIT_OK` — scripts/ci/taste_count_ratchet.py:51 — used here
- `EXIT_REGRESSION` — scripts/ci/taste_count_ratchet.py:52 — used here
- `build_parser` — scripts/ci/taste_count_ratchet.py:53 — used here
- `chunk` — scripts/ci/taste_count_ratchet.py:54 — used here
- `run` — scripts/ci/taste_count_ratchet.py:55 — used here
- `tracked_files` — scripts/ci/taste_count_ratchet.py:56 — used here
- `MERGE_TREE_BACKED` — scripts/ci/taste_count_ratchet.py:71 — defined here
- `current_count` — scripts/ci/taste_count_ratchet.py:88 — defined here
- `_batch_findings` — scripts/ci/taste_count_ratchet.py:147 — defined here
- `_violation_fields` — scripts/ci/taste_count_ratchet.py:208 — defined here
- `list_violations` — scripts/ci/taste_count_ratchet.py:246 — defined here
- `main` — scripts/ci/taste_count_ratchet.py:293 — defined here

## Structure
- `def current_count` — scripts/ci/taste_count_ratchet.py:88
- `def _batch_findings` — scripts/ci/taste_count_ratchet.py:147
- `def _violation_fields` — scripts/ci/taste_count_ratchet.py:208
- `def list_violations` — scripts/ci/taste_count_ratchet.py:246
- `def main` — scripts/ci/taste_count_ratchet.py:293

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/taste_count_ratchet.py`, language: Python, lines: 315
- documented invocation:
  - "Whole-repo taste-lint error-count ratchet (issue #3779)." — scripts/ci/taste_count_ratchet.py:2
  - "scripts/ci/taste_count_ratchet.py" — tests/ci/test_lefthook_ratchet_wiring.py:61
- **executed:** yes
- actual command run: `python3 scripts/ci/taste_count_ratchet.py`, abridged stdout:
  ```
  taste count ratchet: OK. 571 violations <= baseline 575 (-4 slack).
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - ok (count <= baseline, or --update records a decrease)" — scripts/ci/taste_count_ratchet.py:32
    - "1 - regression (count > baseline, or baseline raised vs --base-ref)" — scripts/ci/taste_count_ratchet.py:33
    - "2 - config error (baseline missing or malformed, bad args)" — scripts/ci/taste_count_ratchet.py:34
    - "3 - external error (the linter could not run)" — scripts/ci/taste_count_ratchet.py:35
  - actual exit paths:
    - `return None` — scripts/ci/taste_count_ratchet.py:105
    - `return 0` — scripts/ci/taste_count_ratchet.py:107
    - `return None` — scripts/ci/taste_count_ratchet.py:123
    - `return None` — scripts/ci/taste_count_ratchet.py:127
    - `return None` — scripts/ci/taste_count_ratchet.py:132
    - `return None` — scripts/ci/taste_count_ratchet.py:135
    - `return None` — scripts/ci/taste_count_ratchet.py:139
    - `return total` — scripts/ci/taste_count_ratchet.py:141
    - `sys.exit(main())` — scripts/ci/taste_count_ratchet.py:314
- for validators/gates: can exit non-zero (exits 1 on regression, 2 on config/baseline error, 3 on external error). Passes with exit code 0 on the repository default branch checkout with 571 violations <= baseline 575.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Batches files through `chunk(files)` to prevent shell arg length limits. Implements priority sorting in `list_violations` so that newly modified files appear first in capped 40-line violation listings. Declares `MERGE_TREE_BACKED = True` since it is registered in `merge_tree_ratchet_registry.py`.

## Context cost
12794 bytes, approximately 3200 tokens.
