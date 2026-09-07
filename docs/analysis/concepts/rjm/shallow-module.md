---
package: rjm
name: Shallow module
slug: shallow-module
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

# Shallow module

## Definition — verbatim
> "**Shallow module**: small functionality behind an interface nearly as large as the implementation. Low value, high cost to use." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 16 | defined here | Defined in core vocabulary as a module providing small functionality behind an interface nearly as large as its implementation. |

## Consumes
none

## Produces
none

## When applied
Identified during architectural reviews and refactoring passes to detect low-value abstractions that should be combined or absorbed.

## Sub-concepts
pass-through-methods, shallow-class

## Part of
none

## Implementation status
clean

## Design notes
An architectural anti-pattern in rjm where an abstraction introduces interface complexity and cognitive overhead without hiding significant implementation details, creating gratuitous layers that are candidates for elimination or inlining.
