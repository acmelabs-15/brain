---
package: rjm
name: 7-Step Agent Interaction Protocol
slug: 7-step-agent-interaction-protocol
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

# 7-Step Agent Interaction Protocol

## Definition — verbatim
> "# Vibe Engineering: 7-Step Agent Interaction Protocol" — .claude/skills/context-optimizer/references/vibe-engineering.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 7 | defined here | The full 7-step sequence defining systematic agent interaction: Clarify, Gather, Break Down, Execute, Verify, Reflect, Document. |

## Consumes
Task requests, codebase context, and agent execution environment.

## Produces
Verified task completion, captured patterns, and documented skills.

## When applied
Standard interaction protocol governing end-to-end task execution by coding agents.

## Sub-concepts
clarify-the-goal, gather-context, break-it-down, execute-with-iteration, verify-the-result, reflect-on-the-process, document-the-learning

## Part of
vibe-engineering

## Implementation status
defects: missing-path

## Design notes
A 7-stage interaction protocol ensuring coding agents clarify requirements, gather essential context, decompose work into atomic units, iterate micro-steps, independently verify outcomes, reflect on hurdles, and document reusable patterns.
