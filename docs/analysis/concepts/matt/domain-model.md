---
package: matt
name: domain model
slug: domain-model
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# domain model

## Definition — verbatim
> "Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a CONTEXT.md, or recording or editing an ADR." — skills/engineering/domain-modeling/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/SKILL.md | 3 | defined here | Defined in the skill description as the primary conceptual artifact built and sharpened during domain modeling. |

## Consumes
User business requirements, codebase terminology, concrete domain scenarios, and architectural trade-offs.

## Produces
A cohesive ubiquitous language recorded in `CONTEXT.md` and durable architectural decision records in `docs/adr/`.

## When applied
Whenever discussing codebase terminology, refining system boundaries, or capturing decisions.

## Sub-concepts
context-md, adr

## Part of
domain-modeling

## Implementation status
clean

## Design notes
The conceptual representation of a system's ubiquitous language, business concepts, and architectural decisions, actively captured and maintained in `CONTEXT.md` and `docs/adr/` to keep agent and human mental models aligned.
