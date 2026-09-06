---
package: matt
name: three-dot
slug: three-dot
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# three-dot

## Definition — verbatim
> "No. It diffs `<fixed-point>...HEAD`, three-dot, which is measured from the merge-base and excludes staged and working-tree changes." — docs/engineering/code-review.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 76 | defined here | Explains the git diff syntax used by code-review, highlighting that only committed changes from the merge base are evaluated. |
| external/code-review.md | 59 | used here | Explains in external documentation why uncommitted working tree changes are invisible to review. |

## Consumes
Committed git tree state and a fixed reference point (e.g. main or branch point).

## Produces
Git diff calculated from the common merge-base ancestor up to HEAD.

## When applied
Used during git diff extraction in the first step of `/code-review`.

## Sub-concepts
none

## Part of
code-review

## Implementation status
defects: cross-file-contradiction (excludes unstaged/uncommitted changes, causing implement to fail if it reviews before committing)

## Design notes
Git diff syntax (`<fixed-point>...HEAD`) comparing HEAD against the merge-base of the branch rather than the tip of the fixed point. Excludes uncommitted working changes, requiring developers to commit before running review.
