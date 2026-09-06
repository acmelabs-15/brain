---
package: rjm
path: scripts/ci/update_needs_split_label.py
type: script
bytes: 3724
unit: inv-rjm-209
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/update_needs_split_label.py

## Purpose — required, verbatim
> "Add or remove the advisory needs-split PR label." — scripts/ci/update_needs_split_label.py:2

## Design intent — required
Manages the application and removal of the advisory `needs-split` label on GitHub Pull Requests during automated PR validation workflows. When a PR exceeds recommended complexity or change size guidelines, this script applies the label via GitHub's REST API; when remediated, it removes the label. The operation is designed to be completely non-blocking and fail-open: any network error, API failure, or missing GitHub CLI credentials emits a GitHub Actions warning annotation and exits 0, guaranteeing that cosmetic labeling problems never block PR merges or fail CI validation runs.

## Phase — required
none

## Inputs — required
- CLI argument `--mode` (`add` or `remove`, required)
- Environment variable `GITHUB_REPOSITORY` — scripts/ci/update_needs_split_label.py:122
- Environment variable `PR_NUMBER` — scripts/ci/update_needs_split_label.py:123
- GitHub PR label listings fetched via `gh api` endpoint — scripts/ci/update_needs_split_label.py:27

## Outputs — required
- GitHub API mutation (POST to add or DELETE to remove `needs-split` label)
- GitHub Actions workflow warning annotations (`::warning::...`) or informational logs to stderr and stdout
- Process exit code 0 on all execution paths (exit code 2 on missing or invalid CLI arguments via argparse)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CONFIG_ERROR` — scripts/ci/update_needs_split_label.py:11 — defined here
- `LABEL` — scripts/ci/update_needs_split_label.py:12 — defined here
- `needs-split` — scripts/ci/update_needs_split_label.py:12 — used here
- `_run_gh` — scripts/ci/update_needs_split_label.py:15 — defined here
- `_label_endpoint` — scripts/ci/update_needs_split_label.py:27 — defined here
- `_existing_labels` — scripts/ci/update_needs_split_label.py:31 — defined here
- `add_label` — scripts/ci/update_needs_split_label.py:44 — defined here
- `remove_label` — scripts/ci/update_needs_split_label.py:81 — defined here
- `build_parser` — scripts/ci/update_needs_split_label.py:114 — defined here
- `main` — scripts/ci/update_needs_split_label.py:120 — defined here
- `GITHUB_REPOSITORY` — scripts/ci/update_needs_split_label.py:122 — used here
- `PR_NUMBER` — scripts/ci/update_needs_split_label.py:123 — used here

## Structure
none (python script; functions: _run_gh, _label_endpoint, _existing_labels, add_label, remove_label, build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/update_needs_split_label.py`, language: Python 3, lines: 131
- documented invocation:
  "Add or remove the advisory needs-split PR label." — scripts/ci/update_needs_split_label.py:2
  (CLI command: `python3 scripts/ci/update_needs_split_label.py --mode {add,remove}`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/update_needs_split_label.py --mode add`
  abridged stdout: `::warning::Could not fetch PR labels (exit code: 1); skipping advisory 'needs-split' label.` (on stderr)
  actual exit code: 0
- documented exit codes: none documented in docstring vs. actual exit paths in code:
  `scripts/ci/update_needs_split_label.py:52` (`return 0` on label fetch error)
  `scripts/ci/update_needs_split_label.py:55` (`return 0` when label already present)
  `scripts/ci/update_needs_split_label.py:76` (`return 0` on label add error)
  `scripts/ci/update_needs_split_label.py:78` (`return 0` on successful label add)
  `scripts/ci/update_needs_split_label.py:89` (`return 0` on label fetch error during removal)
  `scripts/ci/update_needs_split_label.py:91` (`return 0` when label already absent)
  `scripts/ci/update_needs_split_label.py:109` (`return 0` on label delete error)
  `scripts/ci/update_needs_split_label.py:111` (`return 0` on successful label delete)
  `scripts/ci/update_needs_split_label.py:130` (`raise SystemExit(main())`)
- for validators/gates: can it exit non-zero? no during execution (all internal logic paths return 0; exits 2 only on CLI parse error from argparse). does it fail on the source repo's own default branch? no (exits 0 with a warning when run outside a GitHub Actions PR environment).
- does the output match what the documentation claims? yes (emits warning annotation and exits 0 as an advisory non-blocking labeler)

## Defects — required
- `orphan` — `scripts/ci/update_needs_split_label.py:1` — script is not invoked by any in-scope lifecycle file (it is invoked by `.github/workflows/pr-validation.yml`, which is outside the lifecycle reachability boundary).
- `other` — `scripts/ci/update_needs_split_label.py:11` — constant `CONFIG_ERROR = 2` is defined at top-level but never used or returned in the script.

## Observations
- Interacts with GitHub via REST API endpoints (`repos/{repository}/issues/{pr_number}/labels`) using `gh api` rather than GraphQL mutations, simplifying request payloads and error recovery.
- Inspects existing labels before submitting modifications to maintain idempotency, avoiding unnecessary API calls when the target label is already in the expected state.
- Strictly fail-open design prevents cosmetic labeling failures from blocking pull request validation pipelines.

## Context cost
3,724 bytes (~931 tokens). Standalone Python script using standard library modules only (`argparse`, `os`, `subprocess`, `sys`).
