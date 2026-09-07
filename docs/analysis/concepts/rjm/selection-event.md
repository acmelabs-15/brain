---
package: rjm
name: selection event
slug: selection-event
kind: pattern
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

# selection event

## Definition — verbatim
> "Each accept decision against a selection group is a selection event on that group. Enough of them and the selection group is an optimize group that nobody labelled." — .agents/architecture/ADR-087-held-out-validated-improvement.md:175-177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 175 | defined here | Formulates repeated accept decisions as statistical selection events that degrade holdout independence. |

## Consumes
Decision queries and candidate evaluations directed against the held-out selection group.

## Produces
Statistical selection pressure and cumulative consultation charges against the ledger.

## When applied
Accrues on every invocation of `optimize-artifact.py gate` evaluating selection group results.

## Sub-concepts
none

## Part of
consultation-budget

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The conceptual model underpinning consultation budgeting. In iterative optimization, every evaluation query against a validation group leaks information back into the candidate generation process. Treating each gate invocation as a selection event formalizes why consultation counts must be strictly capped.
