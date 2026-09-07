---
package: rjm
name: ADR Exception Evaluation
slug: adr-exception-evaluation
kind: gate
package_phase: cross-phase
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

# ADR Exception Evaluation

## Definition — verbatim
> "When reviewing an ADR exception request, apply Chesterton's Fence analysis per ADR-053." — templates/agents/architect.shared.md:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 318 | defined here | Blocking evaluation protocol applying Chesterton's Fence analysis to proposed ADR exceptions. |
| templates/agents/architect.shared.md | 374 | defined here | Blocking evaluation protocol applying Chesterton's Fence analysis to proposed ADR exceptions. |

## Consumes
ADR exception requests, documented failed compliance attempts, and bounded scope specifications.

## Produces
Formal approval or rejection verdict for an exception amendment to an existing ADR.

## When applied
Applied when a developer or agent requests a deviation or exemption from an established architectural rule.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
ADR Exception Evaluation serves as a blocking governance gate preventing architectural erosion under the guise of convenience. Applying Chesterton's Fence, it mandates that an exception requester quote the original rule's rationale, document at least two genuine failed compliance attempts, bound the exception scope strictly, and define a reversibility plan. Without this gate, architectural consistency would degrade through unchecked ad-hoc exemptions.
