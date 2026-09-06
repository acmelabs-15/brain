---
package: addy
name: Branch Naming
slug: branch-naming
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Branch Naming

## Definition — verbatim
> "### Branch Naming" — skills/git-workflow-and-versioning/SKILL.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 138 | defined here | Specifies conventional branch naming schemes (<type>/<short-description>) for git branches. |

## Consumes
Task type (feature, fix, chore, refactor) and brief task description.

## Produces
Standardized branch names (e.g. feature/task-creation, fix/duplicate-tasks).

## When applied
When creating any new git branch.

## Sub-concepts
none

## Part of
branching-strategy, git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Standardized branch naming conventions (feature/*, fix/*, chore/*, refactor/*) make repository state immediately comprehensible to human engineers and collaborating agents.
