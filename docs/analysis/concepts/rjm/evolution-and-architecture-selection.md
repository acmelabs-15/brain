---
package: rjm
name: Evolution and Architecture Selection
slug: evolution-and-architecture-selection
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evolution and Architecture Selection

## Definition — verbatim
> "## Evolution and Architecture Selection" — .claude/skills/skillforge/SKILL.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 200 | defined here | SkillForge evaluation phase analyzing temporal horizons (6mo–5yr) and selecting appropriate architecture patterns. |

## Consumes
Draft skill specification, projected capability lifetime, and task complexity metrics.

## Produces
Architecture pattern selection and temporal timelessness score.

## When applied
Applied during skill design evaluation to reject transient or tool-bound patterns before final packaging.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Evolution and Architecture Selection is a design evaluation phase in SkillForge that projects skill designs across multi-year horizons to ensure anti-obsolescence and matches structural complexity to task requirements.
