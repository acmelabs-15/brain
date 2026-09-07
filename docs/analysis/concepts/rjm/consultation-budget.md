---
package: rjm
name: consultation budget
slug: consultation-budget
kind: gate
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

# consultation budget

## Definition — verbatim
> "The consultation budget will sometimes stop a loop that was making genuine progress. That is the cost of the guarantee; an unbudgeted loop cannot distinguish progress from selection." — .agents/architecture/ADR-087-held-out-validated-improvement.md:547-549

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 547 | defined here | Stated as the necessary limiting mechanism that bounds decisions against held-out groups to prevent overfitting. |

## Consumes
Pre-allocated consultation cap (`--max-consultations`), selection task membership digest, and disk-backed ledger.

## Produces
Enforced limit on gating evaluations and automatic refusal when budget is exhausted.

## When applied
Enforced on every gate decision attempt across `optimize-artifact.py gate` invocations.

## Sub-concepts
selection-event

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An unforgeable budget bounding the maximum number of times an optimizer may query held-out evaluation tasks. Keyed by the SHA-256 digest of sorted held-out task IDs in a durable state ledger, it prevents infinite iteration and protects statistical validity.
