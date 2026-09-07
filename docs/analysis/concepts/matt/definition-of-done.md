---
package: matt
name: Definition of done
slug: definition-of-done
kind: gate
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Definition of done

## Definition — verbatim
> "A workflow spec is done when an implementer agent could build it without asking a single question. Grill until then; nothing is done while a question remains." — skills/in-progress/loop-me/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 25 | defined here | Section heading establishing completion criteria for workflow specifications. |

## Consumes
Drafted workflow spec and unresolved grilling questions.

## Produces
Completion verdict indicating that the spec contains all necessary details for autonomous implementation.

## When applied
Evaluated at each round of grilling in loop-me to determine whether grilling must continue or the spec is complete.

## Sub-concepts
none

## Part of
loop-me

## Implementation status
clean

## Design notes
The exit gate for specification design in loop-me. It establishes an absolute threshold for completion: grilling cannot stop until an implementer agent could construct the entire workflow without needing to ask a single clarifying question.
