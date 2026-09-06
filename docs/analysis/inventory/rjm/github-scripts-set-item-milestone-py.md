---
package: rjm
path: .github/scripts/set_item_milestone.py
type: script
bytes: 9563
unit: inv-rjm-185
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: .github/scripts/set_item_milestone.py, sha256: ce831ca6f6b26304284c8e4b1adf94e2f46165b58f91459c8b95ef1d3a6dbd1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/set_item_milestone.py

## Purpose — required, verbatim
> "Assign a milestone to a GitHub PR or issue." — .github/scripts/set_item_milestone.py:2

## Design intent — required
Automates milestone assignment for pull requests and issues during CI workflow processing. It queries GitHub API endpoints via `gh`, checks whether the item already has a milestone (skipping assignment if present to preserve manual human categorization), and auto-detects the latest open semantic version milestone matching `v?X.Y.Z` if an explicit milestone title is not provided. Supports a `--missing-milestone-ok` flag allowing repositories or branches without active milestones to exit cleanly with a warning rather than failing CI with ADR-035 configuration error 2. Without this script, PR and issue tracking across semantic release milestones would require manual triaging or brittle workflow inline scripts.

## Phase — required
cross-phase

## Inputs — required
Command-line arguments:
- `--item-type`: str (required, choices: `pr`, `issue`), type of GitHub item
- `--item-number`: int (required), PR or issue number
- `--owner`: str (optional, default inferred from git remote), repository owner
- `--repo`: str (optional, default inferred from git remote), repository name
- `--milestone-title`: str (optional), specific milestone to assign
- `--missing-milestone-ok`: bool (flag), treats absent semantic milestone as success (exit 0) rather than config error (exit 2)

## Outputs — required
- GitHub Actions outputs written via `write_github_output`: `success`, `item_type`, `item_number`, `milestone`, `action` (`assigned` or `skipped`), and `message`
- GitHub Actions step summary markdown formatted and appended to `$GITHUB_STEP_SUMMARY`
- Exit code following ADR-035 (0=success, 2=config error, 3=external API error, 4=auth error)

## Invokes — required
none

## Invoked by — required
- script .github/scripts/run_with_retry.py — .github/scripts/run_with_retry.py:22
- doc .agents/archive/planning/v0.3.1/PLAN.md — .agents/archive/planning/v0.3.1/PLAN.md:34
- doc .agents/archive/planning/v0.3.1/PLAN.md — .agents/archive/planning/v0.3.1/PLAN.md:617

## Concepts named — required, verbatim
- `ADR-035` — .github/scripts/set_item_milestone.py:4 — used here
- `_SEMVER_PATTERN` — .github/scripts/set_item_milestone.py:37 — defined here
- `_parse_semver_tuple` — .github/scripts/set_item_milestone.py:45 — defined here
- `get_latest_semantic_milestone` — .github/scripts/set_item_milestone.py:50 — defined here
- `get_item_milestone` — .github/scripts/set_item_milestone.py:89 — defined here
- `assign_milestone` — .github/scripts/set_item_milestone.py:125 — defined here
- `build_parser` — .github/scripts/set_item_milestone.py:201 — defined here

## Structure
- def _parse_semver_tuple — .github/scripts/set_item_milestone.py:45
- def get_latest_semantic_milestone — .github/scripts/set_item_milestone.py:50
- def get_item_milestone — .github/scripts/set_item_milestone.py:89
- def assign_milestone — .github/scripts/set_item_milestone.py:125
- def _write_result — .github/scripts/set_item_milestone.py:164
- def build_parser — .github/scripts/set_item_milestone.py:201
- def main — .github/scripts/set_item_milestone.py:254

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/set_item_milestone.py`, Python 3, 321 lines
- documented invocation: `python3 set_item_milestone.py --item-type pr --item-number 1` (from `.github/scripts/run_with_retry.py:22`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.github/scripts/set_item_milestone.py --help`
  abridged stdout:
  ```text
  usage: set_item_milestone.py [-h] --item-type {pr,issue}
                               --item-number ITEM_NUMBER [--owner OWNER]
                               [--repo REPO] [--milestone-title MILESTONE_TITLE]
                               [--missing-milestone-ok]

  Assign a milestone to a GitHub PR or issue. Auto-detects latest semantic
  version milestone if --milestone-title is not provided.
  ```
  **actual exit code:** 0
- documented exit codes (`0 - Success (assigned or skipped)`, `2 - Config error (no milestone found, detection failed)`, `3 - External error (API failure)`, `4 - Auth error (not authenticated)` from `.github/scripts/set_item_milestone.py:5-8`) vs actual exit paths in code:
  - `return 0` at `.github/scripts/set_item_milestone.py:278` (item already has milestone)
  - `return 0` at `.github/scripts/set_item_milestone.py:296` (no milestone found with `--missing-milestone-ok`)
  - `return 2` at `.github/scripts/set_item_milestone.py:306` (no milestone found without `--missing-milestone-ok`)
  - `return 0` at `.github/scripts/set_item_milestone.py:316` (successfully assigned)
  - `error_and_exit(..., 3)` at `.github/scripts/set_item_milestone.py:106`, `112`, `155` (API failure exits 3)
  - `assert_gh_authenticated()` at `.github/scripts/set_item_milestone.py:263` (exits 4 via `scripts/github_core/api.py` if authentication fails)
  - `raise SystemExit(main())` at `.github/scripts/set_item_milestone.py:320`
- for validators/gates: can exit non-zero (verified with `python3 sources/rjm/.github/scripts/set_item_milestone.py` without args, exit code 2; verified with item query 404, exit code 3)
- does the output match what the documentation claims: yes, manages GitHub PR and issue milestone states adhering to ADR-035 exit contracts

## Defects — required
none

## Observations
Sorts semantic version tags using numeric tuples (`_parse_semver_tuple`) rather than alphabetical sorting, preventing version string sorting regressions (e.g. `0.10.0` vs `0.2.0`).

## Context cost
9563 bytes, approximately 2390 tokens.
