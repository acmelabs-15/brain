---
package: rjm
name: Delays
slug: delays
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Delays

## Definition — verbatim
> "Effects lag behind causes" — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 19 | defined here | Core concepts table entry defining delays where effects lag behind causes. |

## Consumes
Architecture, refactoring, or process decisions expecting immediate outcomes.

## Produces
Analysis of latent lags between implementation and observable consequences (such as silent technical debt accrual).

## When applied
During Challenge (Steps 5-6) when assessing timeline assumptions and red flags such as "We'll see results immediately."

## Sub-concepts
none

## Part of
strategic-thinking-systems-thinking

## Implementation status
defects: missing-path

## Design notes
A systems thinking heuristic warning critics against assuming instantaneous cause-and-effect, highlighting how temporal lags between action and consequence conceal negative feedback and systemic regressions.
