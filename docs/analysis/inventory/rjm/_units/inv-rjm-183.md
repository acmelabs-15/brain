---
unit: inv-rjm-183
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-183

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/generate_spec_report.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/invoke_pr_comment_processing.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/invoke_pr_maintenance.py

## Outputs produced
- docs/analysis/inventory/rjm/github-scripts-generate-spec-report-py.md (11032 bytes)
- docs/analysis/inventory/rjm/github-scripts-invoke-pr-comment-processing-py.md (9500 bytes)
- docs/analysis/inventory/rjm/github-scripts-invoke-pr-maintenance-py.md (9971 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-183.md (4607 bytes)

## Scripts executed
- `.github/scripts/generate_spec_report.py`, `python3 sources/rjm/.github/scripts/generate_spec_report.py --help`, exit code 0
- `.github/scripts/invoke_pr_comment_processing.py`, `python3 sources/rjm/.github/scripts/invoke_pr_comment_processing.py --help`, exit code 0
- `.github/scripts/invoke_pr_maintenance.py`, `python3 sources/rjm/.github/scripts/invoke_pr_maintenance.py --help`, exit code 0
- Test executions:
  - `python3 sources/rjm/.github/scripts/generate_spec_report.py --has-specs true --trace-verdict PASS --completeness-verdict PASS --spec-refs "REQ-001" --issue-refs "#42" --github-repository owner/repo --server-url https://github.com --run-id 12345 --event-name pull_request --ref-name main`, exit code 0
  - `python3 sources/rjm/.github/scripts/invoke_pr_comment_processing.py --pr-number 100 --verdict FAIL --findings-json "{}"`, exit code 0
  - `python3 sources/rjm/.github/scripts/invoke_pr_comment_processing.py --pr-number 100 --verdict PASS --findings-json '{"comments": []}'`, exit code 0
  - `python3 sources/rjm/.github/scripts/invoke_pr_comment_processing.py --pr-number 100 --verdict PASS --findings-json 'not json'`, exit code 2
  - `python3 sources/rjm/.github/scripts/invoke_pr_maintenance.py --output-json`, exit code 0
  - `python3 sources/rjm/.github/scripts/invoke_pr_maintenance.py`, exit code 0
  - Full test suite via pytest: `uv run pytest tests/test_generate_spec_report.py tests/test_invoke_pr_comment_processing.py tests/test_invoke_pr_maintenance.py` (77 passed in 0.40s), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-183` covers 3 GitHub CI helper scripts located under `.github/scripts/` in `sources/rjm`:
  - `generate_spec_report.py` (8,350 bytes, 289 lines): report formatter for spec-to-implementation validation in `ai-spec-validation.yml`.
  - `invoke_pr_comment_processing.py` (11,112 bytes, 390 lines): comment triage executor that acknowledges comments (`eyes`), posts `wontfix` responses, and flags items for humans.
  - `invoke_pr_maintenance.py` (20,902 bytes, 626 lines): GraphQL-based PR discovery and classification engine producing matrix payloads for `pr-maintenance.yml`.
- All three scripts are classified as `orphan` relative to the in-scope lifecycle manifest graph (`docs/analysis/manifest/rjm.md`), as they are invoked exclusively by GitHub Actions workflow definitions (`ai-spec-validation.yml`, `pr-maintenance.yml`) or test files that are outside the lifecycle manifest boundary (§1.2).
- Duplication ledger status: none of the files assigned to this unit appear in `docs/analysis/manifest/rjm-duplicates.md`. Note that `invoke_pr_comment_processing.py` has a parallel implementation under `.claude/skills/github/scripts/pr/invoke_pr_comment_processing.py` (which is excluded per §1.2), and `invoke_pr_maintenance.py` has a sibling file at `scripts/invoke_pr_maintenance.py`.
- Exit code standardization: `invoke_pr_comment_processing.py` explicitly adheres to ADR-035 exit codes (0, 1, 2, 3), while `invoke_pr_maintenance.py` implements a fail-safe rate limit gate exiting 0 when API limits are insufficient to avoid spurious workflow run failures.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,100 tokens (40,364 bytes across 3 assigned files) plus ~6,000 tokens of related test and workflow context.
- Approximate tokens of output written: ~7,600 tokens across 3 inventory cards and 1 work-unit report.
