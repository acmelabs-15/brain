---
unit: inv-addy-16
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-16

## Files assigned
- [x] sources/addy-external/code-simplification.md (26320 bytes, 20 lines, 91567ad5289ace67)

## Outputs produced
- docs/analysis/inventory/addy/external-code-simplification-md.md (7513 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-16.md (2715 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/code-simplification.md` represents an external web documentation snapshot published at `https://skills.addy.ie/skills/code-simplification/`, corresponding to the repository skill `skills/code-simplification/SKILL.md`.
- Sibling manifest entry `external/constraint-driven-development.md` is marked `external-doc (unavailable)` in the manifest (0 bytes, absent from checkout) and per METHOD.md §1.1 and unit facts requires no card.
- Doc-drift: relative to `skills/code-simplification/SKILL.md`, the external documentation claims that every skill follows a standardized 6-section anatomy (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), whereas `skills/code-simplification/SKILL.md` contains eight major sections (Overview, When to Use, The Five Principles, The Simplification Process, Language-Specific Guidance, Common Rationalizations, Red Flags, Verification), omitting "The Five Principles" and "Language-Specific Guidance" from the web template's anatomy listing.
- Internal and cross-file contradictions: the web page displays `/code-simplify` in its header badge (line 5) but lists `Command /review` in its sidebar metadata block (line 12). Furthermore, the web page assigns `code-simplification` to the `Review phase` (`addy:Review`), whereas the repository slash command `.claude/commands/code-simplify.md:27` assigns it to the Build phase (`addy:Build`).
- Sibling skills in the Review phase referenced on this page (`code-review-and-quality`, `security-and-hardening`, and `performance-optimization`) and associated slash commands (`/review`, `/code-simplify`, `/webperf`) cross-reference other units in addy inventory (inv-addy-1, inv-addy-15).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~6,580 tokens (26,320 bytes).
Approximate output tokens: ~2,300 tokens (~9,550 bytes across card and unit report).
