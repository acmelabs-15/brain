---
unit: inv-rjm-47
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-47

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-102-session-qa-binding-field-precedence.md` (48938 bytes)

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-102-session-qa-binding-field-precedence-md.md` (14917 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-47.md` (4577 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-47 covers ADR-102 (`.agents/architecture/ADR-102-session-qa-binding-field-precedence.md`, 48,938 bytes, 358 lines), which replaces `session_qa_binding()`'s field-equality raise (`ValueError`) with documented precedence for `comparison.head` and a non-blocking diagnostic on `QaBinding.inconsistency`.
- Interacts closely with ADR-096 (`.agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md`, which relaxed `validate_qa_report()`'s commit equality using `post_qa_code_changes()`, while explicitly scoping out `session_qa_binding()`) and ADR-034 (`.agents/architecture/ADR-034-investigation-session-qa-exemption.md`).
- Primary architectural finding:
  - Discovered that `endingCommit` and `episodeMetrics.comparison.head` carry two distinct contracts: `endingCommit` preserves the session's own final authored commit (advancing during rebases and follow-up commits), while `comparison.head` is advanced by the QA rebinding workflow to bind evidence to a fresh commit after subsequent branch changes.
  - The previous strict field-equality raise falsely treated expected lifecycle divergence as log corruption, causing operators to hand-sync commits and introducing workarounds (such as adding `commitHead` to `.agents/schemas/session-log.schema.json` to preserve author provenance).
  - The ADR deletes the `ValueError` raise in `.claude/lib/qa_report.py`, adds `inconsistency: str | None = field(default=None, compare=False)` to `QaBinding` (carefully preserving value-object equality/hashing semantics), and surfaces the diagnostic as a warning in `scripts/validate_session_json.py`'s `validate_qa_report_evidence()` via `result.warnings.append(binding.inconsistency)`.
  - Documents a 3-round review process with an initial single-reviewer pass, post-implementation self-review corrections, and a 6-agent independent panel in Round 3 (architect, critic, independent-thinker, security, analyst, high-level-advisor). Resolves an overruled Block by independent-thinker through empirical re-measurement of the commit history from `HEAD` (44 edits, 32 commits, 36 agreeing), correcting a prior measurement that improperly queried `git log --all`.
  - Documents bounded exposure on the fallback head path where live-`HEAD` resolution fails, pinned via explicit test `test_fallback_head_masks_a_real_change_between_the_two_fields`.
  - Mandates byte-identical regeneration of `src/copilot-cli/lib/qa_report.py` via `uv run python build/scripts/build_all.py`.
- Defects discovered via METHOD.md §4 checklist:
  - `missing-path` at line 313 (`.claude/skills/session-end/scripts/complete_session_log.py` referenced in the dependent components table does not exist on disk, as acknowledged in the ADR text).
  - `doc-drift` at line 292 (cites `scripts/validate_session_json.py:1169,1178` for the `not existing_log and not creation_mode` gate which shifted to lines 1180, 1189 at HEAD).
  - `doc-drift` at line 84 (cites `scripts/validate_session_json.py:983` for `head = validation_head if validation_head is not None else binding.commit` which shifted to line 993 at HEAD).
  - `doc-drift` at line 71 and line 329 (cites bare filename `handoff.md:207` and `handoff.md:219` instead of full repository path `.agents/sessions/handoffs/2026-08-15-2840-handoff.md`).
- Duplication ledger status: None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,500 tokens (48,938 bytes, 358 lines); approximate tokens of output written: ~4,200 tokens (14,917 bytes for inventory card, ~3,500 bytes for unit report).
