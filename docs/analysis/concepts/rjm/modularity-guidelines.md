---
package: rjm
name: Modularity Guidelines
slug: modularity-guidelines
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Modularity Guidelines

## Definition — verbatim
> "# Modularity Guidelines (SkillsBench)" — .claude/skills/skillforge/references/modularity-guidelines.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/modularity-guidelines.md | 1 | defined here | Defines empirical guidelines based on SkillsBench research recommending focused, standard-length skills over exhaustive documentation. |

## Consumes
Skill structure, line counts, section headers, and file breakdown.

## Produces
Modularity targets (<=300 lines ideal, <=10 h2 sections, modularity score >=80) and refactoring targets.

## When applied
Applied during skill design, generation, and refactoring audits to optimize prompt size and task macro pass rates.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, other

## Design notes
Empirical structural guidelines derived from benchmark research that define size, section, and decomposition targets for skills, proving that focused, standard-length skills significantly outperform exhaustive documentation packs.
