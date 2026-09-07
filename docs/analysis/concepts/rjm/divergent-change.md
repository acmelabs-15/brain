---
package: rjm
name: Divergent Change
slug: divergent-change
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

# Divergent Change

## Definition — verbatim
> "one module changes for many unrelated reasons. Suggests Extract Class to split by reason for change." — .claude/skills/software-engineering-library/references/refactoring.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 56 | defined here | Defined as a code smell where one module undergoes modification for multiple unrelated reasons. |

## Consumes
A module or class subjected to frequent edits triggered by distinct business or technical motivations.

## Produces
Split modules divided along clear axes of change via Extract Class.

## When applied
Diagnosed when examining modification history and finding a single module altered for disparate reasons.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Divergent Change is a code smell in rjm indicating lack of cohesion. It occurs when a single class or module must be modified whenever different, unrelated requirements change (for instance, when database schemas change, when reporting formats change, and when financial rules change). Extracting separate classes aligned with each distinct driver of change ensures each module has a single reason to change.
