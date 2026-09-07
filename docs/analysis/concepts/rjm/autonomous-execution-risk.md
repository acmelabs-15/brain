---
package: rjm
name: autonomous-execution risk
slug: autonomous-execution-risk
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# autonomous-execution risk

## Definition — verbatim
> "description: PR review focused on autonomous-execution risk in agent prompts, skills, and hooks" — .claude/skills/review/references/agent-safety.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 5 | defined here | Focus area of the agent-safety PR review axis evaluating agent prompts, skills, and hooks. |

## Consumes
Modifications to agent prompts, tool permissions, skill workflows, and execution hooks.

## Produces
Risk identification, severity classifications, and blocking verdicts preventing unsafe agent autonomy expansions.

## When applied
Evaluated whenever changes affect how autonomous agents execute, invoke external tools, or clear guardrails.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
`autonomous-execution risk` is the core threat model pattern evaluated by the agent-safety review axis, identifying hazards where modifications to prompts, skills, or hooks could allow autonomous agents to perform unauthorized, destructive, or unmonitored actions.
