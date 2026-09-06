---
package: addy
name: git worktrees
slug: git-worktrees
kind: name-only
package_phase: none
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

# git worktrees

## Definition — verbatim
(used, not defined)
> "For parallel AI agent work, use git worktrees to run multiple branches simultaneously:" — skills/git-workflow-and-versioning/SKILL.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 149 | used here | Recommends git worktrees as the mechanism for running multiple concurrent agent branches. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Git command-line feature and repository capability enabling multiple working trees attached to the same repository, cited here as tooling for parallel agent execution rather than an independent lifecycle concept.
