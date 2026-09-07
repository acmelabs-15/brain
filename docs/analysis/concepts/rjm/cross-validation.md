---
package: rjm
name: Cross-validation
slug: cross-validation
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

# Cross-validation

## Definition — verbatim
> "Cross-validation instead of a fixed split." — .agents/architecture/ADR-087-held-out-validated-improvement.md:749

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 749 | used here | Rejected as an alternative to fixed splits due to prohibitive scoring API costs and weakened tamper-evident fingerprinting. |

## Consumes
Evaluation benchmark tasks partitioned into rotating folds.

## Produces
Aggregated cross-fold validation metrics maximizing statistical power across limited task sets.

## When applied
Considered during evaluation harness design for small benchmark suites to reuse all samples for both optimization and validation.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented (explicitly rejected alternative in ADR-087; citing inventory card records defects: missing-path, doc-drift, internal-contradiction)

## Design notes
The statistical technique of partitioning data into rotating folds to use every item for both optimization and validation. In rjm's architecture, cross-validation was rejected because running K full scoring passes with LLM judges incurs excessive API costs and complicates cryptographic split fingerprinting, whereas a fixed held-out split can be immutably hashed and verified.
