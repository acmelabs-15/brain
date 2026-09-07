---
package: rjm
name: effort tier
slug: effort-tier
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# effort tier

## Definition — verbatim
> "The load-bearing control is believed to be the **effort tier**, not the prompt." — .claude/skills/context-optimizer/references/model-context-doctrine.md:164-165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 164 | defined here | Identified as the primary operational tuning parameter (e.g. Medium) governing model behavior in GPT-5.6 Sol rather than prompt instruction rules. |

## Consumes
Harness configuration settings and model inference parameters.

## Produces
Calibrated reasoning depth and token expenditure per task.

## When applied
Applied when configuring inference settings for reasoning models (e.g. setting Medium effort for routine GPT-5.6 Sol tasks).

## Sub-concepts
none

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
An inference configuration control that modulates model reasoning effort and depth directly at the harness level, functioning as the primary behavioral control for models that resist prompt-based constraint adjustments.
