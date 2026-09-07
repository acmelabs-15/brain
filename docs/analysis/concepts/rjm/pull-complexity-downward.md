---
package: rjm
name: Pull Complexity Downward
slug: pull-complexity-downward
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pull Complexity Downward

## Definition — verbatim
> "Pull Complexity Downward" — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:83

> "Given a choice, the module with more knowledge should absorb the complexity." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 83 | defined here | Defined as an architectural principle where modules with more knowledge absorb complexity rather than pushing it onto callers. |

## Consumes
Preconditions, edge case handling, configuration parameters, and branching decisions.

## Produces
Deep, self-contained modules that simplify call sites across the codebase.

## When applied
Applied when deciding whether callers or the module should validate preconditions, handle default cases, or resolve ambiguities.

## Sub-concepts
none

## Part of
deep-module

## Implementation status
clean

## Design notes
A core design technique in rjm that directs complexity downward into implementations rather than pushing it outward onto callers. Because callers exist in many places while a module exists in one, absorbing complexity into the module drastically lowers overall system cognitive load.
