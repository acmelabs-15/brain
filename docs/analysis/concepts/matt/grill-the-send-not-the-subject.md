---
package: matt
name: Grill the send, not the subject
slug: grill-the-send-not-the-subject
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Grill the send, not the subject

## Definition — verbatim
> "Interview the user only about the _send_, which they can always answer: who it goes to, and what they need back. The questions in the document then target the **gap** between what the recipient knows and what the user needs." — skills/productivity/to-questionnaire/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/to-questionnaire/SKILL.md | 9 | defined here | Guiding rule directing the interview to focus on recipient context and desired decisions rather than technical subject matter. |

## Consumes
An unresolved decision where the user lacks technical knowledge, authority, or context.

## Produces
Recipient profile (role, expertise, relationship) and explicit target decision criteria for questionnaire drafting.

## When applied
When interviewing the user during the initial two exchanges of the `/to-questionnaire` skill.

## Sub-concepts
none

## Part of
to-questionnaire

## Implementation status
clean

## Design notes
Prevents interview deadlock when the user is blocked on external knowledge. Probing a user about subject matter they do not understand causes frustration and stalls progress; interviewing them about the transmission context (recipient expertise and desired decision payload) extracts everything needed to frame an effective inquiry.
