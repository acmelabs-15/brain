---
package: rjm
name: Memory Router
slug: memory-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Router

## Definition — verbatim
> "Implement a **Memory Router** that provides:" — .agents/architecture/ADR-037-memory-router-architecture.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-037-memory-router-architecture.md | 48 | defined here | Declares the architectural implementation of the Memory Router unified interface. |
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 66 | used here | Positions Memory Router as the intermediary routing layer for facts, patterns, and reflexion rules. |
| .claude/agents/AGENTS.md | 249 | used here | Specifies Memory Router CLI command syntax for cross-agent memory searches. |
| .claude/agents/backlog-generator.md | 38 | used here | Instructs backlog-generator agent to use Memory Router for unified search across Serena and Forgetful. |
| .claude/agents/devops.md | 30 | used here | Details devops agent memory search procedures utilizing Memory Router. |
| .claude/agents/high-level-advisor.md | 81 | used here | Mandates Memory Router search for historical advisory context prior to reasoning. |
| .claude/agents/independent-thinker.md | 45 | used here | Directs independent-thinker agent to retrieve memory context via Memory Router. |
| .claude/agents/merge-resolver.md | 43 | used here | Configures merge-resolver agent to leverage Memory Router during conflict resolution. |
| .claude/agents/qa.md | 58 | used here | Instructs QA agent to query past test failures and quality criteria through Memory Router. |
| .claude/agents/quality-auditor.md | 44 | used here | Configures quality-auditor agent to query previous audit findings via Memory Router. |
| .claude/agents/retrospective.md | 49 | used here | Requires retrospective agent to search historical retrospectives via Memory Router. |
| templates/agents/independent-thinker.shared.md | 113 | used here | Directs shared independent-thinker template to use Memory Router for context retrieval. |
| templates/agents/quality-auditor.shared.md | 49 | used here | Specifies Memory Router search invocation in shared quality auditor template. |

## Consumes
Agent queries, Serena lexical/semantic records, and Forgetful vector memories.

## Produces
Standardized, ranked context excerpts and memory search results.

## When applied
Triggered by agents during session startup and before task analysis to fulfill the memory-first mandate.

## Sub-concepts
tiered-memory-index

## Part of
memory-router-architecture, memory-first-architecture

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A unified memory routing subsystem providing a single query interface across heterogeneous memory systems. By abstracting Serena and Forgetful behind a common CLI and Python wrapper, it enables agents to search repository knowledge without coupling to specific storage technologies.
