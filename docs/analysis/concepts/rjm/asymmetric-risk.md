---
package: rjm
name: asymmetric risk
slug: asymmetric-risk
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# asymmetric risk

## Definition — verbatim
> "security (reverted from d81f237 downgrade per adr-review debate - asymmetric risk)" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:138

## Also called — verbatim
> "asymmetric risk - security bugs are invisible during validation" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:148

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 138 | defined here | Rationale for retaining the security agent on the highest capability tier despite cost optimization pressures |

## Consumes
Risk assessments and failure mode analyses across system roles.

## Produces
Governance justifications preventing cost-cutting on critical safety and verification components.

## When applied
Applied during model tier allocation and tool permission reviews when evaluating security-critical roles.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Asymmetric risk is an architectural design principle recognized during ADR-039 review: because security defects remain silent and invisible during ordinary validation (unlike syntax errors or test failures that fail loudly), downgrading security review agents introduces catastrophic downside that outweighs token cost savings.
