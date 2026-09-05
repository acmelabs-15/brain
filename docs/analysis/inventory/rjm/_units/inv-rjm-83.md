---
unit: inv-rjm-83
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-83

## Files assigned
- [x] `.claude/skills/ai-agents-docs-of-record/SKILL.md`
- [x] `.claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md`
- [x] `.claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md`
- [x] `.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-docs-of-record-skill-md.md` (9034 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-empirical-probe-toolkit-references-provenance-md.md` (4691 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-empirical-probe-toolkit-references-worked-examples-md.md` (5012 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-empirical-probe-toolkit-skill-md.md` (8213 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-83.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both `ai-agents-docs-of-record` and `ai-agents-empirical-probe-toolkit` invoke and are invoked by research skills (`ai-agents-research-methodology`, `ai-agents-research-frontier`) and validation playbooks (`ai-agents-validation-and-qa`, `ai-agents-debugging-playbook`).
- `ai-agents-docs-of-record` cites `.serena/memories/retrospective-accuracy.md` at line 128, which lives under `.serena/memories/agent-behavior/retrospective-accuracy.md` in the working tree (documented as a missing-path defect).
- `ai-agents-empirical-probe-toolkit` notes that the `guard-maturity` skill was retired under ADR-084, leaving automated telemetry monitoring of shipped guards as something contributors must roll individually.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,033 tokens (40,133 bytes).
Approximate tokens of output written: ~6,740 tokens (26,950 bytes across 4 inventory cards and 1 unit report).
