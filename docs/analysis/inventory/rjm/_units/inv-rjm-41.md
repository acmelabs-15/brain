---
unit: inv-rjm-41
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-41

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-096-relax-qa-evidence-commit-equality-md.md` (10885 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-096 addresses the issue of process-only "rebind" churn in QA verification workflows by relaxing `validate_qa_report()` from strict commit SHA equality to code-change-aware staleness checking via `post_qa_code_changes()`.
- The decision explicitly defers relaxation of `session_qa_binding()`'s own equality raise (`.claude/lib/qa_report.py:170-178`, identified in PR #4954 round 15), noting it as a data-consistency invariant requiring its own follow-up. In the current repository codebase, this follow-up was subsequently implemented in ADR-102 (issue #5217).
- ADR-096 references `.claude/skills/session-end/scripts/complete_session_log.py` as one of two production callers of `validate_qa_report()`. In the actual `sources/rjm` tree, the `.claude/skills/session-end/` directory does not exist, leaving `scripts/validate_session_json.py` as the sole caller of `validate_qa_report()`.
- Tests in `tests/test_validate_session_json.py` (`test_accepts_qa_report_whose_commit_differs_but_only_evidence_changed`, `test_rejects_qa_report_for_stale_commit`, and `test_existing_log_ignores_explicit_validation_head`) directly verify the ADR-096 contract.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~7,200 tokens (28,734 bytes across 1 file).
Approximate output written: ~3,200 tokens (10,885 bytes for the inventory card plus this unit report).
