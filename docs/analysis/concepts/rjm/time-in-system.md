---
package: rjm
name: time in system
slug: time-in-system
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

# time in system

## Definition — verbatim
> "| time in system | How long has relevant data been flowing through anything durable? | `running` / `starting` / `not started` |" — .claude/skills/world-model-diagnostic/SKILL.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 91 | defined here | Evaluation principle measuring how long operational data has flowed through durable systems to establish baseline maturity. |

## Consumes
Historical logs, durable databases, and system operational telemetry.

## Produces
Maturity status (`running`, `starting`, or `not started`) determining readiness for automated reasoning.

## When applied
Assessed during Five-Principle Evaluation in `world-model-diagnostic`.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A maturity principle in rjm asserting that effective autonomous systems require data history accumulated over sufficient duration to capture seasonality, edge cases, and long-tail operational realities. Automating decisions over newly initiated data pipelines creates brittle models exposed to distribution drift.
