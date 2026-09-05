---
unit: inv-rjm-25
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-25

## Files assigned
[x] `.agents/architecture/ADR-067-validate-pr-change-claim-context.md` (20032 bytes) — read in full

## Outputs produced
docs/analysis/inventory/rjm/agents-architecture-adr-067-validate-pr-change-claim-context-md.md (11938 bytes)
docs/analysis/inventory/rjm/_units/inv-rjm-25.md (1909 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-067 references `scripts/validation/pr_description.py`, `.github/PULL_REQUEST_TEMPLATE.md`, `.claude/commands/push-pr.md`, and `.agents/architecture/ADR-035-exit-code-standardization.md`.
- `pr_description.py` implementation shows subsequent evolution from ADR-067's original 4-heading tuple: `What[ \t]+changed` was added to `_CHANGE_CLAIM_SECTION_NAMES` on 2026-07-30 and scoped pattern index 4 was introduced.
- The referenced regression simulation script `.agents/analysis/2252-pr-description-default-flip-regression-sim.py` has a runtime dependency on `.agents/analysis/2252-regression-data/sample_prs.txt` which is not present in the repository, causing `FileNotFoundError` upon execution.
- ADR-067's frontmatter lists `status: proposed` while simultaneously declaring `implemented: true`, reflecting a state where implementation was merged but ADR status was not updated to `accepted`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5000 tokens (20032 bytes source)
Approximate tokens of output written: ~1500 tokens
