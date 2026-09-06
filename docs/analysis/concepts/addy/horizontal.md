---
package: addy
name: Horizontal
slug: horizontal
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Horizontal

## Definition — verbatim
> "| **Horizontal** | Create shared code/stubs first, then consumers | Layered architecture |" — skills/code-review-and-quality/SKILL.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 123 | defined here | Change splitting strategy for layered systems creating shared foundations before consumers |

## Consumes
Layered architectural designs requiring new shared models, abstractions, or contracts.

## Produces
Foundation changes (interfaces, schemas, stubs) submitted and reviewed before consumer implementations.

## When applied
When building new capabilities in layered architectures where underlying contracts must stabilize first.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Horizontal is a change splitting strategy for layered architectures that creates shared models, interfaces, or stubs in an initial change before submitting consumer implementations. This separates foundational API design review from consumer integration review.
