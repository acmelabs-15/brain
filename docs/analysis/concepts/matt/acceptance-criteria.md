---
package: matt
name: acceptance criteria
slug: acceptance-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# acceptance criteria

## Definition — verbatim
(used, not defined)

> "Nothing works until every layer has landed, and each ticket's acceptance criteria have to reach into work that another ticket owns." — docs/engineering/to-tickets.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 27 | used here | Highlights that horizontal tickets force acceptance criteria to reach into work owned by other tickets. |
| external/implement.md | 49 | used here | Notes that implement does not automatically check off ticket acceptance criteria upon completion. |
| external/to-tickets.md | 34 | used here | External catalog note on how ticket slicing impacts the scoping of acceptance criteria. |

## Consumes
The behavioral requirements and test seams specified in tickets and specs.

## Produces
A checklist of observable behaviors and conditions that prove a ticket or feature is complete.

## When applied
Penned during ticket generation in `to-tickets` and verified during implementation and review.

## Sub-concepts
none

## Part of
ticket, to-tickets

## Implementation status
clean

## Design notes
Acceptance criteria serve as the grading contract for individual tickets and features. In Matt's methodology, valid acceptance criteria must be falsifiable and verifiable strictly within the scope of the ticket that owns them. When paired with vertical slicing, acceptance criteria start in a failing (red) state at the base commit and turn green solely through the changes introduced in that ticket.
