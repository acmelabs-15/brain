---
package: rjm
name: Bisecting on dirty working tree
slug: bisecting-on-dirty-working-tree
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Bisecting on dirty working tree

## Definition — verbatim
> "| Bisecting on dirty working tree | Checkout fails with uncommitted changes | Commit or stash first |" — .claude/skills/git-advanced-workflows/SKILL.md:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 172 | defined here | Documented as an anti-pattern where uncommitted modifications cause Git checkout failures during bisect. |

## Consumes
A Git repository working tree with uncommitted or unstaged modifications during debugging.

## Produces
Aborted checkout operations and disrupted binary search state during commit isolation.

## When applied
Identified when an engineer or automated agent runs git bisect on a dirty working tree without stashing or committing first.

## Sub-concepts
none

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
An operational anti-pattern in git debugging where uncommitted local modifications prevent automated commit switching, leading to bisect failure unless working tree changes are committed or stashed beforehand.
