---
package: rjm
name: Worktree Recipe Destinations
slug: worktree-recipe-destinations
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

# Worktree Recipe Destinations

## Definition — verbatim
> "Worktree Recipe Destinations" — scripts/validation/pre_pr_sequence.py:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 240 | defined here | Pre-PR validation gate blocking recipes instructing worktree creation under /tmp or inside the checkout. |

## Consumes
Documentation, rule files, and scripts containing instructions for creating git worktrees.

## Produces
Pass/fail validation verdict ensuring no tracked documentation prescribes worktree destinations inside `/tmp` or repository roots.

## When applied
During pre-PR validation sequence execution prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Pre-PR governance gate enforcing universal rule MUST NOT 6 by scanning instructions and documentation to block worktree creation under `/tmp` or nested within the working tree.
