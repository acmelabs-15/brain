---
package: rjm
name: Architecture Reasoning Protocol
slug: architecture-reasoning-protocol
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architecture Reasoning Protocol

## Definition — verbatim
> "Before recommending any design or approving any ADR, reason step-by-step through these three questions in order." — .claude/agents/architect.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 53 | defined here | Mandatory three-question reasoning protocol required before approving any design or ADR. |
| templates/agents/architect.shared.md | 68 | defined here | Shared architect template enforcing step-by-step architectural reasoning. |

## Consumes
Proposed architectural designs, ADR drafts, or cross-cutting structural modifications.

## Produces
Architectural justifications addressing precedent ADRs, explicit quality attribute trade-offs, and two-year failure modes.

## When applied
Mandatory before recommending any design or approving an ADR for cross-cutting system concerns.

## Sub-concepts
adr-precedent-search

## Part of
architect-agent

## Implementation status
clean

## Design notes
Architecture Reasoning Protocol is a three-step evaluation discipline enforced on the architect agent. It requires searching for governing precedent ADRs, explicitly naming sacrificed quality attributes, and predicting concrete future failure modes, ensuring architecture recommendations are never superficial guesses.
