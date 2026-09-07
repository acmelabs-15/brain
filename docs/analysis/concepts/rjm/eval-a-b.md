---
package: rjm
name: Eval A/B
slug: eval-a-b
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Eval A/B

## Definition — verbatim
(used, not defined)

> "| Eval A/B | Did a prompt or agent change alter behavior, measurably? |" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 34 | used here | Cataloged in the Instrument Index as the diagnostic technique for measuring behavioral deltas caused by prompt or agent alterations. |

## Consumes
Scenario test suites, baseline prompt/agent configurations, and candidate configurations.

## Produces
Comparative evaluation metrics measuring behavioral and output deltas between prompt variants.

## When applied
Applied when revising system prompts or agent instructions to measure behavioral impacts quantitatively.

## Sub-concepts
none

## Part of
eval-harness

## Implementation status
defects: unfailable-gate, other

## Design notes
A side-by-side comparative evaluation technique used to assess prompt alterations against frozen baselines. By executing scenarios across both variants, it produces measurable activation and behavior scores to verify that improvements do not introduce behavioral regressions.
