---
unit: inv-rjm-318
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-318

## Files assigned
- [x] sources/rjm/templates/agents/independent-thinker.shared.md
- [x] sources/rjm/templates/agents/issue-feature-review.shared.md
- [x] sources/rjm/templates/agents/janitor.shared.md
- [x] sources/rjm/templates/agents/merge-resolver.shared.md
- [x] sources/rjm/templates/agents/milestone-planner.shared.md
- [x] sources/rjm/templates/agents/negotiation.shared.md

## Outputs produced
- docs/analysis/inventory/rjm/templates-agents-independent-thinker-shared-md.md (8815 bytes)
- docs/analysis/inventory/rjm/templates-agents-issue-feature-review-shared-md.md (6012 bytes)
- docs/analysis/inventory/rjm/templates-agents-janitor-shared-md.md (4990 bytes)
- docs/analysis/inventory/rjm/templates-agents-merge-resolver-shared-md.md (6030 bytes)
- docs/analysis/inventory/rjm/templates-agents-milestone-planner-shared-md.md (5769 bytes)
- docs/analysis/inventory/rjm/templates-agents-negotiation-shared-md.md (6379 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Five assigned files correspond to VARIANT pairs in the deduplication ledger (`rjm-duplicates.md`): V1 (`milestone-planner`), V3 (`negotiation`), V12 (`janitor`), V13 (`issue-feature-review`), and V26 (`independent-thinker`). Pre-existing divergence cards under `docs/analysis/inventory/rjm/_divergence/` document the exact diff hunks between `.claude/agents/*.md` and `templates/agents/*.shared.md`.
- `templates/agents/merge-resolver.shared.md` diverged substantially from `.claude/agents/merge-resolver.md` (shared line ratio under 60%), so it was not classified as a duplicate pair by `dedupe.ts` and stands as an independent card.
- `templates/agents/independent-thinker.shared.md` references `wiki/concepts/Critical Thinking/How to Think for Yourself.md`, which does not exist in the source repository (classified as defect `missing-path`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: 10,350 tokens (41,386 bytes).
Approximate tokens of output written: 10,000 tokens (39,995 bytes including unit report).
