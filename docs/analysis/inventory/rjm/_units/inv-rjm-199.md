---
unit: inv-rjm-199
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-199

## Files assigned
- [x] sources/rjm/scripts/ci/artifact_create_issues.py
- [x] sources/rjm/scripts/ci/artifact_write_summary.py
- [x] sources/rjm/scripts/ci/build_ai_review_context.py
- [x] sources/rjm/scripts/ci/build_pr_validation_report.py
- [x] sources/rjm/scripts/ci/build_retrospective_prompt.py
- [x] sources/rjm/scripts/ci/check_ai_review_infra_gate.py
- [x] sources/rjm/scripts/ci/check_bot_identity.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-artifact-create-issues-py.md (5996 bytes)
- docs/analysis/inventory/rjm/scripts-ci-artifact-write-summary-py.md (4899 bytes)
- docs/analysis/inventory/rjm/scripts-ci-build-ai-review-context-py.md (9198 bytes)
- docs/analysis/inventory/rjm/scripts-ci-build-pr-validation-report-py.md (6472 bytes)
- docs/analysis/inventory/rjm/scripts-ci-build-retrospective-prompt-py.md (5262 bytes)
- docs/analysis/inventory/rjm/scripts-ci-check-ai-review-infra-gate-py.md (5340 bytes)
- docs/analysis/inventory/rjm/scripts-ci-check-bot-identity-py.md (8108 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-199.md

## Scripts executed
- `sources/rjm/scripts/ci/artifact_create_issues.py` — `FINDINGS_JSON='[]' python3 sources/rjm/scripts/ci/artifact_create_issues.py` — exit code 0
- `sources/rjm/scripts/ci/artifact_write_summary.py` — `python3 sources/rjm/scripts/ci/artifact_write_summary.py` — exit code 0
- `sources/rjm/scripts/ci/build_ai_review_context.py` — `CONTEXT_TYPE="session-log" CONTEXT_PATH="<tmp_log>" GITHUB_OUTPUT="<tmp_out>" RUNNER_TEMP="<tmp_dir>" python3 sources/rjm/scripts/ci/build_ai_review_context.py` — exit code 0
- `sources/rjm/scripts/ci/build_pr_validation_report.py` — `GITHUB_OUTPUT="<tmp_out>" DESCRIPTION_RESULT="PASS" KEYWORDS_STATUS="PASS" TEMPLATE_STATUS="PASS" GITHUB_REPOSITORY="owner/repo" python3 sources/rjm/scripts/ci/build_pr_validation_report.py` — exit code 0
- `sources/rjm/scripts/ci/build_retrospective_prompt.py` — `GITHUB_OUTPUT="<tmp_out>" PR_NUMBER="123" MERGED="true" ESCALATE="false" python3 sources/rjm/scripts/ci/build_retrospective_prompt.py` — exit code 0
- `sources/rjm/scripts/ci/check_ai_review_infra_gate.py` — `CONTEXT_INFRA_FAILURE="true" GITHUB_OUTPUT="<tmp_out>" AI_REVIEW_OUTPUT_FILE="<tmp_file>" python3 sources/rjm/scripts/ci/check_ai_review_infra_gate.py` — exit code 0
- `sources/rjm/scripts/ci/check_bot_identity.py` — `python3 sources/rjm/scripts/ci/check_bot_identity.py` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All seven scripts implement behavioral extractions of inline YAML/PowerShell/bash step blocks into standalone Python scripts governed by `ADR-006` ("no logic in YAML").
- `build_ai_review_context.py` and `check_ai_review_infra_gate.py` are coupled components of the `.github/actions/ai-review` composite action, sharing the `DID_NOT_RUN` verdict semantics and cross-platform temp file resolution (`RUNNER_TEMP` / `AI_REVIEW_OUTPUT_FILE`).
- `build_retrospective_prompt.py` templates the prompt for the post-PR retrospective workflow, consuming `.github/prompts/post-pr-retrospective.md`.
- `check_bot_identity.py` provides testable runtime verification of `ADR-026` Decision 5, preventing CI from exhausting human developer API rate limits.
- No files in this unit appear in the duplication ledger (`rjm-duplicates.md`); no divergence cards required.

## Blocked or uncertain
none

## Time and size
- Approximate source tokens read: ~12,034 tokens (48,134 bytes across 7 files).
- Approximate output tokens written: ~11,318 tokens (45,275 bytes across 7 cards, plus unit report).
