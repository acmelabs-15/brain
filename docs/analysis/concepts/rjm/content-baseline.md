---
package: rjm
name: content baseline
slug: content-baseline
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# content baseline

## Definition — verbatim
(used, not defined)

> "ADR-058 measured whether a specialized agent system prompt beats a naive content baseline (the content question)." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 26 | used here | Cited as the naive unspecialized control prompt used to verify whether specialized prompt content adds value. |

## Consumes
Unspecialized baseline prompt and domain evaluation fixtures.

## Produces
Control benchmark score for prompt evaluation.

## When applied
Used as the control condition in agent evaluation suites to measure marginal capability lift.

## Sub-concepts
none

## Part of
agent-eval-discipline, form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
A content baseline provides a naive, unprompted control condition in evaluations. Comparing specialized agents against a content baseline proves whether specific prompt instructions deliver measurable lift above baseline model intelligence.
