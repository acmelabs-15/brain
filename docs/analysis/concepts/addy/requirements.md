---
package: addy
name: "requirements"
slug: requirements
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# requirements

## Definition — verbatim
(used, not defined)

> "when requirements are unclear, ambiguous, or only exist as a vague idea." — external/spec-driven-development.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/interview-me.md | 5 | used here | Tagged as a catalog topic chip for requirement extraction via Socratic dialogue. |
| external/spec-driven-development.md | 5 | used here | Cited as the trigger condition where unclear or ambiguous requirements necessitate creating a formal spec document. |

## Consumes
User prompts, problem statements, customer requests, and business objectives.

## Produces
Structured specifications, acceptance criteria, and task breakdowns.

## When applied
Identified and clarified during the Define phase before planning or coding begins.

## Sub-concepts
acceptance-criteria

## Part of
spec-driven-development

## Implementation status
defects: doc-drift

## Design notes
Requirements form the boundary of what needs to be built. Addy treats ambiguous requirements as a major source of agent drift and bug generation, requiring rigorous elicitation via interview-me and spec-driven-development before coding.
