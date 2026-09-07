---
package: rjm
name: Context Retrieval
slug: context-retrieval
kind: phase
package_phase: rjm:session-start
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Retrieval

## Definition — verbatim
(used, not defined)

> "| 2 | Context Retrieval | BLOCKING | HANDOFF.md content in context |" — .agents/architecture/ADR-011-session-state-mcp.md:37

## Also called — verbatim
> "| Haiku 4.5 | 3 | memory, skillbook, context-retrieval |" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:126

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 37 | used here | Listed as Phase 2 in the session protocol phase table with requirement level BLOCKING. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 126 | used here | Lists context-retrieval as an automated retrieval agent role mapped to the Haiku 4.5 model tier. |

## Consumes
Session start initialization artifacts and repository state.

## Produces
Active agent context loaded with HANDOFF.md content and relevant prior session summaries.

## When applied
Enforced during session start (Phase 2) prior to session log creation.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
defects: missing-path, unfailable-gate, doc-drift, internal-contradiction

## Design notes
Phase 2 of the rjm session lifecycle protocol, functioning as a BLOCKING gate that requires the agent to verify that cross-session handoff documentation and state are loaded into the working context. In ADR-039, it also names a lightweight agent role assigned to Haiku 4.5 for high-volume retrieval tasks.
