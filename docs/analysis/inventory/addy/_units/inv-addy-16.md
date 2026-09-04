---
unit: inv-addy-16
phase: 1
package: addy
session: 014
subagent_returned: complete
---

# Unit inv-addy-16

## Files assigned
- [x] `external/frontend-ui-engineering.md` (26,596 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-frontend-ui-engineering-md.md` (15,710 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-16.md` (3,005 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Build Phase Alignment and Relationship to inv-addy-22 / inv-addy-23**:
  `external/frontend-ui-engineering.md` positions `frontend-ui-engineering` alongside `incremental-implementation` (`inv-addy-23`), `test-driven-development` (`inv-addy-22`), and `context-engineering` in the `Build phase`.
- **Command Binding Ambiguity and Drift**:
  While the external web landing page sidebar pairs `frontend-ui-engineering` with `Command /build`, in-repo command definitions in `commands/build.toml:4, 33`, `.claude/commands/build.md:4, 33`, and `.gemini/commands/build.toml:4, 33` establish that `/build` primarily drives `incremental-implementation` and `test-driven-development`, with no invocation or mention of `frontend-ui-engineering`. There is no dedicated slash command in `sources/addy` for frontend engineering.
- **Skill Anatomy Template vs Implementation Reality**:
  The external page asserts a rigid 6-part anatomy ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"). However, the underlying repository skill `skills/frontend-ui-engineering/SKILL.md` contains no section titled `Process`, providing instead engineering domain standards (`Component Architecture`, `State Management`, `Design System Adherence`, `Accessibility (WCAG 2.1 AA)`, `Responsive Design`, `Loading and Transitions`), and titles its rationalizations `## Common Rationalizations`.
- **Omission of Companion Reference**:
  `SKILL.md:297` directs users to `../../references/accessibility-checklist.md` for detailed accessibility requirements and testing tools, but this companion reference document is completely unlinked and omitted from the external documentation page.
- **Replacement of Stale Session 006 Relic**:
  The prior content in `_units/inv-addy-16.md` was a legacy relic from session 006 before the repartitioning in Phase 0 step 4; this unit now accurately and exclusively reports the single assigned file `external/frontend-ui-engineering.md`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,649 tokens (26,596 bytes across 1 file).
- Approximate tokens of output written: ~4,200 tokens across 1 inventory card and 1 unit report.
