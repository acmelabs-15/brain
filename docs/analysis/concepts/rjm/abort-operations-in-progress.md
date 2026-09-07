---
package: rjm
name: Abort operations in progress
slug: abort-operations-in-progress
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

# Abort operations in progress

## Definition — verbatim
> "**Abort operations in progress:**" — .claude/skills/git-advanced-workflows/SKILL.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 131 | defined here | Defined as the set of abort commands for terminating in-progress Git operations. |

## Consumes
An unresolved or conflicted Git operation (rebase, merge, cherry-pick, bisect).

## Produces
Immediate rollback of the repository state to its condition before the operation began.

## When applied
Used when conflicts become unmanageable or when an operation was started in error.

## Sub-concepts
none

## Part of
recovery

## Implementation status
defects: orphan

## Design notes
Abort operations in progress lists standardized abort commands (--abort or reset) to cleanly terminate conflicting or failed operations and return to a safe baseline.
