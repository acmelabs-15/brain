---
package: rjm
name: agent-discriminating fixtures
slug: agent-discriminating-fixtures
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent-discriminating fixtures

## Definition — verbatim
> "agent-discriminating fixtures" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 221 | defined here | Defined in sub-task T4-4 acceptance criteria requiring evaluation test cases whose correct response demands specialized agent prompt knowledge. |

## Consumes
agent-prompt

## Produces
eval-corpus

## When applied
> "where the correct response requires knowledge only the agent's system prompt encodes" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:221

## Sub-concepts
none

## Part of
agent-eval-harness

## Implementation status
defects: doc-drift

## Design notes
Evaluation test fixtures specifically constructed so that a correct response requires domain framing, threat modeling, or escalation policies that only the evaluated agent's specialized prompt contains. These fixtures ensure the evaluation harness measures genuine capability improvements rather than generic foundation model capabilities.
