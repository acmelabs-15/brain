---
unit: inv-addy-16
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-16

## Files assigned
- [x] sources/addy-external/code-simplification.md (26320 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-code-simplification-md.md (6821 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-16.md (2161 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/code-simplification.md` is the public catalog page (hosted at `skills.addy.ie/skills/code-simplification/`) for `skills/code-simplification/SKILL.md`.
- It places `code-simplification` in the `addy:Review` phase alongside `code-review-and-quality`, `security-and-hardening`, and `performance-optimization`.
- Associated slash command is `/code-simplify`, although the page's sidebar metadata table displays `/review` under Command (internal contradiction).
- Core concepts referenced: `Chesterton’s Fence`, `Rule of 500`, and triggering condition ("Code works but is harder to read or maintain than it should be").
- Companion item `external/constraint-driven-development.md` is listed in unit-facts as `external-doc (unavailable)` (absent in this checkout). Per METHOD.md §1.1, unavailable external pages require no inventory card and are recorded in the unit report / companion card. It is not referenced in `external/code-simplification.md`.
- Document drift noted: the web page asserts an idealized 6-part workflow anatomy, whereas `skills/code-simplification/SKILL.md` contains additional major sections ("The Five Principles" and "Language-Specific Guidance").

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,580 tokens (26,320 bytes); approximate tokens of output written: ~2,250 tokens (~8,900 bytes total).
