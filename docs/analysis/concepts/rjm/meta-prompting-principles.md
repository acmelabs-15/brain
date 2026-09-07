---
package: rjm
name: meta-prompting principles
slug: meta-prompting-principles
kind: checklist
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

# meta-prompting principles

## Definition — verbatim
> "The specification follows meta-prompting principles:" — .claude/skills/skillforge/references/specification-template.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 7 | used here | Introduces the foundational meta-prompting guidelines governing the skill specification document. |

## Consumes
Prompt design theories and agent instruction architectures.

## Produces
High-fidelity, structured prompting patterns that separate analysis context from execution rules.

## When applied
When designing skill specifications and prompts to ensure clean execution by AI models.

## Sub-concepts
explicit-why, measurable-criteria, xml-structure

## Part of
skill-specification-template

## Implementation status
clean

## Design notes
A set of four prompt architecture principles (separation of concerns, explicit WHY, measurable criteria, XML structure) that structure intermediate specifications so downstream LLMs can execute them without hallucination or context bleed.
