---
package: rjm
name: User Stories
slug: user-stories
kind: technique
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User Stories

## Definition — verbatim
(used, not defined)

> "| **User Stories (As a... I want... So that...)** | User-centric | Implementation-agnostic; doesn't specify system behavior | Better for capturing needs, not specifying behavior |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 77 | used here | Evaluated in ADR-032 as capturing user needs but rejected as insufficient for formal system behavioral specification. |

## Consumes
User personas, feature goals, and product desires.

## Produces
Agile user story statements capturing user needs from an external persona perspective.

## When applied
> "Better for capturing needs, not specifying behavior" — .agents/architecture/ADR-032-ears-requirements-syntax.md:77

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An agile requirement elicitation format used to capture user needs from an external persona viewpoint. In rjm's architecture, user stories precede formal requirements but cannot substitute for EARS, which provides the necessary precision to specify observable system behaviors and testable triggers.
