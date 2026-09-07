---
package: rjm
name: linear history
slug: linear-history
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

# linear history

## Definition — verbatim
(used, not defined)

> "Creating linear history for review" — .claude/skills/git-advanced-workflows/SKILL.md:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 164 | used here | Listed in Rebase vs Merge table as a primary justification for choosing rebase. |

## Consumes
A series of feature branch commits.

## Produces
A straight-line commit progression devoid of extraneous merge commits.

## When applied
Applied during feature preparation to facilitate simpler code review and automated bisecting.

## Sub-concepts
none

## Part of
rebase-vs-merge

## Implementation status
defects: orphan

## Design notes
linear history provides an uncluttered sequence of atomic commits, making code review straightforward and enabling predictable binary searches during regression triage.
