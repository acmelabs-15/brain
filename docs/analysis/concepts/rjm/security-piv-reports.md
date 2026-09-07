---
package: rjm
name: Security PIV reports
slug: security-piv-reports
kind: artifact
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

# Security PIV reports

## Definition — verbatim
(used, not defined)

> "Security PIV reports: 3 completed reports (PIV-PR60, SR-002, SR-003) as quality reference" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 231 | used here | Cited in baseline metrics as quality reference reports against which security agent detection fidelity is evaluated. |

## Consumes
Security analysis output, pull request audit findings, and vulnerability detection reviews.

## Produces
Documented post-implementation verification reports certifying PR security posture.

## When applied
Produced during security audits and consulted as baseline quality references during monitoring periods.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Security Post-Implementation Verification (PIV) reports serve as empirical audit artifacts evaluating the detection fidelity and thoroughness of security review agents. In ADR-039, completed PIV reports (such as PIV-PR60, SR-002, SR-003) establish a ground-truth baseline against which model downgrade risks can be empirically benchmarked to guarantee that vulnerability detection does not degrade.
