---
package: rjm
name: pick
slug: pick
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

# pick

## Definition — verbatim
(used, not defined)

> "`pick` (keep)" — .claude/skills/git-advanced-workflows/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 43 | used here | Specified as the interactive rebase operation that keeps a commit unchanged. |

## Consumes
A commit entry in an interactive rebase todo list.

## Produces
The commit retained in the rebased history with its original patch and metadata.

## When applied
Selected by default or explicitly when preserving a commit in its current form.

## Sub-concepts
none

## Part of
rebase-operations

## Implementation status
defects: orphan

## Design notes
pick is the baseline instruction in interactive rebase that applies the specified commit to the new base without alteration.
