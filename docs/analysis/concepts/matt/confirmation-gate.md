---
package: matt
name: confirmation gate
slug: confirmation-gate
kind: gate
package_phase: matt:grilling
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# confirmation gate

## Definition — verbatim
> "A confirmation gate exists precisely for this: the skill is not finished when the frontier empties, it is finished when you say the understanding is shared." — external/grilling.md:50

## Also called — verbatim
`A confirmation gate` — CHANGELOG.md:169

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 169 | defined here | Documents addition of the explicit closing confirmation gate in grilling |
| external/grilling.md | 50 | defined here | Describes the purpose of the confirmation gate to prevent premature building |

## Consumes
A completed round of interview questions with an exhausted inquiry frontier

## Produces
Explicit user confirmation that understanding is shared, or further questions if gaps remain

## When applied
At the conclusion of a grilling interview before transitioning into spec writing or implementation

## Sub-concepts
none

## Part of
grilling

## Implementation status
clean

## Design notes
The confirmation gate enforces human oversight by preventing overeager models from automatically commencing implementation the moment an interview frontier appears empty, requiring human verification that mutual understanding has indeed been attained.
