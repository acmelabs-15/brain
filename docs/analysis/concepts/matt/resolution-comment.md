---
package: matt
name: resolution comment
slug: resolution-comment
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolution comment

## Definition — verbatim
> "post the answer as a **resolution comment**, **close** the issue, and **append a context pointer** to the map's Decisions-so-far." — skills/engineering/wayfinder/SKILL.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 125 | defined here | Details recording the final answer to a decision ticket as a comment before closing the issue. |

## Consumes
The definitive answer, findings, or decision arrived at during a ticket resolution session.

## Produces
A persistent comment on the closed issue tracker ticket explaining the decision and rationale.

## When applied
At the conclusion of resolving a wayfinder child ticket, immediately prior to closing the ticket.

## Sub-concepts
none

## Part of
wayfinder, child-issue

## Implementation status
defects: other

## Design notes
The concluding documentation artifact for a decision ticket. Because wayfinder separates planning from coding and ticket bodies hold only questions, the resolution comment stores the concrete answer, decisions reached, and links to any artifacts created, ensuring future sessions can understand the rationale without re-investigating.
