---
package: rjm
path: scripts/ci/merge_tree_ratchet_check.py
type: script
bytes: 15695
unit: inv-rjm-205
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_check.py, sha256: accf975a25438d5accc844379fb857d685029146cca96ef12df3474a7cc26747}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/merge_tree_ratchet_check.py

## Purpose — required, verbatim
> "Merge-tree ratchet: evaluate all count ratchets on the merged result." — scripts/ci/merge_tree_ratchet_check.py:2

## Design intent — required
Closes the stale-branch hole where a PR branch passes individual ratchets against an old target branch with a looser baseline, but the post-merge tree breaches the ceiling upon integration. It constructs a synthetic merge tree via `git merge-tree --write-tree`, materializes the snapshot to a temporary repository, and evaluates five registered count ratchets against the effective baseline, which is strictly the minimum of the base ref's baseline and the candidate branch's proposed baseline (preventing branches from raising baselines to mask debt, while requiring lowering branches to actually meet their new tighter baselines).

## Phase — required
cross-phase

## Inputs — required
- `--base-ref`: Git ref to merge HEAD into and read baselines from (default: `origin/main`) — scripts/ci/merge_tree_ratchet_check.py:394-397
- `--repo-root`: Repository root path (default: `Path.cwd()`) — scripts/ci/merge_tree_ratchet_check.py:399-403
- Git commit objects via rev-parse and tree OIDs via "merge-tree" — scripts/ci/merge_tree_ratchet_check.py:144
- Baseline files in base ref and candidate tree via registered ratchet baseline paths — scripts/ci/merge_tree_ratchet_check.py:317-318

## Outputs — required
- Process exit code (0 for ok, 1 for regression, 2 for config error, 3 for external error, 100 for merge conflict) — scripts/ci/merge_tree_ratchet_check.py:40-44, 70-74
- Diagnostic and status messages written to stdout and stderr:
  - "merge-tree-ratchet: OK. Merged tree passes all registered ratchets" — scripts/ci/merge_tree_ratchet_check.py:380
  - "merge-tree-ratchet: BLOCKED. The merged result breaches a ratchet ceiling." — scripts/ci/merge_tree_ratchet_check.py:365
  - "merge-tree-ratchet: merge has conflicts against" — scripts/ci/merge_tree_ratchet_check.py:304

## Invokes — required
none

## Invoked by — required
- script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:92
- script scripts/ci/count_ratchet.py — scripts/ci/count_ratchet.py:788

## Concepts named — required, verbatim
- `merge-tree ratchet` — scripts/ci/merge_tree_ratchet_check.py:2 — defined here
- `stale-branch hole` — scripts/ci/merge_tree_ratchet_check.py:4 — defined here
- `concurrent-admission hole` — scripts/ci/merge_tree_ratchet_check.py:13 — used here
- `reserve-band` — scripts/ci/merge_tree_ratchet_check.py:13 — used here
- `_effective_baseline` — scripts/ci/merge_tree_ratchet_check.py:31 — defined here
- `BaselineState` — scripts/ci/merge_tree_ratchet_check.py:77 — defined here
- `BaselineRead` — scripts/ci/merge_tree_ratchet_check.py:85 — defined here
- `shallow-fetch` — scripts/ci/merge_tree_ratchet_check.py:159 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/merge_tree_ratchet_check.py`, language: Python, lines: 410
- documented invocation: "Evaluate registered count ratchets on the result of merging HEAD into" — scripts/ci/merge_tree_ratchet_check.py:389
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/merge_tree_ratchet_check.py --help`
    stdout: `usage: merge_tree_ratchet_check.py [-h] [--base-ref BASE_REF] [--repo-root REPO_ROOT]`
    actual exit code: 0
  - Command: `python3 sources/rjm/scripts/ci/merge_tree_ratchet_check.py --repo-root sources/rjm --base-ref HEAD`
    stdout: `ruff could not be launched: [Errno 2] No such file or directory: 'ruff'\nmerge-tree-ratchet: ruff count ratchet: EXTERNAL ERROR - counter returned None\n...taste count ratchet: OK. 571 <= 575.\ntype-ignore count ratchet: OK. 44 <= 44.\ncli exit contract ratchet: OK. 18 <= 18.`
    actual exit code: 3
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - ok (all counts <= baselines)" — scripts/ci/merge_tree_ratchet_check.py:40
    - "1 - regression (at least one count > baseline)" — scripts/ci/merge_tree_ratchet_check.py:41
    - "2 - config error (baseline missing, bad args)" — scripts/ci/merge_tree_ratchet_check.py:42
    - "3 - external error (git, ruff, or taste-lints could not run)" — scripts/ci/merge_tree_ratchet_check.py:43
    - "100 - merge conflict (ratchets were not evaluated)" — scripts/ci/merge_tree_ratchet_check.py:44
  - Actual exit paths in code:
    - `EXIT_OK = 0` — scripts/ci/merge_tree_ratchet_check.py:70
    - `EXIT_REGRESSION = 1` — scripts/ci/merge_tree_ratchet_check.py:71
    - `EXIT_CONFIG = 2` — scripts/ci/merge_tree_ratchet_check.py:72
    - `EXIT_EXTERNAL = 3` — scripts/ci/merge_tree_ratchet_check.py:73
    - `EXIT_CONFLICT = 100` — scripts/ci/merge_tree_ratchet_check.py:74
    - `sys.exit(main())` — scripts/ci/merge_tree_ratchet_check.py:409
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on ratchet regression (line 284), 2 on configuration error (lines 257, 259), 3 on external/git/tool error (lines 252, 271, 298, 301, 344, 360), and 100 on merge conflict (line 308).
- does the output match what the documentation claims?
  Yes, evaluates all registered count ratchets on the synthetic merge tree and enforces effective baseline minimums with documented status codes.

## Defects — required
none

## Observations
Explicitly documents complementarity with concurrent-admission controls (reserve-band mechanism from issue #4345) at lines 13-16. Implements safe scratch directory cleanup in a `finally` block via `_remove_tree` on all exit paths.

## Context cost
15695 bytes, 410 lines. Approximate tokens: ~3900.
