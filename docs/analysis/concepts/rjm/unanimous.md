---
package: rjm
name: unanimous
slug: unanimous
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

# unanimous

## Definition — verbatim
> "- unanimous: All specialists must agree" — scripts/consensus/__init__.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 10 | defined here | Documented as supported consensus algorithm requiring unanimous agreement. |

## Consumes
Agent votes and confidence scores across all participating specialists.

## Produces
ConsensusResult requiring zero objections from non-abstaining agents.

## When applied
Applied during high-criticality evaluations where any single objection by a specialist agent blocks approval.

## Sub-concepts
none

## Part of
consensus-protocol

## Implementation status
defects: orphan, script-bug

## Design notes
A consensus decision-making technique in rjm requiring agreement from all participating specialist agents, where a single objection prevents approval for critical architectural changes.
