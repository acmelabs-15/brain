---
package: rjm
name: Full Specification Template
slug: full-specification-template
kind: template
package_phase: rjm:Phase 2: Specification
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Full Specification Template

## Definition — verbatim
> "## Full Specification Template" — .claude/skills/skillforge/references/specification-template.md:16

## Also called — verbatim
> "<skill_specification version=\"1.0\">" — .claude/skills/skillforge/references/specification-template.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 16 | defines | Section heading containing the complete XML schema template for skill specifications. |

## Consumes
Skill metadata, problem context, explicit/implicit requirements, architecture, and success criteria.

## Produces
Complete XML specification document conforming to the `<skill_specification>` schema.

## When applied
During Phase 2 when populating the full skill specification before Phase 3 generation.

## Sub-concepts
skill-specification

## Part of
skill-specification-template

## Implementation status
clean

## Design notes
The comprehensive reference template providing the entire XML schema structure, comment blocks, and element hierarchy for authoring SkillForge skill specifications.
