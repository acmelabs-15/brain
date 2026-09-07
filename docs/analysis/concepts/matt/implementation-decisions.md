---
package: matt
name: Implementation Decisions
slug: implementation-decisions
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Implementation Decisions

## Definition — verbatim
> "A list of implementation decisions that were made." — skills/engineering/to-spec/SKILL.md:45

## Also called — verbatim
`implementation-decisions` — external/to-spec.md:53

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 53 | used here | Recommends leaning on the implementation-decisions and testing-decisions sections for architectural or refactoring work where user stories are poorly suited. |
| skills/engineering/to-spec/SKILL.md | 43 | defined here | Defines the Implementation Decisions section of the specification template, capturing modified modules, interfaces, and architecture without brittle file paths. |

## Consumes
Agreed architectural choices, developer technical clarifications, and interface agreements settled during grilling conversations.

## Produces
A structured specification section listing modules, modified interfaces, technical clarifications, schema changes, and API contracts.

## When applied
Applied when drafting a specification issue in `/to-spec`.

## Sub-concepts
none

## Part of
spec, spec-template

## Implementation status
clean

## Design notes
A core section of Matt Pocock's specification template designed to capture structural and technical commitments—such as module interfaces, architectural choices, and schema changes—without binding them to fragile file paths or premature implementation details.
