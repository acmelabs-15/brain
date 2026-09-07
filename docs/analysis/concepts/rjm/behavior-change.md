---
package: rjm
name: Behavior change
slug: behavior-change
kind: pattern
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

# Behavior change

## Definition — verbatim
> "**Behavior change**: a change that any caller, test, or downstream system could detect. New feature, bug fix, API change, performance change visible to a caller." — .claude/skills/software-engineering-library/references/refactoring.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 13 | defined here | Defined in refactoring definitions as any change that a caller, test, or downstream system could detect. |

## Consumes
none

## Produces
none

## When applied
Identified when classifying commits and pull requests to enforce strict separation between behavioral changes and structural refactorings.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
A core taxonomy concept in rjm's engineering discipline that delineates changes altering observable outputs, APIs, or caller-facing performance from pure structural refactorings. Rjm mandates separating behavior changes into distinct commits under the 'two hats' rule.
