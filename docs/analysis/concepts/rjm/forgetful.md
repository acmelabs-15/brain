---
package: rjm
name: Forgetful
slug: forgetful
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Forgetful

## Definition — verbatim
(used, not defined)

> "Forgetful** | Vector database (HTTP MCP) | Semantic search, auto-linking, embeddings" — .agents/architecture/ADR-037-memory-router-architecture.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 106 | used here | Characterized as a local SQLite database providing supplementary semantic vector memory. |
| .agents/architecture/ADR-037-memory-router-architecture.md | 29 | used here | Described as an HTTP MCP vector database providing semantic search, auto-linking, and embeddings. |
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 38 | used here | Classified as the L2 semantic memory tier utilizing vector similarity. |
| .claude/agents/quality-auditor.md | 44 | used here | Linked to Memory Router tool surface as optional augmentation for semantic queries. |
| .claude/skills/pipeline-validator/SKILL.md | 20 | used here | Cautioned as an untrusted tool-returned data source requiring strict prompt injection defense. |
| .claude/skills/reflect/references/integration-and-design.md | 57 | used here | Contrasted against Serena to delineate canonical project records from local semantic index roles. |
| .claude/skills/world-model-diagnostic/SKILL.md | 97 | used here | Suggested as an optional semantic search tool to check for diagnostic context. |
| scripts/security/invoke_security_retrospective.py | 6 | used here | Targeted as semantic memory persistence store for recording false negative vulnerability findings. |
| templates/agents/quality-auditor.shared.md | 49 | used here | Configured in quality auditor template for supplementary semantic memory queries. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
Forgetful is an external vector memory service and MCP server tool providing local semantic search and embedding storage rather than an internal SDLC lifecycle concept.
