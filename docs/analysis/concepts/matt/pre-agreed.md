---
package: matt
name: pre-agreed
slug: pre-agreed
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-agreed

## Definition — verbatim
> "The word "pre-agreed" is doing real work, and it is also the skill's weakest joint. Nothing inside `implement` agrees the seams. `tdd` is the skill that asks, and it refuses to write a test at an unconfirmed seam." — docs/engineering/implement.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/implement.md | 47 | defined here | Identifies 'pre-agreed' as the governing precondition requiring seams to be validated prior to code generation. |
| external/implement.md | 47 | defined here | Discusses the crucial role of pre-agreed seams in preventing tests from decaying into unprincipled code writing. |

## Consumes
A proposed test seam defined in a spec or agreed with the user.

## Produces
Explicit authorization for TDD to proceed with test authoring at that boundary.

## When applied
Before writing any automated tests or implementation code.

## Sub-concepts
none

## Part of
seams

## Implementation status
clean

## Design notes
pre-agreed acts as an architectural gate and precondition across Matt's engineering skills. It dictates that test seams must be confirmed by the human or upstream specification before implementation begins; without pre-agreement, the tdd skill halts and refuses to write speculative tests.
