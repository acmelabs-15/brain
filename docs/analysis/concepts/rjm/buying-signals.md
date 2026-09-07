---
package: rjm
name: buying signals
slug: buying-signals
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# buying signals

## Definition — verbatim
> "rough solution (mockup, demo, concierge). Watch for buying signals: they ask" — .claude/skills/business-strategy/references/four-steps.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 42 | defined here | Concrete behavioral signals (price inquiry, timeline request, pilot offer) proving genuine commercial demand. |

## Consumes
Customer presentation of a rough solution prototype (mockup, demo, concierge).

## Produces
Verifiable behavioral evidence confirming that a prospect is commercially engaged rather than politely nodding.

## When applied
Observed during Customer Discovery when testing solution prototypes with prospective buyers.

## Sub-concepts
none

## Part of
customer-discovery, four-steps-to-the-epiphany

## Implementation status
clean

## Design notes
Buying signals are explicit behavioral actions by a prospective customer—such as requesting price, asking for delivery dates, or proposing a pilot project—that prove commercial intent. In Blank's framework, polite verbal encouragement is classified as failure; only concrete buying signals qualify as validation.
