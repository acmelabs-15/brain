---
unit: inv-addy-41
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-41

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/deprecation-and-migration/SKILL.md (12516 bytes, 247 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/documentation-and-adrs/SKILL.md (9782 bytes, 288 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/doubt-driven-development/SKILL.md (16499 bytes, 243 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/frontend-ui-engineering/SKILL.md (10711 bytes, 328 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md (6746 bytes)
- docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md (6720 bytes)
- docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md (9233 bytes)
- docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md (9445 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-41.md (4409 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Integration across Build and Ship**: Unit inv-addy-41 covers foundational practices across `addy:Build` (`doubt-driven-development`, `frontend-ui-engineering`) and `addy:Ship` (`deprecation-and-migration`, `documentation-and-adrs`), bridging robust construction with long-term maintainability and decommissioning.
- **In-Flight Adversarial Review (Doubt-Driven Development)**: `skills/doubt-driven-development/SKILL.md` directly addresses LLM confirmation bias and context contamination during multi-turn agent sessions. It establishes a disciplined 5-step cycle (CLAIM → EXTRACT → DOUBT → RECONCILE → STOP) that strips author journey reasoning and presents only the raw artifact and contract to a fresh-context reviewer. It provides optional, user-authorized cross-model escalation (Gemini CLI, Codex CLI) with critical safety constraints: stdin prompt piping (neutralizing shell prompt injection), read-only sandboxes (`--sandbox read-only` / `--approval-mode plan`), and an explicit prohibition against persona-to-persona nesting (violating `references/orchestration-patterns.md`).
- **Production UI and Anti-AI Aesthetic (Frontend UI Engineering)**: `skills/frontend-ui-engineering/SKILL.md` outlines an 8-point taxonomy of common LLM frontend generation defects (purple palettes, gratuitous gradients, uniform `rounded-2xl`, unscaled spacing, stock card grids). It provides component colocation standards, container vs. presentation separation, clear state tiering rules (local up to global store), and strict WCAG 2.1 AA accessibility requirements (keyboard navigation, ARIA, focus trapping) linked to `references/accessibility-checklist.md`.
- **Systematic Decommissioning and Zombie Code (Deprecation & Migration)**: `skills/deprecation-and-migration/SKILL.md` establishes that code is a maintenance liability, providing a 5-question decision framework, distinguishing advisory from compulsory deprecation, defining 4 canonical migration patterns (Strangler, Adapter, Feature Flag, Expand/Contract schema migrations), and mandating the complete eradication of zombie code.
- **Agent-Centric Knowledge Preservation (Documentation & ADRs)**: `skills/documentation-and-adrs/SKILL.md` highlights future autonomous agents and engineers as key beneficiaries of architecture records. It standardizes ADR lifecycle states (PROPOSED, ACCEPTED, SUPERSEDED, DEPRECATED), non-obvious inline commenting, OpenAPI interfaces, and repo-level agent context files (`CLAUDE.md`).
- **Full Verification**: All 4 cards verified cleanly via `bun scripts/synthesis/quote-check.ts` with 175 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,377 tokens (49,508 bytes across 4 source files)
- Approximate tokens of output written: ~8,900 tokens (36,019 bytes across 4 inventory cards + unit report)
