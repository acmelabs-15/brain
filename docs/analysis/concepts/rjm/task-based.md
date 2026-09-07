---
package: rjm
name: Task-Based
slug: task-based
kind: pattern
package_phase: rjm:Phase 0: Skill Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task-Based

## Definition — verbatim
> "### 2. Task-Based (single focused action)" — .claude/skills/skillforge/scripts/init_skill.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 219 | defined here | Defined in PATTERNS_GUIDE as the skill organization pattern for single focused actions with minimal phases. |

## Consumes
Single-action input requirements, targeted transformation instructions.

## Produces
Scaffolded single-action skill structured around a direct input-to-output pipeline with minimal phase overhead.

## When applied
Used when creating single-purpose tools such as formatters, linters, converters, and focused utilities.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
SkillForge organization pattern optimized for discrete, single-action operations. By eliminating unnecessary phase ceremony and focusing directly on input transformation and output verification, it minimizes agent context consumption and latency for focused utility tasks.
