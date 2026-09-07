---
package: rjm
name: Clarify the Goal
slug: clarify-the-goal
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

# Clarify the Goal

## Definition — verbatim
> "### 1. Clarify the Goal" — .claude/skills/context-optimizer/references/vibe-engineering.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 13 | defined here | Step 1 of the interaction protocol establishing verifiable actual outcomes before taking action. |

## Consumes
Initial user prompt or task statement.

## Produces
Concrete, verifiable outcome statement with explicit success criteria.

## When applied
First step of any agent interaction. The goal must be verifiable.

## Sub-concepts
none

## Part of
7-step-agent-interaction-protocol, vibe-engineering

## Implementation status
defects: missing-path

## Design notes
The first step of the 7-Step Agent Interaction Protocol, establishing verifiable targets rather than vague directives ("make the error message actionable for a junior dev" instead of "fix the bug").
