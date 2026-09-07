---
package: rjm
name: SparseValidate
slug: sparsevalidate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SparseValidate

## Definition — verbatim
> "`SparseValidate` is the Boolean, description-length-bounded one." — .agents/architecture/ADR-087-held-out-validated-improvement.md:733-734

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 733 | used here | Analyzed in alternatives considered as a finite-sample, description-length-bounded holdout verification mechanism. |

## Consumes
Candidate artifact improvement proposals, held-out evaluation sets, and query budget limits.

## Produces
A single Boolean bit indicating whether candidate performance exceeds an empirical threshold.

## When applied
Evaluated for adaptive data analysis gates where only a single threshold check bit is required per consultation.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented (unadopted alternative in ADR-087; citing inventory card records defects: missing-path, doc-drift, internal-contradiction)

## Design notes
A theoretical adaptive data analysis algorithm that provides finite-sample generalization guarantees by returning a single Boolean bit for threshold checks. In rjm's eval architecture, it is analyzed as the Boolean, description-length-bounded counterpart to `Thresholdout`, matching the exact Boolean accept/reject seam required by the held-out gate.
