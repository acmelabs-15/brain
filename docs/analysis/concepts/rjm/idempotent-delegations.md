---
package: rjm
name: Idempotent delegations
slug: idempotent-delegations
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Idempotent delegations

## Definition — verbatim
> "- **Idempotent delegations**: re-delegating the same task to the same agent should be safe" — templates/agents/orchestrator.shared.md:320

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/orchestrator.shared.md | 320 | defines | Core reliability principle requiring subagent delegations to be safely repeatable without harmful side effects. |

## Consumes
Task parameters, delegation contracts, and subagent state.

## Produces
Resilient delegation patterns permitting retries or re-delegations upon agent failure or ambiguous returns.

## When applied
Governs all subagent task delegation and retry logic within the orchestrator routing lifecycle.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
An orchestration reliability pattern dictating that dispatching the same task to a subagent multiple times must produce predictable, non-corrupting behavior. By ensuring delegations are idempotent, an orchestrator can safely retry failed or incomplete agent executions without risk of duplicated side effects or inconsistent workspace state.
