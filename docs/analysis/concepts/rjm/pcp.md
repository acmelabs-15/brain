---
package: rjm
name: PCP
slug: pcp
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PCP

## Definition — verbatim
> "Apply PCP framing to every counter:" — templates/agents/negotiation.shared.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/negotiation.shared.md | 113 | defines | Three-stage framing model (Perception, Context, Permission) applied to structure counter-proposals. |

## Consumes
Offer analysis, market context, precedent data, and deal terms.

## Produces
Persuasive counter-proposal narrative framing the proposal as inevitable and easy to accept.

## When applied
Applied during Step 3 (Design, Counter) of the RADAR negotiation protocol.

## Sub-concepts
none

## Part of
negotiation-theory

## Implementation status
clean

## Design notes
A three-tier influence framework (Perception: frame before anchoring; Context: normalize numbers with market data; Permission: give the other party an easy internal story to justify acceptance) that structures persuasive counter-proposals.
