---
package: rjm
name: benchmark-models
slug: benchmark-models
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# benchmark-models

## Definition — verbatim
(used, not defined)

> "benchmark-models" — scripts/validation/skill_contract_test_baseline.txt:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_contract_test_baseline.txt | 8 | defined here | Listed in baseline ratchet of skills documenting exit-code contracts without binding tests. |

## Consumes
Standardized evaluation prompts, benchmark task suites, model candidate endpoints, and execution configs.

## Produces
Quantitative performance metrics, latency measurements, accuracy benchmarks, and cost comparisons.

## When applied
Executed when evaluating or comparing LLM models, configuring model tiering, or selecting default models for agents.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
clean

## Design notes
`benchmark-models` defines benchmarking procedures and automation scripts to systematically assess model capabilities, speed, and cost efficiency across standardized tasks.
