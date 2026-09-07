---
package: rjm
name: Risk Score
slug: risk-score
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk Score

## Definition — verbatim
> "**Risk Score** = Sum(Weight x Score)" — .claude/agents/security/references/dependency-risk-scoring.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 14 | defined here | Overall architectural risk score (7.2/10 HIGH) assigned to the framework extraction proposal. |
| .claude/agents/security/references/dependency-risk-scoring.md | 13 | defined here | Formula calculating total dependency risk by weighting maintenance, popularity, security history, lock-in, and licensing factors. |

## Consumes
Evaluated security factors (maintenance, vulnerability history, trust boundaries, permissions) and their assigned weights.

## Produces
Composite quantitative risk rating determining governance approvals and required mitigations.

## When applied
Calculated during architectural security reviews and third-party dependency evaluations.

## Sub-concepts
none

## Part of
dependency-risk-scoring

## Implementation status
defects: missing-path

## Design notes
`Risk Score` is a quantitative scoring technique used across rjm to standardize security assessments. In dependency evaluations, it computes a weighted sum across maintenance, CVE history, lock-in risk, and licensing to dictate whether a package is approved or requires an ADR. In architectural reviews, it provides an aggregate severity rating (e.g. 7.2/10) that governs whether an architecture is accepted or marked NEEDS-REVISION.
