---
package: rjm
name: Skill Specification Template
slug: skill-specification-template
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

# Skill Specification Template

## Definition — verbatim
> "The specification is the bridge between analysis and execution. It captures all insights from Phase 1 in a structured format that enables clean Phase 3 execution." — .claude/skills/skillforge/references/specification-template.md:3

## Also called — verbatim
> "# Skill Specification Template" — .claude/skills/skillforge/references/specification-template.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 1 | defines | Document title and specification template defining the bridge between Phase 1 analysis and Phase 3 execution. |

## Consumes
Phase 1 Deep Analysis findings, applied thinking lenses, problem statements, and requirements.

## Produces
An XML specification document (`<skill_specification>`) ready for Phase 3 artifact generation.

## When applied
During Phase 2 (Specification) of the SkillForge skill lifecycle.

## Sub-concepts
full-specification-template, skill-specification

## Part of
skillforge

## Implementation status
clean

## Design notes
Serves as the intermediate architectural contract bridging exploratory analysis and deterministic code generation in SkillForge, formatting requirements and design constraints into structured XML.
