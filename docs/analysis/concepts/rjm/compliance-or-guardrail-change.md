---
package: rjm
name: Compliance or guardrail change
slug: compliance-or-guardrail-change
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Compliance or guardrail change

## Definition — verbatim
> "Compliance or guardrail change (governance, security gate, validator)" — docs/when-to-use.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 28 | defined here | High-risk task shape for governance, security gates, and validators requiring the full lifecycle chain. |

## Consumes
Governance policies, security guardrails, hook scripts, or validation contracts.

## Produces
Full lifecycle verification with strict contract pinning during /spec.

## When applied
Applied when modifying governance rules, security gates, pre-commit hooks, or CI validators.

## Sub-concepts
none

## Part of
fitness-table

## Implementation status
clean

## Design notes
A high-risk task shape in rjm where modifying governance or validation gates mandates running the complete lifecycle—especially /spec—to avoid confident incorrectness and prolonged review churn.
