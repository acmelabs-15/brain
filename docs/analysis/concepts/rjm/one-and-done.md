---
package: rjm
name: One-and-done
slug: one-and-done
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# One-and-done

## Definition — verbatim
> "| One-and-done | No iteration | Schedule re-observation |" — .claude/skills/analyze/references/strategy-ooda-loop.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/strategy-ooda-loop.md | 59 | defined here | Anti-pattern of treating execution as a terminal single pass without scheduling re-observation or iterative feedback. |

## Consumes
Single execution completion without subsequent verification or feedback loops.

## Produces
Unverified state, undetected regressions, false sense of completion, drift.

## When applied
Encountered when workflows treat task execution as a linear waterfall rather than an iterative feedback cycle.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
One-and-done is an anti-pattern in iterative execution where an agent or practitioner executes an action and assumes the task is complete without observing the post-execution state. In rjm's OODA-driven methodology, the loop is continuous: every action must be followed by renewed observation to verify expected outcomes and detect emergent defects.
