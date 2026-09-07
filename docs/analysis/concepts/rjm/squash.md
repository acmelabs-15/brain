---
package: rjm
name: squash
slug: squash
kind: technique
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

# squash

## Definition — verbatim
(used, not defined)

> "`squash` (combine keeping message)" — .claude/skills/git-advanced-workflows/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 43 | used here | Specified as the interactive rebase operation that folds a commit into the previous one while concatenating messages. |

## Consumes
A commit in an interactive rebase list and the preceding commit.

## Produces
A single combined commit combining both diffs and prompting to edit the combined message.

## When applied
Used to combine related commits into a single logical unit while retaining historical message context.

## Sub-concepts
none

## Part of
rebase-operations

## Implementation status
defects: orphan

## Design notes
squash merges a commit into its predecessor and combines both commit messages, enabling cohesive history creation while preserving explanatory notes.
