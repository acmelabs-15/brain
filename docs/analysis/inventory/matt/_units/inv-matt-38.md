---
unit: inv-matt-38
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-38

## Files assigned
- [x] `skills/engineering/codebase-design/agents/openai.yaml`
- [x] `skills/engineering/codebase-design/DEEPENING.md`
- [x] `skills/engineering/codebase-design/DESIGN-IT-TWICE.md`
- [x] `skills/engineering/codebase-design/SKILL.md`
- [x] `skills/engineering/diagnosing-bugs/agents/openai.yaml`
- [x] `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`
- [x] `skills/engineering/diagnosing-bugs/SKILL.md`
- [x] `skills/engineering/domain-modeling/ADR-FORMAT.md`
- [x] `skills/engineering/domain-modeling/agents/openai.yaml`
- [x] `skills/engineering/domain-modeling/CONTEXT-FORMAT.md`
- [x] `skills/engineering/domain-modeling/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-engineering-codebase-design-agents-openai-yaml.md` — 1490 bytes
- `docs/analysis/inventory/matt/skills-engineering-codebase-design-deepening-md.md` — 3921 bytes
- `docs/analysis/inventory/matt/skills-engineering-codebase-design-design-it-twice-md.md` — 3588 bytes
- `docs/analysis/inventory/matt/skills-engineering-codebase-design-skill-md.md` — 4351 bytes
- `docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-agents-openai-yaml.md` — 1435 bytes
- `docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-scripts-hitl-loop-template-sh.md` — 3464 bytes
- `docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-skill-md.md` — 6595 bytes
- `docs/analysis/inventory/matt/skills-engineering-domain-modeling-adr-format-md.md` — 3166 bytes
- `docs/analysis/inventory/matt/skills-engineering-domain-modeling-agents-openai-yaml.md` — 1398 bytes
- `docs/analysis/inventory/matt/skills-engineering-domain-modeling-context-format-md.md` — 2959 bytes
- `docs/analysis/inventory/matt/skills-engineering-domain-modeling-skill-md.md` — 3621 bytes
- `docs/analysis/inventory/matt/_units/inv-matt-38.md` — unit report

## Scripts executed
- `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`: `printf '\ny\nTypeError: cannot read properties of undefined\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The `codebase-design`, `diagnosing-bugs`, and `domain-modeling` skills form three foundational engineering capability clusters in Matt Pocock's repository.
- `codebase-design` provides the architectural vocabulary (module, interface, seam, adapter, leverage, locality) and references Ousterhout and Feathers. Its companion files `DEEPENING.md` and `DESIGN-IT-TWICE.md` describe dependency refactoring strategies and parallel multi-agent interface exploration.
- `diagnosing-bugs` enforces a 6-phase debugging loop where constructing an automated, tight, deterministic feedback loop that can go red is mandatory before hypothesizing. It ships `hitl-loop.template.sh` for cases requiring human interaction.
- `domain-modeling` defines the active discipline of building ubiquitous language during engineering sessions via `CONTEXT.md` (and `CONTEXT-MAP.md`) and minimalist ADR generation via `ADR-FORMAT.md`.

## Blocked or uncertain
none

## Time and size
Source read: 30168 bytes (~7500 tokens) across 11 assigned files.
Output written: ~38500 bytes (~9500 tokens) across 11 inventory cards and 1 work unit report.
