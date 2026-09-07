---
package: rjm
name: false PASS
slug: false-pass
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# false PASS

## Definition — verbatim
> "Optimize for **lowest false PASS** (missing issues that should be caught)." — .agents/architecture/ADR-021-model-routing-strategy.md:34

## Also called — verbatim
> "2. **False PASS** - Allows problematic PRs to merge" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:29

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 34 | defined here | Named as primary decision driver for model routing strategy to prevent compounding missed issues in parallel reviews. |
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 29 | defined here | Identified as a primary risk where prompt changes inadvertently allow problematic PRs to merge through quality gates. |

## Consumes
Pull request evaluation inputs, modified files, and AI review gate prompt execution.

## Produces
An erroneous passing verdict or unflagged regression allowing defective code to merge.

## When applied
Occurs when a quality gate prompt, evaluation model, or context window fails to detect an issue it was responsible for identifying.

## Sub-concepts
none

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path

## Design notes
A quality gate failure mode where non-compliant, buggy, or insecure pull requests receive an erroneous PASS verdict. In rjm's multi-agent architecture, false passes are treated as the most hazardous failure class because missed defects compound across downstream agents and workflows. Architectural policy explicitly prioritizes minimizing false passes over cost, latency, or false warnings.
