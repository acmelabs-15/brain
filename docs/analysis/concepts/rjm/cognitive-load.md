---
package: rjm
name: Cognitive load
slug: cognitive-load
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

# Cognitive load

## Definition — verbatim
> "**Cognitive load**: how much a reader must hold in their head to use or change the module correctly." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 19 | defined here | Defined in core vocabulary as the amount of information a reader must hold in their head to safely use or modify a module. |

## Consumes
none

## Produces
none

## When applied
Evaluated when designing agent prompt schemas, tool signatures, and public module interfaces to prevent context bloat.

## Sub-concepts
none

## Part of
complexity

## Implementation status
clean

## Design notes
A core metric of architectural friction in rjm. Minimizing cognitive load ensures that both human developers and LLM subagents can interact with interfaces reliably without exceeding context budgets or needing to memorize implicit environmental rules.
