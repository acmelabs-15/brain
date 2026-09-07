---
package: matt
name: send
slug: send
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# send

## Definition — verbatim
> "It grills you about the **send**, never the subject." — docs/productivity/to-questionnaire.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 5 | defined here | Directs the interview to focus exclusively on recipient context and required outputs rather than the subject matter. |
| external/to-questionnaire.md | 26 | defined here | Explains that grilling the send asks only who the document is going to and what is needed back. |
| skills/productivity/to-questionnaire/SKILL.md | 9 | defined here | Core instruction to interview the user only about the send (who it goes to, and what they need back). |

## Consumes
A blocked decision where the necessary knowledge lives in someone else's head.

## Produces
Clear target recipient context and an explicit list of required decisions or facts needed back.

## When applied
During the two-exchange interview phase of `to-questionnaire`.

## Sub-concepts
none

## Part of
to-questionnaire, questionnaire

## Implementation status
clean

## Design notes
The foundational interview scoping technique in `to-questionnaire`. By restricting elicitation strictly to transmission parameters (recipient role, expertise, and required deliverables) instead of probing domain content the user explicitly does not possess, it prevents the interview from derailing into speculative or unanswerable queries.
