---
package: addy
name: Subagents cannot spawn other subagents
slug: subagents-cannot-spawn-other-subagents
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Subagents cannot spawn other subagents

## Definition — verbatim
> "Subagents cannot spawn other subagents" — references/orchestration-patterns.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 145 | used here | Platform-enforced constraint prohibiting subagents from spawning nested subagents, eliminating deep persona trees |

## Consumes
Platform execution environment constraints

## Produces
Strictly shallow, single-level subagent hierarchies

## When applied
Enforced continuously by the platform during subagent invocation

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
This platform-enforced rule prevents subagents from creating recursive or nested subagent instances. By hard-limiting invocation depth to one level, it mechanically enforces addy's governing rule, preventing developers from building complex persona trees that dilute context and multiply token costs.
