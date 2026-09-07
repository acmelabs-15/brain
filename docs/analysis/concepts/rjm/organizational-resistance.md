---
package: rjm
name: organizational resistance
slug: organizational-resistance
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# organizational resistance

## Definition — verbatim
> "| organizational resistance | Capture signal as a byproduct of work or require extra documentation? | `byproduct` / `mixed` / `manual` |" — .claude/skills/world-model-diagnostic/SKILL.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 90 | defined here | Evaluation principle assessing whether knowledge capture occurs naturally as a byproduct of work or imposes manual documentation burdens. |

## Consumes
Team documentation practices, developer workflows, and tool instrumentation.

## Produces
Friction classification (`byproduct`, `mixed`, or `manual`) indicating data capture sustainability.

## When applied
Applied during Five-Principle Evaluation in `world-model-diagnostic`.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A pragmatic diagnostic principle in rjm recognizing that telemetry systems requiring manual documentation inevitably suffer from developer resistance and data decay. Sustainable knowledge infrastructure succeeds by extracting signals as automatic byproducts of normal development activity.
