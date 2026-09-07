---
package: rjm
name: bot-batching protocol
slug: bot-batching-protocol
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# bot-batching protocol

## Definition — verbatim
> "bot-batching protocol (one batched push per review round)." — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 129 | defined here | PR interaction protocol restricting pushes to a single batched commit per bot review wave. |

## Consumes
Multi-bot review feedback across Copilot, Cursor, Gemini, and CodeRabbit.

## Produces
Consolidated review responses and reduced bot re-evaluation cycles.

## When applied
Applied during PR review response phases when interacting with automated review bots.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
The `bot-batching protocol` was instituted to combat bot review cascades, where incremental pushes trigger multiple concurrent bot evaluations with high overlap. By batching all fixes for a review cycle into a single push, developer and CI token costs are drastically reduced.
