---
unit: inv-matt-46
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-46

## Files assigned
- [x] sources/matt/skills/productivity/to-questionnaire/agents/openai.yaml (166 bytes, 6 lines)
- [x] sources/matt/skills/productivity/to-questionnaire/SKILL.md (2904 bytes, 55 lines)
- [x] sources/matt/skills/productivity/wait-what/agents/openai.yaml (158 bytes, 6 lines)
- [x] sources/matt/skills/productivity/wait-what/SKILL.md (394 bytes, 8 lines)
- [x] sources/matt/skills/productivity/writing-for-agents/agents/openai.yaml (102 bytes, 4 lines)
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL-MECHANICS.md (2629 bytes, 23 lines)
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL.md (10886 bytes, 82 lines)

## Outputs produced
- docs/analysis/inventory/matt/skills-productivity-to-questionnaire-agents-openai-yaml.md (1847 bytes)
- docs/analysis/inventory/matt/skills-productivity-to-questionnaire-skill-md.md (3740 bytes)
- docs/analysis/inventory/matt/skills-productivity-wait-what-agents-openai-yaml.md (1768 bytes)
- docs/analysis/inventory/matt/skills-productivity-wait-what-skill-md.md (2549 bytes)
- docs/analysis/inventory/matt/skills-productivity-writing-for-agents-agents-openai-yaml.md (1746 bytes)
- docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-mechanics-md.md (3098 bytes)
- docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-md.md (6042 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-46.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `to-questionnaire`: Functions as the asynchronous external knowledge-mining complement to `grill-me`. Interviews the user about the send (recipient role/context and needed decisions/facts) to generate an offline discovery questionnaire (`to-questionnaire-<slug>.md`) unblocking planning without forcing users to answer questions they lack knowledge of.
- `wait-what`: Functions as a conversational reset mechanism when an agent message fails to land. Commands the agent to re-pitch the explanation using ASD-STE100 (Simplified Technical English) and project ubiquitous language from `CONTEXT.md` (or indexed via `CONTEXT-MAP.md`).
- `writing-for-agents` and `SKILL-MECHANICS.md`: Establishes the foundational instruction-design methodology for the entire `matt` package. Crucial concepts include:
  - Context pointers with trigger branches.
  - Trading always-loaded context load against human cognitive load.
  - Information hierarchy ladder (in-file steps, in-file reference, disclosed reference).
  - Progressive disclosure and co-location.
  - Structuring completion criteria (clarity and demand) to prevent premature completion.
  - Leading words to recruit pretrained model priors.
  - Pruning disciplines against sediment, duplication, and no-ops.
  - Distinction between model-invoked and user-invoked (`disable-model-invocation: true`) skills, and the role of router skills (`ask-matt`).
  - Parity note: `writing-for-agents/agents/openai.yaml` omits `policy.allow_implicit_invocation: false` (dropped in PR #766, `CHANGELOG.md:21-23`) so Codex models can invoke the skill autonomously, matching Claude Code's model-invoked behavior.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~4,300 tokens (17,239 bytes across 7 files).
Approximate output tokens: ~5,200 tokens (~20,800 bytes across 7 cards and unit report).
