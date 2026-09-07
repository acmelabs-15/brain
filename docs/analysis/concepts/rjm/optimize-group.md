---
package: rjm
name: optimize group
slug: optimize-group
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

# optimize group

## Definition — verbatim
> "The author, human or agent, may read results on the optimize group." — .agents/architecture/ADR-087-held-out-validated-improvement.md:153-154

## Also called — verbatim
`opt` — .agents/architecture/ADR-087-held-out-validated-improvement.md:377

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 152 | defined here | Defined as the partition of evaluation tasks whose results the author or agent may freely inspect during iteration. |

## Consumes
Full evaluation task universe and splitting ratios.

## Produces
Exposed task subset and scores used for prompting and artifact optimization.

## When applied
Partitioned during evaluation task splitting via `optimize-artifact.py split`.

## Sub-concepts
none

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The training partition of tasks in an evaluation set. Unlike the selection group, outcomes and detailed diagnostic scores on the optimize group are made visible to the human or autonomous optimizer to guide prompt and code revisions without incurring consultation budget penalties.
