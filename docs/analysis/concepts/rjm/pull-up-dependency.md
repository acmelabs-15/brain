---
package: rjm
name: Pull up dependency
slug: pull-up-dependency
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pull up dependency

## Definition — verbatim
> "**Pull up dependency**: move the construction of an awkward collaborator one level up the call chain so that the level you care about can take it as a parameter." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 130 | defined here | Defined as moving collaborator construction one level up the call chain to parameterize the target level. |

## Consumes
Nested collaborator construction within a call hierarchy.

## Produces
Parameterization of intermediate functions or constructors in the call chain.

## When applied
Applied when an awkward collaborator is constructed deeply within a call chain and needs to be supplied externally.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A refactoring technique shifting dependency construction up the call stack so that target functions or classes can receive dependencies via parameters.
