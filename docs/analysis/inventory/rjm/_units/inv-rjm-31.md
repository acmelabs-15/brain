---
unit: inv-rjm-31
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-31

## Files assigned
- [x] `.agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md` (54740 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-076-pr-autofix-branch-ownership-lease-md.md` (13156 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-076 specifies the v1 PR-autofix branch-ownership lease protocol. ADR-090 amends ADR-076 for issue #3413 (specifying a v2 lease marker, 30-minute TTL, and mandatory 5-minute renewal).
- The 2026-08-19 amendment in ADR-076 was triggered by issue #5165 and references PR #5078 and PR #5161 (`RENEW_SKIP_MARGIN`). It added a PR-closed check to the renew path returning `SKIP`/`pr-closed`.
- While ADR-076 frontmatter still records `implemented: false`, Phase 1 tooling shipped at `.claude/skills/github/scripts/pr/pr_autofix_lease.py` under issue #2615 with test coverage in `tests/test_pr_autofix_lease.py`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~13,700 tokens (54,740 bytes)
- Approximate tokens of output written: ~3,300 tokens (13,156 bytes)
