---
package: rjm
name: model drift detection
slug: model-drift-detection
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

# model drift detection

## Definition — verbatim
> "Model drift detection**: LLM interpretation can shift across model versions without any prompt change" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 39 | defined here | Decision driver identifying the need to detect behavioral shifts across LLM version updates without prompt modifications. |

## Consumes
Versioned prompt files, pinned model versions, and evaluation test scenario suites.

## Produces
Regression alerts and test failure verdicts triggered by model interpretation drift.

## When applied
Triggered after model provider version bumps or quarterly evaluations to verify that unchanged prompts continue to behave correctly.

## Sub-concepts
none

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
An architectural evaluation practice in rjm designed to detect behavioral shifts caused by underlying model updates rather than prompt code changes. Because LLM outputs can drift across model versions without any changes to the prompt text, periodic or post-bump evaluations ensure that existing behavioral invariants and assertions remain valid over time.
