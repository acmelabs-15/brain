---
unit: inv-rjm-182
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-182

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/AGENTS.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/copilot-instructions.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/assert_guard_jobs_succeeded.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/assign_bot_reviewer.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/check_design_review_gate.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/check_spec_failures.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/extract_incremental_scope.py`

## Outputs produced
- `docs/analysis/inventory/rjm/github-agents-md.md` (7711 bytes)
- `docs/analysis/inventory/rjm/github-copilot-instructions-md.md` (5432 bytes)
- `docs/analysis/inventory/rjm/github-scripts-assert-guard-jobs-succeeded-py.md` (4889 bytes)
- `docs/analysis/inventory/rjm/github-scripts-assign-bot-reviewer-py.md` (6343 bytes)
- `docs/analysis/inventory/rjm/github-scripts-check-design-review-gate-py.md` (6963 bytes)
- `docs/analysis/inventory/rjm/github-scripts-check-spec-failures-py.md` (6067 bytes)
- `docs/analysis/inventory/rjm/github-scripts-extract-incremental-scope-py.md` (3979 bytes)

## Scripts executed
- `.github/scripts/assert_guard_jobs_succeeded.py`: `python3 .github/scripts/assert_guard_jobs_succeeded.py`, exit code 1; `NEEDS_JSON='{"job1": {"result": "success"}}' python3 .github/scripts/assert_guard_jobs_succeeded.py`, exit code 0
- `.github/scripts/assign_bot_reviewer.py`: `python3 .github/scripts/assign_bot_reviewer.py --repo foo/bar --pull-request abc --reviewer rjmurillo-bot`, exit code 2; `python3 .github/scripts/assign_bot_reviewer.py --help`, exit code 0
- `.github/scripts/check_design_review_gate.py`: `python3 .github/scripts/check_design_review_gate.py`, exit code 0
- `.github/scripts/check_spec_failures.py`: `python3 .github/scripts/check_spec_failures.py`, exit code 0; `python3 .github/scripts/check_spec_failures.py --trace-verdict FAIL`, exit code 1
- `.github/scripts/extract_incremental_scope.py`: `python3 .github/scripts/extract_incremental_scope.py "Phase 2 of #1799: finish cache guard"`, exit code 0; `python3 .github/scripts/extract_incremental_scope.py "PR 1 of 3: add validator"`, exit code 0; `python3 .github/scripts/extract_incremental_scope.py "Fix phase 2 rollout bug"`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-182 covers GitHub Actions infrastructure documentation (`.github/AGENTS.md`, `.github/copilot-instructions.md`) and 5 core GitHub Actions CI automation / quality gate scripts in `.github/scripts/`.
- Architectural findings:
  - `.github/AGENTS.md` provides complete governance over CI workflow triggers, concurrency coalescing via `cancel-in-progress: true`, and the concurrent merge race resolution for single-integer count ratchets (`count_ratchet.py`), where counts below the baseline are accepted as green to avoid merge blocking on concurrent cleanup branches.
  - `.github/copilot-instructions.md` establishes a minimal context budget (monitored by `scripts/validate_workspace_budget.py`), delegating heavy rules to `AGENTS.md` while enforcing mandatory Serena initialization and `#runSubagent` delegation.
  - `assert_guard_jobs_succeeded.py` strictly prevents false-green status checks by ensuring every upstream job completed with status `success`.
  - `assign_bot_reviewer.py` bypasses GraphQL secondary rate limits by using GitHub REST API endpoints with ADR-035 exit codes and `--tolerate-external` support.
  - `check_design_review_gate.py` contains a notable `script-bug` at line 79: `parse_yaml_frontmatter` fails to strip quotes from YAML values, causing quoted statuses like `status: "NEEDS_CHANGES"` to bypass `BLOCKING_VERDICTS` and pass the gate undetected.
  - `check_spec_failures.py` separates true specification errors from infrastructure failure indicators, emitting warning annotations without blocking merges on infrastructure outages.
  - `extract_incremental_scope.py` parses explicit PR slice markers (e.g. `Phase 2 of #1799`) while ignoring colloquial phase mentions.
- Duplication ledger: None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md`. No divergence cards required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,050 tokens (44,214 bytes across 7 files, 1312 lines); approximate tokens of output written: ~10,350 tokens (41,384 bytes across 7 inventory cards, plus unit report).
