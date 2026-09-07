---
package: rjm
name: repo-health gate
slug: repo-health-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health_report.py, sha256: 740b36ed275f8f61a8db2b37fa1c1fc738a7b050c8306cb0c00e5e8b1055fdbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# repo-health gate

## Definition — verbatim
> "What the repo-health gate tells the reader, and the verdict it says it about." — scripts/validation/check_repo_health_report.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 1 | defined here | Module docstring introducing the reporting and diagnosis layer of the repo-health validation gate. |

## Consumes
Git configuration across all scopes, worktree metadata, and index state.

## Produces
Diagnostic failure messages to stderr or health summaries with inspected scope counts to stdout, alongside process exit codes.

## When applied
Executed first in `pre-commit` and `pre-push` Git hooks ahead of other validation jobs, or invoked manually to diagnose repository corruption.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The repo-health gate verifies that Git configuration scopes do not flag a repository as bare when a working tree exists, diagnosing `core.bare` corruption early to prevent silent tool failures across git hooks and linked worktrees.
