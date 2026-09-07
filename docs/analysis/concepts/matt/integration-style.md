---
package: matt
name: Integration-style
slug: integration-style
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration-style

## Definition — verbatim
> "**Integration-style**: Test through real interfaces, not mocks of internal parts." — skills/engineering/tdd/tests.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/tests.md | 5 | defined here | Core definition and pattern recommended for authoring robust automated tests. |

## Consumes
Public module interfaces and real internal collaborators.

## Produces
Tests that verify user-facing capabilities without internal mock fragility.

## When applied
When designing test structures in TDD, preferring real interactions over isolated unit mocks.

## Sub-concepts
observable-behavior

## Part of
good-tests, tdd

## Implementation status
clean

## Design notes
The defining pattern of Matt's test design philosophy. Integration-style tests execute through genuine public interfaces and allow internal components to interact naturally without synthetic mocks, ensuring that the test asserts on observable system capabilities rather than internal mechanical wiring.
