---
package: rjm
name: Rebasing shared branches
slug: rebasing-shared-branches
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

# Rebasing shared branches

## Definition — verbatim
> "| Rebasing shared branches | Rewrites history for all collaborators | Merge for shared branches |" — .claude/skills/git-advanced-workflows/SKILL.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 170 | defined here | Defined in anti-patterns table as an anti-pattern that rewrites history for collaborators. |

## Consumes
A shared public or collaborative Git branch.

## Produces
Anti-pattern warning directing developers to use merge instead of rebase.

## When applied
Identified as a critical anti-pattern whenever branch history is shared with other developers.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: orphan

## Design notes
Rebasing shared branches is an anti-pattern that rewrites commit history for all collaborators, causing branch divergence and complex merge conflicts across the team.
