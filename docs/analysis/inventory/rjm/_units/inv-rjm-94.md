---
unit: inv-rjm-94
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-94

## Files assigned
- [x] `.claude/skills/business-strategy/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-business-strategy-skill-md.md` (12049 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-94.md` (this report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/business-strategy/SKILL.md` is the router (part 3) for the 14-book business-strategy pack. Its 14 reference files under `references/` were assigned to unit `inv-rjm-92` (part 1: `100m-leads.md`, `100m-offers.md`, `blue-ocean-strategy.md`, `crossing-the-chasm.md`, `four-steps.md`, `influence.md`, `lean-startup.md`) and unit `inv-rjm-93` (part 2: `made-to-stick.md`, `mom-test.md`, `monetizing-innovation.md`, `obviously-awesome.md`, `spin-selling.md`, `storybrand.md`, `traction.md`).
- The skill functions as an optional pack for early-stage startup founder problem diagnosis and progressive disclosure framework routing. It is not part of the standard engineering lifecycle commands (`spec`, `plan`, `build`, `test`, `review`, `ship`), but rather installed via `npx ai-agents init --pack business`.
- Mentions `decision-critic` and "the engineering rules" as negative triggers, but `decision-critic` is not implemented in `.claude/` (lives in `src/copilot-cli/skills/decision-critic/`), and the engineering rules live in `src/copilot-cli/instructions/unified-software-engineering.instructions.md`.

## Blocked or uncertain
none

## Time and size
Approximate source read: 8,625 bytes (~2,156 tokens).
Approximate output written: ~14,000 bytes (~3,500 tokens).
