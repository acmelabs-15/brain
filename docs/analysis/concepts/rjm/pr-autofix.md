---
package: rjm
name: pr-autofix
slug: pr-autofix
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
  - {path: scripts/github_core/placeholder_identity.py, sha256: 6e0246dd64011fdce3eeb1e8094471fecd3e2f8d6855899940acc57fd7447f1c}
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-autofix

## Definition — verbatim
(used, not defined)

> "The `pr-autofix` workflow (`.claude/commands/pr-autofix.md`, `docs/autonomous-pr-monitor.md`) fixes review feedback on open PRs." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 26 | used here | Cited as the automated PR remediation workflow requiring branch-ownership lease coordination. |
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 61 | used here | Listed in caller table as local agent command requiring holder lease identity after migration. |
| scripts/github_core/placeholder_identity.py | 1 | used here | Cited in module docstring as target worktree environment protected from placeholder identities. |
| scripts/validation/check_skill_contract_tests.py | 9 | used here | Cited as historical example of exit-code semantic drift under issue #2308. |

## Consumes
Pull request review comments, CI test failure diagnostics, and git branch working trees.

## Produces
Automated fix commits, updated branch heads, and pull request response comments.

## When applied
Triggered when review comments or test failures require automated iterative remediation on pull requests.

## Sub-concepts
pr-autofix-branch-ownership-lease, force-push-safety-sha-gate

## Part of
autonomous-pr-monitor

## Implementation status
out-of-scope; defects: doc-drift, internal-contradiction, missing-path, orphan

## Design notes
An automated remediation command and background monitoring workflow that resolves review comments and test failures on pull requests. While excluded from the core development lifecycle scope as specialized PR automation tooling, its concurrency constraints drive the branch-ownership lease architecture and git push safety gates across the repository.
