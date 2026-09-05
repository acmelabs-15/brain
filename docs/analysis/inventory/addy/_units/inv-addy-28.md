---
unit: inv-addy-28
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-28

## Files assigned
- [x] sources/addy-external/security-and-hardening.md (26475 bytes, 20 lines, 47b655926f0b1757)

## Outputs produced
- docs/analysis/inventory/addy/external-security-and-hardening-md.md (7746 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-28.md (1850 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/security-and-hardening.md` represents an external web documentation snapshot published at `https://skills.addy.ie/skills/security-and-hardening/`, corresponding to the underlying repository skill `skills/security-and-hardening/SKILL.md`.
- It exhibits doc-drift relative to `skills/security-and-hardening/SKILL.md`: the external documentation presents a generic 6-part anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" with Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas the actual skill file contains 16 specific sections (including The Three-Tier Boundary System, OWASP Top 10 Prevention Patterns, Input Validation Patterns, Triaging Dependency Audit Results, Rate Limiting, Secrets Management, Data Privacy & Compliance, Securing AI / LLM Features, and Security Review Checklist).
- Sibling skills in the Review phase referenced on this page (`code-review-and-quality`, `code-simplification`, and `performance-optimization`) and the associated slash commands (`/review`, `/code-simplify`, `/webperf`) cross-reference other units in addy inventory (e.g., inv-addy-15, inv-addy-16, inv-addy-17).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~6,619 tokens (26,475 bytes).
Approximate output tokens: ~2,300 tokens (~9,600 bytes across card and unit report).
