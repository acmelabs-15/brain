---
unit: inv-addy-28
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-28

## Files assigned
- [x] sources/addy-external/security-and-hardening.md (26475 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-security-and-hardening-md.md (9260 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-28.md (1824 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/security-and-hardening.md` is the public web documentation catalog page for `skills/security-and-hardening/SKILL.md`. It places `security-and-hardening` in the `addy:Review` phase alongside `code-review-and-quality`, `code-simplification`, and `performance-optimization`, associated with the slash command `/review`.
- The external catalog asserts an idealized 6-part anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/security-and-hardening.md:9), which diverges from the 12 specialized top-level markdown sections in the canonical repository implementation `skills/security-and-hardening/SKILL.md` (recorded as a doc-drift defect).
- None of this unit's files appear in the duplication ledger (`docs/analysis/manifest/addy-duplicates.md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,619 tokens (26,475 bytes); approximate tokens of output written: ~2,678 tokens (~10,710 bytes across card and unit report).
