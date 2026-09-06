---
package: addy
name: Writing Principles
slug: writing-principles
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Writing Principles

## Definition — verbatim
> "1. **Process over knowledge.** Skills are workflows, not reference docs. Steps, not facts." — docs/skill-anatomy.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 142 | defines | Defines the six authoring principles (process over knowledge, specific over general, evidence over assumption, anti-rationalization, progressive disclosure, token-conscious) for skill creation. |

## Consumes
Skill workflows and technical procedures intended for agent execution.

## Produces
Standardized skill documentation adhering to process-first, evidence-based guidelines.

## When applied
When authoring new agent skills or refactoring existing skill documentation.

## Sub-concepts
progressive-disclosure

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Writing Principles establishes the foundational design philosophy for skill documentation in addy: skills must prioritize procedural workflow instructions and evidence requirements over static factual knowledge. This structure prevents agents from treating skills as passive reference manuals and enforces concrete, actionable step-by-step guidance.
