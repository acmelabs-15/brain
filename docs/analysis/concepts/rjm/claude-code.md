---
package: rjm
name: Claude Code
slug: claude-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Code

## Definition — verbatim
(used, not defined)

> "## Claude Code" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:316

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 28 | used here | Identified as a primary deployment target utilizing hand-maintained agent prompts. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 30 | used here | Cites divergent native conventions between Claude Code and GitHub Copilot CLI. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 316 | used here | Documents native hook contracts, lifecycle events, and configuration properties of Claude Code. |
| .claude/skills/CLAUDE.md | 6 | used here | Directs harness-specific artifact generation and configuration to reference guidance for Claude Code. |
| .claude/skills/skillforge/scripts/init_skill.py | 3 | used here | Outlines skill scaffolding script targeting Claude Code and Codex formats. |
| .claude/skills/skillforge/scripts/quick_validate.py | 3 | used here | Provides fast validation for Claude Code skill structures. |
| .claude/skills/skillforge/scripts/validate-skill.py | 3 | used here | Implements full structural validation for Claude Code skill packages. |

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
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, script-bug

## Design notes
Claude Code is an external agent execution harness and CLI platform developed by Anthropic, classified as name-only per D-023.
