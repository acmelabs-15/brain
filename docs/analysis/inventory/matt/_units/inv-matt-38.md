---
unit: inv-matt-38
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-38

## Files assigned
- [x] sources/matt/skills/engineering/codebase-design/agents/openai.yaml (102 bytes, 4 lines)
- [x] sources/matt/skills/engineering/codebase-design/DEEPENING.md (2553 bytes, 38 lines)
- [x] sources/matt/skills/engineering/codebase-design/DESIGN-IT-TWICE.md (2664 bytes, 45 lines)
- [x] sources/matt/skills/engineering/codebase-design/SKILL.md (6446 bytes, 115 lines)
- [x] sources/matt/skills/engineering/diagnosing-bugs/agents/openai.yaml (103 bytes, 4 lines)
- [x] sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh (1316 bytes, 45 lines)
- [x] sources/matt/skills/engineering/diagnosing-bugs/SKILL.md (8529 bytes, 139 lines)
- [x] sources/matt/skills/engineering/domain-modeling/ADR-FORMAT.md (2733 bytes, 48 lines)
- [x] sources/matt/skills/engineering/domain-modeling/agents/openai.yaml (101 bytes, 4 lines)
- [x] sources/matt/skills/engineering/domain-modeling/CONTEXT-FORMAT.md (2290 bytes, 61 lines)
- [x] sources/matt/skills/engineering/domain-modeling/SKILL.md (3331 bytes, 75 lines)

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-codebase-design-agents-openai-yaml.md (1869 bytes)
- docs/analysis/inventory/matt/skills-engineering-codebase-design-deepening-md.md (4043 bytes)
- docs/analysis/inventory/matt/skills-engineering-codebase-design-design-it-twice-md.md (3937 bytes)
- docs/analysis/inventory/matt/skills-engineering-codebase-design-skill-md.md (4459 bytes)
- docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-agents-openai-yaml.md (1827 bytes)
- docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-scripts-hitl-loop-template-sh.md (3520 bytes)
- docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-skill-md.md (5807 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-adr-format-md.md (3233 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-agents-openai-yaml.md (1813 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-context-format-md.md (2847 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-skill-md.md (4296 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-38.md

## Scripts executed
- skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh: `printf '\ny\nnone\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/engineering/codebase-design/SKILL.md` along with its references `DEEPENING.md` and `DESIGN-IT-TWICE.md` define an Ousterhout- and Feathers-inspired architectural vocabulary (module, interface, implementation, depth, seam, adapter, leverage, locality) paired with four design principles (including the deletion test, the interface as test surface, and requiring at least two adapters for a real seam). It provides the architectural vocabulary used by `improve-codebase-architecture` (unit `inv-matt-4` doc and related skill units) and `tdd`.
- `skills/engineering/diagnosing-bugs/SKILL.md` provides a gated six-phase scientific debugging loop (tight feedback loop, reproduce + minimise, hypothesise, instrument, fix + regression test, cleanup) supported by the interactive template `scripts/hitl-loop.template.sh`. It mandates tagged log instrumentation (`[DEBUG-...]`) for grep cleanup and treats the absence of a proper test seam as an architectural finding to flag.
- `skills/engineering/domain-modeling/SKILL.md` along with `CONTEXT-FORMAT.md` and `ADR-FORMAT.md` establishes an active domain-modeling discipline (challenging terms against the glossary, sharpening fuzzy terminology, testing with edge scenarios, and updating `CONTEXT.md` inline) and defines a 3-part qualification gate (hard to reverse, surprising without context, real trade-off) for recording ADRs in `docs/adr/`.
- All three skills (`codebase-design`, `diagnosing-bugs`, `domain-modeling`) feature companion `agents/openai.yaml` files defining Codex interface metadata without implicit invocation disablement, confirming their model-invoked status.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,542 tokens (30,168 bytes across 11 files).
Approximate tokens of output written: ~10,100 tokens (40,400 bytes across 11 cards and unit report).
