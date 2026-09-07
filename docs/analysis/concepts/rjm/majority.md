---
package: rjm
name: majority
slug: majority
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# majority

## Definition — verbatim
> "- majority: Simple majority voting" — scripts/consensus/__init__.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 7 | defined here | Documented as supported consensus algorithm for simple majority voting. |

## Consumes
Agent votes with positions (approve, reject, abstain) and confidence scores.

## Produces
ConsensusResult indicating whether approvals exceeded rejections.

## When applied
Applied when resolving multi-agent deliberations where a simple majority vote determines the consensus outcome.

## Sub-concepts
none

## Part of
consensus-protocol

## Implementation status
defects: orphan, script-bug

## Design notes
A consensus decision-making technique in rjm that computes outcomes based on simple majority approval among participating specialist agents, ensuring deterministic resolution of disagreements without manual intervention.
