---
package: rjm
name: Partial cherry-pick
slug: partial-cherry-pick
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

# Partial cherry-pick

## Definition — verbatim
> "**Partial cherry-pick** (specific files only):" — .claude/skills/git-advanced-workflows/SKILL.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 76 | defined here | Defined as an operational technique using git restore --source to extract specific file changes from another commit. |

## Consumes
A source commit hash and designated file paths.

## Produces
Staged changes for only the selected files from the target commit.

## When applied
Applied when only certain files from a larger commit need to be ported to another branch.

## Sub-concepts
none

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Partial cherry-pick enables surgical porting of specific files from a commit via git restore --staged --worktree --source=<hash>, bypassing irrelevant modifications.
