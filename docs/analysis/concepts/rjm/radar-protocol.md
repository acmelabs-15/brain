---
package: rjm
name: RADAR protocol
slug: radar-protocol
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RADAR protocol

## Definition — verbatim
> "| **negotiation** | Offer analysis and counter-proposals | Value-gap analysis with RADAR protocol | both |" — README.md:418

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 418 | defined here | Agent catalog describes negotiation agent using RADAR protocol for value-gap analysis and counter-proposals. |

## Consumes
Incoming commercial or project proposals, contract offers, and baseline requirements.

## Produces
Value-gap evaluations, strategic counter-proposals, and negotiation rationale.

## When applied
Applied by the negotiation agent when analyzing counter-party offers and preparing structured counter-positions.

## Sub-concepts
none

## Part of
negotiation

## Implementation status
defects: missing-path, doc-drift

## Design notes
RADAR protocol is a structured negotiation and offer analysis methodology employed by rjm's negotiation agent to evaluate value gaps and generate rigorous counter-proposals.
