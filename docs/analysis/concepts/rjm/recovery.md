---
package: rjm
name: Recovery
slug: recovery
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

# Recovery

## Definition — verbatim
> "#### Recovery: Undo Mistakes with Reflog" — .claude/skills/git-advanced-workflows/SKILL.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 123 | defined here | Defined as the subsection detailing commit recovery and error reversal via git reflog. |

## Consumes
Git reflog entries and commit hashes representing prior HEAD positions.

## Produces
Restored working tree states, recovered branches, or reset commit pointers.

## When applied
Applied after accidental branch deletions, bad rebases, or destructive resets.

## Sub-concepts
reflog, abort-operations-in-progress

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Recovery provides operational procedures to restore repository state using git reflog, creating named recovery branches or hard resetting to restore lost commits.
