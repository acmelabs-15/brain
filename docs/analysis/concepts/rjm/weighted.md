---
package: rjm
name: weighted
slug: weighted
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

# weighted

## Definition — verbatim
> "- weighted: Expertise-weighted voting (agent type and domain)" — scripts/consensus/__init__.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 8 | defined here | Documented as supported consensus algorithm for expertise-weighted voting. |

## Consumes
Agent votes, confidence scores, and domain-specific agent expertise weights.

## Produces
ConsensusResult based on weighted vote totals and normalized confidence.

## When applied
Applied when specialists debate decisions where certain agent roles possess greater domain expertise (e.g. architect on design, security on auth).

## Sub-concepts
none

## Part of
consensus-protocol

## Implementation status
defects: orphan, script-bug

## Design notes
A consensus decision-making technique in rjm that scales agent votes by domain expertise weights, giving higher authority to relevant specialist roles during multi-agent impact analysis.
