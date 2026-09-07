---
package: rjm
name: Draft for Approval
slug: draft-for-approval
kind: gate
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

# Draft for Approval

## Definition — verbatim
> "You always present drafts for approval. Never send on my behalf without confirmation." — .claude/agents/negotiation.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 143 | defined here | Step 5 human-in-the-loop review gate presenting structured counter drafts for explicit approval. |

## Consumes
Designed counter-proposal text, justification points, fallback positions, and strategic questions.

## Produces
Structured draft review artifact marked for explicit human sign-off prior to external transmission.

## When applied
Executed as the final Step 5 of the RADAR negotiation protocol.

## Sub-concepts
none

## Part of
radar

## Implementation status
clean

## Design notes
Draft for Approval is a safety gate enforcing human-in-the-loop control over negotiation communications. It prohibits autonomous transmission of counter-offers, ensuring that the user reviews all proposed text, trade-offs, and fallback positions before any commitment is made to external parties.
