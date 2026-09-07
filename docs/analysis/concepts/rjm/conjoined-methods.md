---
package: rjm
name: Conjoined methods
slug: conjoined-methods
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

# Conjoined methods

## Definition — verbatim
> "**Conjoined methods**: two methods that must be called together in a specific order to be correct. Combine into one operation or hide the ordering inside a single entry point." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 173 | defined here | Defined in anti-patterns as two methods that must be called together in a specific order to function correctly. |

## Consumes
none

## Produces
none

## When applied
Identified during code review to eliminate temporal coupling between separate public method invocations.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An interface anti-pattern in rjm where an implicit ordering dependency is offloaded onto the caller. Conjoined methods represent an information leak that should be resolved by collapsing them into a single atomic operation.
