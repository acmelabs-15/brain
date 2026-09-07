---
package: rjm
name: Litter-pickup
slug: litter-pickup
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Litter-pickup

## Definition — verbatim
> "you are already editing a file and notice a small, local mess. Fix it, but only if the fix is minutes, not hours, and it stays in the same diff scope." — .claude/skills/software-engineering-library/references/refactoring.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 38 | defined here | Defined as fixing small, local messes encountered during edits if quick and within diff scope. |

## Consumes
A small, local code defect or mess observed while modifying an existing file.

## Produces
Cleaned local code structure within the same diff scope without expanding task boundary.

## When applied
Applied opportunistically while editing a file, provided the cleanup takes minutes and stays in scope.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Litter-pickup refactoring in rjm provides an opportunistic Boy Scout Rule cleanup mechanism. When a developer or agent is already modifying a file and encounters a minor blemish or minor structural defect, they are permitted to clean it up, provided the fix is trivial (minutes, not hours) and remains strictly within the immediate diff scope. This prevents codebase degradation without derailing task focus.
