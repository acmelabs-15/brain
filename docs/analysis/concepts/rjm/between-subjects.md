---
package: rjm
name: between-subjects
slug: between-subjects
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# between-subjects

## Definition — verbatim
> "this ADR is between-subjects (agent vs. baseline)." — .agents/architecture/ADR-058-agent-eval-discipline.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 40 | defined here | Distinguishes ADR-058 agent-vs-baseline methodology as between-subjects testing across different prompts. |

## Consumes
Two distinct prompt treatments (specialized agent prompt vs. baseline prompt) evaluated on an identical fixture corpus.

## Produces
Comparative efficacy metrics and statistical deltas evaluating relative performance between prompt treatments.

## When applied
Applied during agent evaluation spikes to determine whether a specialized agent prompt provides value over a generic baseline.

## Sub-concepts
none

## Part of
agent-vs-baseline-efficacy, agent-eval-discipline

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An experimental design methodology adopted in ADR-058 to evaluate agent specialization. Unlike within-subjects before-after evaluation (which measures edits to the same prompt), between-subjects comparison tests two distinct prompt treatments against identical input fixtures to measure the net performance gain of specialization.
