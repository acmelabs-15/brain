---
package: rjm
name: GitHub Copilot CLI
slug: github-copilot-cli
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub Copilot CLI

## Definition — verbatim
(used, not defined)

> "## GitHub Copilot CLI" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 29 | used here | Listed as a primary agent deployment target generated from shared templates. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 30 | used here | Analyzes convention divergence between Claude Code and GitHub Copilot CLI. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 23 | used here | Documents official hook contracts and event lifecycles for GitHub Copilot CLI. |
| docs/getting-started.md | 39 | used here | References official installation and usage documentation for GitHub Copilot CLI. |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
GitHub Copilot CLI is an external command-line agent execution harness developed by GitHub, classified as name-only per D-023.
