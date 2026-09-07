---
package: matt
name: public boundary
slug: public-boundary
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# public boundary

## Definition — verbatim
> "The idea the skill runs on is the <strong class="ah-prose-strong">seam</strong>: the public boundary you observe behaviour at, without reaching inside." — external/implement.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/implement.md | 46 | defined here | Defines a seam as the public boundary where observable behavior is tested without reaching into internal details. |

## Consumes
Module interfaces, API definitions, or public behavioral contracts.

## Produces
Decoupled, durable test cases positioned at component boundaries.

## When applied
When defining seams and authoring tests during test-driven development.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: orphan, doc-drift, cross-file-contradiction, other

## Design notes
The public boundary defines the observable surface of a software module or component. In Matt's TDD philosophy, testing at public boundaries (seams) is what makes tests durable, allowing underlying internal implementations to be rewritten and refactored without breaking existing test suites.
