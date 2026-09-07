---
package: rjm
name: test group
slug: test-group
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

# test group

## Definition — verbatim
> "The test group, when present, is read once at the end and never gates." — .agents/architecture/ADR-087-held-out-validated-improvement.md:155

## Also called — verbatim
`test` — .agents/architecture/ADR-087-held-out-validated-improvement.md:153

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 153 | defined here | Defined as an optional evaluation group held out until final reporting that never participates in gating decisions. |

## Consumes
Evaluation task set and split configuration specifying `--test-ratio > 0.0`.

## Produces
Unbiased final evaluation benchmark score for accepted artifacts.

## When applied
Partitioned at dataset setup and evaluated strictly once via `optimize-artifact.py report`.

## Sub-concepts
none

## Part of
decision-group

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An optional third partition of evaluation tasks held out through the entire optimization process and evaluated exactly once after all iterative decisions conclude. Because it never gates candidates, it remains free from adaptive selection bias.
