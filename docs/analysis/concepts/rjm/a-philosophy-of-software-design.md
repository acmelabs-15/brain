---
package: rjm
name: A Philosophy of Software Design
slug: a-philosophy-of-software-design
kind: reference
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

# A Philosophy of Software Design

## Definition — verbatim
(used, not defined)

> "This rule encodes the design heuristics from John Ousterhout's _A Philosophy of Software Design_ that fit ai-agents best." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 4 | used here | Cited as the source book by John Ousterhout whose design heuristics are encoded for the ai-agents codebase. |

## Consumes
none

## Produces
none

## When applied
Applied when designing agent capabilities, tools, skills, prompt interfaces, and plugin seams across the architecture.

## Sub-concepts
deep-module, shallow-module, information-hiding, cognitive-load, strategic-programming, tactical, change-amplification, unknown-unknowns

## Part of
none

## Implementation status
clean

## Design notes
A foundational reference work by John Ousterhout establishing the core heuristics of modularity, depth versus shallowness, information hiding, and complexity reduction that govern system interface design in rjm.
