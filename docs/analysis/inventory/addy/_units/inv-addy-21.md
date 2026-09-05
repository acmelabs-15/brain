---
unit: inv-addy-21
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-21

## Files assigned
- [x] `sources/addy-external/frontend-ui-engineering.md` (26596 bytes, 20 lines)

## Outputs produced
- `docs/analysis/inventory/addy/external-frontend-ui-engineering-md.md` (8351 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-21.md` (2711 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/frontend-ui-engineering.md` is an external documentation snapshot fetched from `https://skills.addy.ie/skills/frontend-ui-engineering/` and stored at `sources/addy-external/frontend-ui-engineering.md`.
- It corresponds to the in-repo skill `skills/frontend-ui-engineering/SKILL.md` (unit inv-addy-41).
- Lifecycle phase placement: Categorized under Build phase (`addy:Build`) and associated with the `/build` command in the sidebar (`external/frontend-ui-engineering.md:12`), aligning with repository index references in `README.md:363` and `CLAUDE.md:25`.
- Related Build-phase skills featured on this external doc page connect to `incremental-implementation` (inv-addy-24), `test-driven-development` (inv-addy-32), and `context-engineering` (inv-addy-17).
- Two doc-drift defects were documented between the website documentation page and the repository source:
  1. Standard anatomy drift: The website anatomy panel displays a static generic 6-section template (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` at line 10), whereas `skills/frontend-ui-engineering/SKILL.md` contains 12 substantive sections with different headings (Component Architecture, Avoiding the "AI Aesthetic", Design Systems & Tokens, Accessibility, State Management, Responsive Design, Performance, Common Traps & Rationalizations, Red Flags, Verification Checklist).
  2. Trigger condition truncation: The web page abbreviates triggering conditions to "Building or modifying user-facing interfaces", omitting the specific component architecture, layout, accessibility, and AI-aesthetic avoidance triggers detailed in `skills/frontend-ui-engineering/SKILL.md:3`.

## Blocked or uncertain
none

## Time and size
- Approximate source tokens: ~1,850 tokens (26,596 bytes across 1 file)
- Approximate output tokens: ~2,500 tokens (8,351 bytes inventory card plus unit report)
