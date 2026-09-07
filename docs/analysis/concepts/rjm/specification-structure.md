---
package: rjm
name: Specification Structure
slug: specification-structure
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase2-specification-deep-dive.md, sha256: c290149e8372d86a6cdc5ec7c1b56975781fb6a1b175ce635f6e82282209a307}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Specification Structure

## Definition — verbatim
> "The specification captures all analysis insights in XML format:" — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase2-specification-deep-dive.md | 3 | defined here | Section heading defining the XML structure and mandatory tags of a skill specification. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 39 | used here | Table row recording extraction of Specification Structure into references/phase2-specification-deep-dive.md. |

## Consumes
Analysis insights from Phase 1, requirements, and architectural selections.

## Produces
A structured XML skill specification document (SKILL_SPEC.md) ready for Phase 2 validation.

## When applied
Applied during Phase 2 (Specification) when formalizing the design of a skill.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Specification Structure defines the schema for skill specifications using XML tags (`<metadata>`, `<context>`, `<requirements>`, `<architecture>`, `<scripts>`, `<anti_patterns>`, `<success_criteria>`). In rjm, structured XML enforces complete documentation of design rationale and requirements traceability.
