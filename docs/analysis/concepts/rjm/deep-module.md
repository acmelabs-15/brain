---
package: rjm
name: Deep module
slug: deep-module
kind: pattern
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

# Deep module

## Definition — verbatim
> "**Deep module**: rich functionality behind a small, simple interface. High value per unit of interface surface." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 15 | defined here | Defined in core vocabulary as a module providing rich functionality behind a small, simple interface. |

## Consumes
none

## Produces
none

## When applied
Applied when designing tools, agents, skills, or plugin entry points to hide maximal complexity behind minimal caller surface.

## Sub-concepts
information-hiding, pull-complexity-downward

## Part of
none

## Implementation status
clean

## Design notes
The target design ideal for components across rjm. A deep module delivers high functional power while exposing very few configuration knobs or required inputs, minimizing the cognitive load imposed upon calling agents or human developers.
