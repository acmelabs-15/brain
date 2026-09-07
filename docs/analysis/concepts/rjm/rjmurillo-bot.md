---
package: rjm
name: rjmurillo-bot
slug: rjmurillo-bot
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/github_core/worktree_identity.py, sha256: 36700625c87e8d563611dada7ed338508e8cb01b6b192a04506887501a31b8f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rjmurillo-bot

## Definition — verbatim
(used, not defined)

> "_BOT_NAME = \"rjmurillo-bot\"" — scripts/github_core/worktree_identity.py:26

## Also called — verbatim
> "``rjmurillo-bot`` service account (id 250269933) with its own API budget." — scripts/ci/check_bot_identity.py:4

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_bot_identity.py | 4 | used here | Dedicated bot service account (id 250269933) configured for automated CI actions and GitHub API interactions. |
| scripts/github_core/worktree_identity.py | 26 | defined here | Constant identifying the designated git operator identity for worktree commits to prevent placeholder leakage. |

## Consumes
Dedicated bot personal access token (`BOT_PAT`) and configured git credentials.

## Produces
Automated Git commits, PR comments, and workflow dispatches signed under the verified service account identity.

## When applied
Used for all non-interactive CI operations, automated PR updates, and worktree commits.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`rjmurillo-bot` is the designated machine service account role in rjm used for executing automated CI/CD operations, agent actions, and worktree commits under an isolated API budget and distinct git author identity.
