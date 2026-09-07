---
package: rjm
name: GPTZero
slug: gptzero
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md, sha256: 51df9b36a717cc5e44165fbb2928f27609494f6c5d6ec05165224a3f300d6b27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GPTZero

## Definition — verbatim
(used, not defined)

> "GPTZero measures the probability surface: how the model selects each token from its probability space." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md | 13 | used here | Table metric and detection tool used to benchmark human vs. machine text probability surfaces. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GPTZero is an external commercial AI detection service and metric cited in empirical benchmark documentation rather than an internal lifecycle concept.
