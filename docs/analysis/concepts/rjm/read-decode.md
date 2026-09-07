---
package: rjm
name: Read, Decode
slug: read-decode
kind: phase
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Read, Decode

## Definition — verbatim
> "Extract every term. Do not summarize. List every commitment, condition, and contingency." — .claude/agents/negotiation.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 69 | defined here | Step 1 of the RADAR protocol, extracting all commitments, terms, and contingencies without summarizing. |

## Consumes
Raw offer text, legal documents, proposal emails, or contractual terms.

## Produces
Exhaustive inventory of commitments, conditions, contingencies, anchors, hedging words, urgency signals, and omissions.

## When applied
Executed as the initial step of the RADAR protocol upon receiving an offer.

## Sub-concepts
none

## Part of
radar

## Implementation status
clean

## Design notes
Read, Decode constitutes Step 1 of the RADAR protocol in rjm. It strictly forbids high-level summarization in favor of literal extraction of every term, anchor, and omission, ensuring that subtle contractual traps and unstated leverage points are surfaced before strategic analysis begins.
