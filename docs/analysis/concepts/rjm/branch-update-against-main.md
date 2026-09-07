---
package: rjm
name: Branch Update Against Main
slug: branch-update-against-main
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Branch Update Against Main

## Definition — verbatim
> "## Branch Update Against Main" — docs/autonomous-pr-monitor.md:724
> "If `mergeStateStatus == BEHIND` (or `BLOCKED` with no other obvious cause), the branch must be updated against `main` before the PR can land." — docs/autonomous-pr-monitor.md:726

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 724 | defined here | Defines the isolated git worktree workflow for updating a behind feature branch against latest main before landing. |

## Consumes
Pull request branch that is behind the target base branch (`mergeStateStatus == BEHIND`).

## Produces
Updated feature branch merged with main, pushed to origin, and refreshed mergeStateStatus.

## When applied
Applied whenever a pull request is behind main in repositories enforcing linear-history or fresh-branch requirements.

## Sub-concepts
none

## Part of
ready-to-merge-definition

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Branch Update Against Main specifies an isolated git worktree workflow to merge main into an outdated feature branch without interfering with active agent working trees or introducing untracked server-side merge commits.
