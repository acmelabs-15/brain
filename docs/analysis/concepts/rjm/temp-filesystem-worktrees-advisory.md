---
package: rjm
name: Temp-filesystem Worktrees (advisory)
slug: temp-filesystem-worktrees-advisory
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Temp-filesystem Worktrees (advisory)

## Definition — verbatim
> "Temp-filesystem Worktrees (advisory)" — scripts/validation/pre_pr_sequence.py:246

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 246 | defined here | Advisory pre-PR validation gate inspecting machine state for worktrees under /tmp and low temporary filesystem space. |

## Consumes
Local machine filesystem `/tmp` directory and git worktree registrations.

## Produces
Advisory diagnostic report warning of orphaned worktrees or low disk space without failing pre-PR validation.

## When applied
During pre-PR validation sequence execution prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Advisory inspection gate alerting developers to orphaned worktrees and low disk space in `/tmp` without blocking pre-PR execution, separating environmental diagnosis from repository blocking rules.
