---
package: rjm
name: Stop output
slug: stop-output
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Stop output

## Definition — verbatim
> "### Stop output" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 217 | defined here | Subsection header specifying the decision schema and turn-forcing semantics for agentStop hooks. |

## Consumes
Validation gate evaluations, task completion criteria, and post-turn invariants.

## Produces
JSON payload containing decision: "block" and accompanying prompt reason, or empty completion.

## When applied
Evaluated at agentStop or subagentStop events to decide whether an agent should be forced into another turn.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The standardized JSON structure emitted by terminal hook handlers in rjm that either permits an agent to complete its session or forces continuation turns with a supplied rationale.
