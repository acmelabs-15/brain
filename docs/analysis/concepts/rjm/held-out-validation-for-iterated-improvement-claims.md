---
package: rjm
name: Held-Out Validation for Iterated Improvement Claims
slug: held-out-validation-for-iterated-improvement-claims
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

# Held-Out Validation for Iterated Improvement Claims

## Definition — verbatim
> "ADR-087: Held-Out Validation for Iterated Improvement Claims" — .agents/architecture/ADR-087-held-out-validated-improvement.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 12 | defined here | Architectural methodology establishing held-out evaluation requirements for iterated artifact improvement claims. |

## Consumes
Evaluation fixtures, task corpora, candidate artifact versions, and evaluation rubrics.

## Produces
Statistically rigorous delta evaluations verifying that prompt, rule, or agent modifications genuinely improve performance on unseen cases.

## When applied
Applied during iterative evaluator-optimizer cycles when modifying prompts, rules, or agent definitions before claiming general progress.

## Sub-concepts
pre-registered-withholding

## Part of
held-out-validated-improvement

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
Held-out validation for iterated improvement claims is an empirical testing methodology in rjm that prevents optimization loops from overfitting test sets. By partitioning evaluation fixtures into training and held-out validation subsets, it ensures reported performance improvements reflect generalized capability rather than memorization of specific benchmark examples.
