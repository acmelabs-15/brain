---
package: rjm
name: Bonferroni
slug: bonferroni
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bonferroni

## Definition — verbatim
> "Bonferroni controls the family bar under arbitrary dependence between the comparisons, which is why it is used rather than a sharper independence-dependent correction, and it means raising the budget buys more looks at a stricter bar rather than a cheaper one." — .agents/architecture/ADR-087-held-out-validated-improvement.md:457-460

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 453 | used here | Multiple testing correction used to divide family error rate across maximum consultations. |
| scripts/eval/_optimizer_core.py | 729 | used here | Mathematical documentation justifying the Bonferroni correction under arbitrary dependence. |
| scripts/eval/optimize-artifact.py | 2454 | used here | Emits per-comparison threshold in gate decision payload to make the Bonferroni correction explicit. |

## Consumes
Family error rate (`--max-p`) and maximum consultation budget (`--max-consultations`).

## Produces
Per-comparison significance threshold (`max_p / max_consultations`).

## When applied
Enforced whenever `--max-p` is supplied during gate decision evaluation.

## Sub-concepts
none

## Part of
accept-decision

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The multiple testing correction chosen to control the family-wise error rate across sequential gate consultations. Because repeated evaluations against the same selection group are dependent, Bonferroni provides a rigorous bound without requiring independence assumptions, ensuring higher consultation budgets require stricter statistical significance.
