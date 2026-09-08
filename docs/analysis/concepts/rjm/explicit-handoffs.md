---
package: rjm
name: Explicit handoffs
slug: explicit-handoffs
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

# Explicit handoffs

## Definition — verbatim
> "- **Explicit handoffs**: never let context decay across agents" — templates/agents/orchestrator.shared.md:321

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/orchestrator.shared.md | 321 | defines | Core reliability principle preventing context attenuation and unstated assumptions across agent delegations. |

## Consumes
Upstream findings, task objectives, constraints, and structured handoff contracts.

## Produces
Fully specified downstream delegation contexts with explicit inputs, constraints, and success criteria.

## When applied
Applied at every delegation boundary between the orchestrator and specialized subagents.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
An orchestration reliability pattern requiring that every handoff to a subagent explicitly supply all relevant context, constraints, and expected outputs rather than relying on shared conversational history. This prevents context decay and hallucination across agent transitions in multi-agent workflows.
