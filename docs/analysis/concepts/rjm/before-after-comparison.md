---
package: rjm
name: Before/after comparison
slug: before-after-comparison
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Before/after comparison

## Definition — verbatim
> "Before/after comparison**: Runs all scenarios against the prompt before and after the change, computes score delta" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 85 | defined here | Component definition describing differential evaluation of prompt versions to compute score deltas. |

## Consumes
The base prompt version (before edit), the candidate prompt version (after edit), and the scenario suite.

## Produces
Comparison dictionary containing before_score, after_score, score delta, regressions list, and pass/fail flips.

## When applied
Executed when modifying existing prompts to verify that changes improve or maintain performance without causing unintended regressions.

## Sub-concepts
regressions, has-improvement

## Part of
scenario-based-llm-evaluation

## Implementation status
defects: missing-path

## Design notes
A differential testing technique in rjm that benchmarks a modified prompt against its original unedited baseline on identical scenario fixtures. By computing explicit deltas between before and after scores, this technique provides empirical evidence of prompt efficacy and reliably isolates regressed scenarios.
