---
package: rjm
name: Rebase vs Merge
slug: rebase-vs-merge
kind: reference
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

# Rebase vs Merge

## Definition — verbatim
> "### Rebase vs Merge" — .claude/skills/git-advanced-workflows/SKILL.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 158 | defined here | Defined as the comparison section and decision table contrasting when to use rebase versus merge. |

## Consumes
Branch collaboration context and integration objectives.

## Produces
Architectural selection of rebase (for linear PR review) or merge (for shared branch integration).

## When applied
Consulted when deciding whether to integrate branch changes via history rewrite or merge commit.

## Sub-concepts
linear-history, rebasing-shared-branches

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Rebase vs Merge establishes the decision boundary between creating clean linear history for feature review (rebase) and preserving collaborative history on public shared branches (merge).
