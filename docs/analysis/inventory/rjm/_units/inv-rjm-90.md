---
unit: inv-rjm-90
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-90

## Files assigned
- [x] `.claude/skills/autoplan/SKILL.md` (11922 bytes) — read in full
- [x] `.claude/skills/avoiding-manufactured-work/SKILL.md` (1853 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-autoplan-skill-md.md` (10873 bytes)
- `docs/analysis/inventory/rjm/claude-skills-avoiding-manufactured-work-skill-md.md` (5751 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-90.md` (unit report)

## Scripts executed
- Path existence verification script in `sources/rjm`:
  - `python3 -c "import os; ..."` — verified existence of all 18 routed skills, agents, and commands referenced in autoplan routing table — exit 0
- Verification scripts executed in repo root:
  - `bun scripts/synthesis/quote-check.ts docs/analysis/inventory/rjm/claude-skills-autoplan-skill-md.md docs/analysis/inventory/rjm/claude-skills-avoiding-manufactured-work-skill-md.md` — exit 0 (105 PASS, 0 FAIL)
  - `bun scripts/synthesis/coverage.ts` — exit 0 (coverage clean, zero failures)
  - `bun scripts/synthesis/memo.ts stamp docs/analysis/inventory/rjm/claude-skills-autoplan-skill-md.md --model "Gemini 3.8 Flash" --effort high` — exit 0
  - `bun scripts/synthesis/memo.ts stamp docs/analysis/inventory/rjm/claude-skills-avoiding-manufactured-work-skill-md.md --model "Gemini 3.8 Flash" --effort high` — exit 0
  - `bun scripts/synthesis/memo.ts audit` — exit 0 (653 OK, 0 STALE)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/autoplan/SKILL.md` implements the front-door router at the skill layer per ADR-078. It establishes an explicit non-recursive relationship with `orchestrator`: autoplan routes to orchestrator for multi-domain execution, and orchestrator never routes back to autoplan.
- `.claude/skills/avoiding-manufactured-work/SKILL.md` is the post-deliverable guardrail paired with the `front-gate-before-pipeline` pattern (which guards entry in `plan.md` and `research-and-incorporate`). While the section heading in `avoiding-manufactured-work` says `## Sibling skill`, there is no standalone `front-gate-before-pipeline` skill file in the repository; this defect is documented in both `avoiding-manufactured-work` and `ai-agents-external-claims`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~3,444 tokens (13,775 bytes)
- Approximate tokens of output written: ~4,156 tokens (16,624 bytes)
