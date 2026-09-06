---
package: matt
name: HITL
slug: hitl
kind: pattern
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# HITL

## Definition — verbatim
> "Every ticket carries a `wayfinder:<type>` label, and is either **[HITL](https://www.aihero.dev/ai-coding-dictionary/human-in-the-loop)** (worked with a human who speaks for themselves) or **[AFK](https://www.aihero.dev/ai-coding-dictionary/afk)**, driven by the agent alone." — docs/engineering/wayfinder.md:44

## Also called — verbatim
`human in the loop` — skills/engineering/wayfinder/SKILL.md:75

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 202 | defined here | Explains HITL classification requiring live human exchange for resolution |
| docs/engineering/wayfinder.md | 44 | defined here | Defines HITL ticket mode worked with an interactive human |
| external/wayfinder.md | 46 | defined here | Documents HITL ticketing in external wayfinder specification |
| skills/engineering/wayfinder/SKILL.md | 75 | defined here | Operational rule that HITL tickets resolve only through live exchange |

## Consumes
A decision ticket requiring human judgement (such as grilling or prototype evaluation)

## Produces
Interactive dialogue and human-ratified decisions

## When applied
When resolving wayfinder tickets where human taste, preference, or authority is required

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
The HITL (Human-in-the-Loop) classification explicitly mandates that interactive tickets can only be resolved through live dialogue with a real human, preventing agents from simulating human responses or answering their own questions.
