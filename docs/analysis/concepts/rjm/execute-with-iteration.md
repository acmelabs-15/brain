---
package: rjm
name: Execute with Iteration
slug: execute-with-iteration
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

# Execute with Iteration

## Definition — verbatim
> "### 4. Execute with Iteration" — .claude/skills/context-optimizer/references/vibe-engineering.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 27 | defined here | Step 4 of the interaction protocol running micro-iterations and immediate adjustments within atomic steps. |

## Consumes
Decomposed task step and current environment state.

## Produces
Executed modification and immediate per-step adjustments.

## When applied
Applied during step execution to fix issues locally before advancing. Iteration happens at the micro level (per step), not at the end.

## Sub-concepts
none

## Part of
7-step-agent-interaction-protocol, vibe-engineering

## Implementation status
defects: missing-path

## Design notes
The execution phase of the 7-Step Protocol emphasizing micro-level iteration where errors are adjusted immediately within the current step rather than deferred to end-of-task review.
