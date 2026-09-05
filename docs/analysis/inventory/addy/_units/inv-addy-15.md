---
unit: inv-addy-15
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-15

## Files assigned
- [x] sources/addy-external/code-review-and-quality.md (26687 bytes, 20 lines, 9cd4e257b466f8e1)

## Outputs produced
- docs/analysis/inventory/addy/external-code-review-and-quality-md.md (7088 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-15.md (1620 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/code-review-and-quality.md` represents an external web documentation snapshot published at `https://skills.addy.ie/skills/code-review-and-quality/`, corresponding to the underlying repository skill `skills/code-review-and-quality/SKILL.md`.
- It exhibits doc-drift relative to `skills/code-review-and-quality/SKILL.md`: the external documentation presents a generic 6-part anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" with Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas the actual skill file contains 19 specific sections (including The Five-Axis Review, Structural Remedies, Change Sizing, Multi-Model Review Pattern, and Dead Code Hygiene).
- Sibling skills in the Review phase referenced on this page (`code-simplification`, `security-and-hardening`, and `performance-optimization`) and the associated slash commands (`/review`, `/code-simplify`, `/webperf`) cross-reference other units in addy inventory.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~6,672 tokens (26,687 bytes).
Approximate output tokens: ~2,200 tokens (~8,700 bytes across card and unit report).
