---
package: matt
name: merge/rebase
slug: merge-rebase
kind: technique
package_phase: matt:resolving-merge-conflicts
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge/rebase

## Definition — verbatim
(used, not defined)

> "of the merge/rebase. Check git history, and the conflicting files." — skills/engineering/resolving-merge-conflicts/SKILL.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/resolving-merge-conflicts/SKILL.md | 6 | used here | Identifies the active Git integration operation whose conflict state must be inspected. |

## Consumes
An in-progress Git merge or rebase operation with unmerged conflicting files.

## Produces
A completed merge commit or continuous rebase sequence with all conflicts resolved and automated checks passing.

## When applied
Triggered when git encounters conflicting changes between branches during merge or rebase.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Git branch integration operations (merging or rebasing) that result in file-level conflicts. The resolving-merge-conflicts skill provides a structured procedure to inspect conflict state, understand intent from commit messages and PRs, resolve hunks without inventing behavior, and verify with automated checks.
