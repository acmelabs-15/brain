---
package: rjm
name: codeql-scan
slug: codeql-scan
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# codeql-scan

## Definition — verbatim
> "name: codeql-scan" — .claude/skills/codeql-scan/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 30 | used here | Designated as the active Claude Code skill for Tier 2 local on-demand security scanning. |
| .claude/skills/codeql-scan/SKILL.md | 2 | defined here | Frontmatter name identifying the CodeQL static analysis skill. |
| .claude/skills/security-scan/SKILL.md | 49 | used here | Recommended as the alternative skill when deep SAST analysis and data flow tracking are needed. |
| docs/codeql-architecture.md | 30 | used here | Diagrammed in Tier 2 local on-demand flow as developer and agent entry point. |
| docs/codeql-integration.md | 14 | used here | Documented as the primary local on-demand interface for running CodeQL. |
| docs/codeql-rollout-checklist.md | 24 | used here | Checked in rollout checklist under directory structure prerequisites. |

## Consumes
Repository source code, Python environment, optional --use-cache flag, and language specifications.

## Produces
SARIF output files, console vulnerability summaries, and exit codes signaling finding status.

## When applied
Invoked by developers or autonomous agents prior to PR submission when deep semantic security analysis is required.

## Sub-concepts
none

## Part of
multi-tier-strategy

## Implementation status
defects: always-failing-gate, doc-drift, missing-path, orphan, script-bug

## Design notes
A static analysis skill that wraps CodeQL execution into an agent-friendly CLI command with automatic language detection, cached database reuse, and structured SARIF reporting.
