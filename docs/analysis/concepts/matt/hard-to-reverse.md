---
package: matt
name: Hard to reverse
slug: hard-to-reverse
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hard to reverse

## Definition — verbatim
> "1. **Hard to reverse**: the cost of changing your mind later is meaningful" — skills/engineering/domain-modeling/ADR-FORMAT.md:33

> "1. **Hard to reverse**: the cost of changing your mind later is meaningful" — skills/engineering/domain-modeling/SKILL.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/ADR-FORMAT.md | 33 | defined here | Defined as the first qualifying test for deciding whether an architectural decision warrants an ADR. |
| skills/engineering/domain-modeling/SKILL.md | 70 | used here | Reasserted as the first prerequisite condition for offering to create an ADR during domain modeling. |

## Consumes
An architectural choice or technical decision under consideration.

## Produces
A gate verdict on whether the difficulty of reversing the decision warrants recording an ADR.

## When applied
When deciding whether to document an architectural decision in `docs/adr/`.

## Sub-concepts
none

## Part of
adr-s-three-tests

## Implementation status
clean

## Design notes
The first of three qualifying gate criteria in matt's ADR threshold filter. By requiring that a decision carries meaningful reversal cost, it filters out easily reversible decisions and prevents ADR documentation bloat.
