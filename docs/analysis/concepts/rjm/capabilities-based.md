---
package: rjm
name: Capabilities-Based
slug: capabilities-based
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

# Capabilities-Based

## Definition — verbatim
> "### 4. Capabilities-Based (toolbox of related actions)" — .claude/skills/skillforge/scripts/init_skill.py:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 229 | defined here | Defined in PATTERNS_GUIDE as the skill organization pattern for a toolbox of multiple related independent commands under one skill. |

## Consumes
Set of related sub-commands, domain tools, or shared context resources.

## Produces
Scaffolded multi-command skill functioning as a coherent operational toolbox with shared domain context.

## When applied
Used when designing utility toolboxes such as database management tools, file utilities, or API helpers.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
SkillForge organization pattern for clustering related operational capabilities under a single skill boundary. It enables an agent to perform diverse actions (such as CRUD operations) against a common subsystem without scattering related capabilities across fragmented single-purpose skills.
