---
package: matt
name: post-completion steps
slug: post-completion-steps
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# post-completion steps

## Definition — verbatim
> "The visible steps still ahead (the **post-completion steps**) supply the pull; the criterion's clarity is the resistance." — skills/productivity/writing-for-agents/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 49 | defined here | Subsequent sequential steps visible in context that exert psychological pull toward rushing the current step. |

## Consumes
A sequence of upcoming steps visible within the active context window.

## Produces
Premature completion risk that must be countered by sharp completion criteria or context isolation.

## When applied
Identified when analyzing multi-step workflows for premature completion vulnerabilities.

## Sub-concepts
none

## Part of
steps-and-completion-criteria

## Implementation status
clean

## Design notes
Explains the failure mode of premature completion. When subsequent steps remain visible in the context window, the agent's attention is pulled toward concluding the task rather than thoroughly executing the current step, requiring boundary sharpening or context separation.
