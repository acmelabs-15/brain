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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/taste_count_ratchet.py

## Purpose — required, verbatim
> "Whole-repo taste-lint error-count ratchet (issue #3779)." — scripts/ci/taste_count_ratchet.py:2

## Design intent — required
Enforces a non-increasing ceiling on error-severity taste-lint violations across all git-tracked files in the repository. Solves the issue where taste-lint violations were treated as decorative advisory output and ignored by contributors (issue #3779). Integrates with `count_ratchet` and the taste linter (`.claude/skills/taste-lints/scripts/taste_lints.py`), prioritizing violations in modified paths and registering with `merge_tree_ratchet_registry.py` to allow clean PR merges while preventing net growth of stylistic and complexity defects.

## Phase — required
none

## Inputs — required
- CLI argument `--base-ref` for fork comparison — scripts/ci/taste_count_ratchet.py:33
- Baseline text file `taste_count_baseline.txt` — scripts/ci/taste_count_ratchet.py:13
- All git-tracked repository files queried via `tracked_files` — scripts/ci/taste_count_ratchet.py:103
- Linter JSON reports emitted by `taste_lints.py` — scripts/ci/taste_count_ratchet.py:80

## Outputs — required
- Ratchet evaluation status message to stdout/stderr
- Formatted violation listings prioritized by branch changes when regression occurs — scripts/ci/taste_count_ratchet.py:246
- Updated integer baseline written to `taste_count_baseline.txt` when `--update` is specified — scripts/ci/taste_count_ratchet.py:32
- Process exit codes (0 = ok, 1 = regression, 2 = config error, 3 = external error) — scripts/ci/taste_count_ratchet.py:32

## Invokes — required
- script count_ratchet — scripts/ci/taste_count_ratchet.py:48
- script taste_count_baseline.txt — scripts/ci/taste_count_ratchet.py:69
- script taste_lints.py — scripts/ci/taste_count_ratchet.py:80

## Invoked by — required
- script checks_ratchet.py — scripts/validation/checks_ratchet.py:65

## Concepts named — required, verbatim
- `issue #3779` — scripts/ci/taste_count_ratchet.py:2 — used here
- `taste_lints.py` — scripts/ci/taste_count_ratchet.py:4 — used here
- `run_taste_advisory` — scripts/ci/taste_count_ratchet.py:5 — used here
- `scripts/validation/git_hook_policy.py` — scripts/ci/taste_count_ratchet.py:6 — used here
- `taste_count_baseline.txt` — scripts/ci/taste_count_ratchet.py:13 — used here
- `ruff_count_ratchet.py` — scripts/ci/taste_count_ratchet.py:15 — used here
- `AGENTS.md` — scripts/ci/taste_count_ratchet.py:31 — used here
- `EXIT_CONFIG` — scripts/ci/taste_count_ratchet.py:49 — defined here
- `EXIT_EXTERNAL` — scripts/ci/taste_count_ratchet.py:50 — defined here
- `EXIT_OK` — scripts/ci/taste_count_ratchet.py:51 — defined here
- `EXIT_REGRESSION` — scripts/ci/taste_count_ratchet.py:52 — defined here
- `MERGE_TREE_BACKED` — scripts/ci/taste_count_ratchet.py:71 — defined here
- `merge_tree_ratchet_registry.py` — scripts/ci/taste_count_ratchet.py:72 — used here
- `scripts/ci/merge_tree_ratchet_check.py` — scripts/ci/taste_count_ratchet.py:76 — used here
- `tests/ci/test_merge_tree_backing_declarations.py` — scripts/ci/taste_count_ratchet.py:77 — used here
- `current_count` — scripts/ci/taste_count_ratchet.py:88 — defined here
- `_REQUIRED_FIELDS` — scripts/ci/taste_count_ratchet.py:144 — defined here
- `_batch_findings` — scripts/ci/taste_count_ratchet.py:147 — defined here
- `issue #3902` — scripts/ci/taste_count_ratchet.py:252 — used here
- `_violation_fields` — scripts/ci/taste_count_ratchet.py:208 — defined here
- `list_violations` — scripts/ci/taste_count_ratchet.py:246 — defined here
- `issue #4746` — scripts/ci/taste_count_ratchet.py:266 — used here
- `main` — scripts/ci/taste_count_ratchet.py:293 — defined here

## Structure
none (python script; constants and functions: MERGE_TREE_BACKED, _LINTER, _EXIT_CLEAN, _EXIT_VIOLATIONS, current_count, _REQUIRED_FIELDS, _batch_findings, _violation_fields, list_violations, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/taste_count_ratchet.py`, language: Python 3, lines: 315
- documented invocation:
  "Whole-repo taste-lint error-count ratchet (issue #3779)." — scripts/ci/taste_count_ratchet.py:2
  (CLI command: `python3 scripts/ci/taste_count_ratchet.py`)
- executed: yes
- actual command run: `python3 scripts/ci/taste_count_ratchet.py` (executed from `sources/rjm`)
  abridged stdout: `taste count ratchet: OK. 571 violations <= baseline 575 (-4 slack).`
  actual exit code: 0
- documented exit codes:
  `0 - ok (count <= baseline, or --update records a decrease)` — scripts/ci/taste_count_ratchet.py:32
  `1 - regression (count > baseline, or baseline raised vs --base-ref)` — scripts/ci/taste_count_ratchet.py:33
  `2 - config error (baseline missing or malformed, bad args)` — scripts/ci/taste_count_ratchet.py:34
  `3 - external error (the linter could not run)` — scripts/ci/taste_count_ratchet.py:35
  vs. actual exit paths in code:
  `scripts/ci/taste_count_ratchet.py:298` (`return run(...)`, where `count_ratchet.run` returns `EXIT_OK` (0), `EXIT_REGRESSION` (1), `EXIT_CONFIG` (2), or `EXIT_EXTERNAL` (3))
  `scripts/ci/taste_count_ratchet.py:314` (`sys.exit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 1 on count regression or raised baseline vs `--base-ref`, 2 on config error, 3 on external linter failure). does it fail on the source repo's own default branch? no (passes with 571 violations against baseline 575, with 4 slack).
- does the output match what the documentation claims? yes (outputs status message and exit code 0)

## Defects — required
none

## Observations
- Explicitly fails closed (returning `None` leading to exit 3) on any unexpected output or JSON structure from `taste_lints.py`, preventing a crashed or altered linter from reporting zero violations and accidentally disarming the ratchet under `--update`.
- Implements `list_violations` to sort and prioritize violations in `priority_paths` (the PR branch's changed files) within the 40-line output limit so that contributors see their own violations rather than unrelated existing repository debt (issue #3902).
- Sets `MERGE_TREE_BACKED = True` for registration with `merge_tree_ratchet_registry.py`.

## Context cost
12,794 bytes (~3,198 tokens). Loads `scripts/ci/count_ratchet.py` (47,457 bytes), `scripts/ci/taste_count_baseline.txt` (4 bytes), and executes `.claude/skills/taste-lints/scripts/taste_lints.py` (37,133 bytes), totaling ~97,388 bytes (~24,347 tokens).
