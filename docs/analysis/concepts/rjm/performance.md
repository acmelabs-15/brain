---
package: rjm
name: Performance
slug: performance
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Performance

## Definition — verbatim
> "Linear satisfaction with investment | Measure and optimize" — .claude/agents/roadmap.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 48 | defined here | Defined in the KANO model table as features providing linear satisfaction with investment. |

## Consumes
Quantitative metrics, system benchmarks, and iterative optimization targets.

## Produces
Prioritized optimization targets where incremental investment yields proportional satisfaction gains.

## When applied
Applied when evaluating features where user satisfaction scales linearly with execution speed, efficiency, or capacity.

## Sub-concepts
none

## Part of
- kano-model

## Implementation status
clean

## Design notes
Performance represents features in rjm's KANO framework where user satisfaction is directly and linearly proportional to investment. These features warrant ongoing measurement and systematic optimization, providing steady returns as long as incremental gains justify engineering effort.
