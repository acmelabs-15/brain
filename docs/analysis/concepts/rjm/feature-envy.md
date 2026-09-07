---
package: rjm
name: Feature Envy
slug: feature-envy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Feature Envy

## Definition — verbatim
> "a method that uses another object's data more than its own. Suggests Move Method to where the data lives." — .claude/skills/software-engineering-library/references/refactoring.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 41 | defined here | Flagged as a violation where code is more interested in another object's data than its own. |
| .claude/skills/analyze/SKILL.md | 67 | used here | Listed as a primary code smell target detected via the Tell, Don't Ask reference. |
| .claude/skills/software-engineering-library/references/refactoring.md | 58 | defined here | Defined as a code smell suggesting Move Method to relocate logic where data lives. |

## Consumes
Method bodies with foreign object field/getter invocations.

## Produces
Refactoring recommendation to move methods closer to their target data.

## When applied
Code analysis and refactoring reviews when evaluating coupling and cohesion.

## Sub-concepts
none

## Part of
common-violations-to-detect

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A classic Fowler code smell cataloged across rjm's analysis and refactoring libraries where a method accesses foreign object data more frequently than its own enclosing class. Detecting it guides automated and human reviewers toward applying Move Method refactorings to restore cohesive encapsulation.
