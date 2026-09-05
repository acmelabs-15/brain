---
unit: inv-rjm-82
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-82

## Files assigned
- [x] `.claude/skills/ai-agents-debugging-playbook/SKILL.md`
- [x] `.claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md`
- [x] `.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-debugging-playbook-skill-md.md` (9375 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-diagnostics-toolkit-references-instrument-guides-md.md` (9340 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-diagnostics-toolkit-skill-md.md` (8835 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-82.md` (2175 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `ai-agents-debugging-playbook` and `ai-agents-diagnostics-toolkit` form a tightly coupled complementary pair: diagnostics toolkit and its instrument guides provide read-only quantitative measurements against baselines, while debugging playbook provides symptom matching, discriminating experiments, canonical fix paths, and cautionary traps.
- Both skills document the retirement of the PreToolUse push guards framework (`push_guard_base.py`) and the `guard-maturity` classifier skill under ADR-084 (issue #5154).
- `references/instrument-guides.md` documents that repo `main` is baseline-red on golden principles (exit 10, 109 errors) and description budget in gate mode (exit 1, ~10235 tokens vs 8000 budget), establishing that PRs must evaluate deltas rather than assuming a green baseline.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10857 tokens (43430 bytes across 3 files)
- Approximate tokens of output written: ~7330 tokens (~29290 bytes across 4 files)
