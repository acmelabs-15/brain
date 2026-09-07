---
package: rjm
name: PR Review
slug: pr-review
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: scripts/ci/write_pr_maintenance_summary.py, sha256: eecaebee965826cc090a8d784719c101978eb7ca5fc80e9543a715b9f93f3639}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR Review

## Definition — verbatim
> "PR Review: pr-comment-responder → (implementer | architect | security)" — .claude/agents/AGENTS.md:236-237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 236 | defined here | Defines the standard workflow routing PR review comments to specialized agents. |
| .github/scripts/invoke_pr_maintenance.py | 438 | used here | Handles pull request maintenance and review processing workflows. |
| scripts/ci/write_pr_maintenance_summary.py | 28 | used here | Generates summary reports for PR review maintenance workflows in CI. |
| src/claude/AGENTS.md | 236 | defined here | Canonical definition of the PR review workflow sequence across subagents. |
| templates/agents/comment-analyzer.shared.md | 122 | used here | Shared agent template defining comment analysis in PR review workflows. |

## Consumes
Pull request review comments, CI feedback, and automated review findings.

## Produces
Addressed review feedback, necessary code modifications, and architectural clarifications.

## When applied
Triggered upon receiving human or automated code review comments on an open pull request.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
PR Review is rjm's standard feedback processing workflow. It uses `pr-comment-responder` as an intelligent intake router that triages comments, directing routine code fixes to `implementer`, architectural disputes to `architect`, and potential security vulnerabilities to `security`.
