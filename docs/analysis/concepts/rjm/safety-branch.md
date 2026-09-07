---
package: rjm
name: safety branch
slug: safety-branch
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

# safety branch

## Definition — verbatim
> "Create a safety branch before any destructive operation" — .claude/skills/git-advanced-workflows/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 28 | defined here | Defined as a required backup branch created prior to any destructive history operation. |

## Consumes
Current branch HEAD pointer.

## Produces
A local backup branch named backup-<timestamp>.

## When applied
Created immediately before running rebases, commit resets, or destructive cherry-picks.

## Sub-concepts
none

## Part of
phase-1-assess-the-situation

## Implementation status
defects: orphan

## Design notes
A safety branch preserves the exact pre-operation commit state under an immutable ref, ensuring that any catastrophic mistake during interactive rebasing can be instantly reversed.
