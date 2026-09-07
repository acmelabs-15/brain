---
package: rjm
name: Serena
slug: serena
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/commands/context-hub-setup.md, sha256: df6e2fd17f0cae46d889f77dc4c7169422c86095ece9aace0c584738b429522f}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
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

# Serena

## Definition — verbatim
(used, not defined)

> "Serena** - Symbol-level code analysis" — .claude/commands/context-hub-setup.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 101 | used here | Designated as the canonical repository memory layer persisting Git-synchronized markdown notes. |
| .agents/architecture/ADR-037-memory-router-architecture.md | 28 | used here | Profiled as the primary file-based memory store containing 460+ memories with lexical search. |
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 37 | used here | Mapped as the L1 lexical memory tier using keyword matching. |
| .claude/agents/quality-auditor.md | 44 | used here | Integrated into the Memory Router tool surface for unified search across memory tiers. |
| .claude/commands/context-hub-setup.md | 13 | used here | Identified as an essential plugin tool providing symbol-level code analysis. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 419 | used here | Exposes CLI argument flag to leverage Serena for symbol extraction. |
| .claude/skills/pipeline-validator/SKILL.md | 20 | used here | Highlighted in prompt boundary guidance as an untrusted tool-returned data source. |
| .claude/skills/reflect/references/decision-tree-and-examples.md | 25 | used here | Evaluated in reflection decision tree to choose between MCP write and Git fallback. |
| .claude/skills/reflect/references/integration-and-design.md | 33 | used here | Documented with integration examples for writing memory files via Serena MCP. |
| .claude/skills/world-model-diagnostic/SKILL.md | 97 | used here | Recommended as the project memory layer to query during orientation phase. |
| scripts/security/invoke_security_retrospective.py | 6 | used here | Cited as destination project memory store for recording false negative security findings. |
| templates/agents/quality-auditor.shared.md | 49 | used here | Incorporated into quality auditor prompt template as unified search target. |

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
Serena is an external MCP service and tool identifier providing symbol-level code analysis and markdown memory persistence rather than an operational lifecycle concept.
