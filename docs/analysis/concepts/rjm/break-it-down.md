---
package: rjm
name: Break It Down
slug: break-it-down
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Break It Down

## Definition — verbatim
> "### 3. Break It Down" — .claude/skills/context-optimizer/references/vibe-engineering.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 23 | defined here | Step 3 of the interaction protocol decomposing tasks into atomic steps with 5-10 minute horizons. |

## Consumes
Clarified goal and gathered context.

## Produces
Atomic plan with independent 5-10 minute steps and clear success criteria.

## When applied
Executed prior to implementation to prevent monolithic or uncontrolled executions. If a step is >30 minutes, break it down further.

## Sub-concepts
none

## Part of
7-step-agent-interaction-protocol, vibe-engineering

## Implementation status
defects: missing-path

## Design notes
The decomposition phase of the 7-Step Protocol that breaks complex work into independent 5-10 minute increments, capping any step longer than 30 minutes to preserve agent control and predictability.
