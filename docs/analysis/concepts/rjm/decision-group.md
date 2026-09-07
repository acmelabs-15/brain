---
package: rjm
name: decision group
slug: decision-group
kind: artifact
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

# decision group

## Definition — verbatim
(used, not defined)

> "### 1. The decision group is fixed before the first edit" — .agents/architecture/ADR-087-held-out-validated-improvement.md:150

## Also called — verbatim
`selection group` — .agents/architecture/ADR-087-held-out-validated-improvement.md:152

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 150 | defined here | Section heading establishing that the evaluation subset used for accept decisions is locked before editing. |

## Consumes
Partitioned evaluation task set and split configuration.

## Produces
Evaluation task subset reserved strictly for gating decisions.

## When applied
Established during initial evaluation dataset splitting prior to running an optimization loop.

## Sub-concepts
selection-group, test-group

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The evaluation subset reserved specifically for adjudicating candidate changes rather than guiding in-progress iterations. ADR-087 mandates that the decision group is pre-registered and fingerprinted before an author or agent begins modifications, ensuring candidates are tested on held-out tasks rather than overfitted to training data.
