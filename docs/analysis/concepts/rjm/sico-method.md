---
package: rjm
name: SICO method
slug: sico-method
kind: technique
package_phase: cross-phase
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

# SICO method

## Definition — verbatim
(used, not defined)

> "Focus on voice extraction (SICO method) over style instructions." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md | 62 | used here | Recommended as the preferred methodology for voice extraction rather than imposing synthetic style rules. |

## Consumes
Representative human writing samples or authentic voice artifacts.

## Produces
Extracted voice characteristics that capture authentic cadence without restrictive negative rules.

## When applied
When configuring persona or voice guidelines in prompt engineering workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The SICO method is prioritized over prescriptive style instructions in prompt design because extracting authentic voice attributes from real human writing avoids the subtraction trap and prevents compound regularities that trigger AI detectors.
