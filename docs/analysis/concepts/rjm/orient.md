---
package: rjm
name: Orient
slug: orient
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Orient

## Definition — verbatim
> "| Orient | Analyze and synthesize | What does it mean? How does it fit context? |" — .claude/skills/analyze/references/strategy-ooda-loop.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/strategy-ooda-loop.md | 18 | defined here | Second stage of the OODA loop focusing on analyzing and synthesizing observed information against context. |
| .claude/skills/planner/references/strategy-ooda-loop.md | 18 | defined here | Planning loop phase where information is synthesized to build mental models and evaluate constraints. |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 18 | defined here | Pre-mortem assessment phase analyzing prospective risk vectors and synthesizing failure scenarios. |

## Consumes
Raw observations, data, codebase state, telemetry signals, metrics.

## Produces
Contextual understanding, mental models, synthesized insights, risk assessments.

## When applied
Following the Observe stage whenever incoming observations must be contextualized and interpreted before making decisions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Orient is the pivotal second stage of the OODA loop in rjm's strategic decision framework. It transforms raw, unprocessed observations into actionable context and mental models, bridging observation and decision-making. Without an explicit Orient phase, agents risk either "shooting from the hip" (acting without analysis) or "analysis paralysis" (looping endlessly without committing to decisions).
