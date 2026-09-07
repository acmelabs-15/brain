---
package: rjm
name: feature branches
slug: feature-branches
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

# feature branches

## Definition — verbatim
(used, not defined)

> "Use when managing complex Git histories, collaborating on feature branches, or recovering from repository issues." — .claude/skills/git-advanced-workflows/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 4 | used here | Named in skill description as the collaborative branch context for advanced Git operations. |

## Consumes
Base branch commits and task scope.

## Produces
Isolated development branch line for incremental feature work before pull request creation.

## When applied
Applied whenever building new capabilities or making non-trivial modifications in isolation from the main branch.

## Sub-concepts
none

## Part of
multi-branch-development

## Implementation status
defects: orphan

## Design notes
Feature branches decouple ongoing implementation from production branches, providing an isolated surface where commits can be freely created, rebased, and squashed prior to peer review.
