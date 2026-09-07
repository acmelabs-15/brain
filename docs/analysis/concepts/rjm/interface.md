---
package: rjm
name: Interface
slug: interface
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

# Interface

## Definition — verbatim
> "**Interface**: everything a caller must know to use the module. Includes signatures, side effects, error modes, ordering constraints, performance characteristics." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 14 | defined here | Defined in core vocabulary as everything a caller must know to use a module, including signatures, side effects, error modes, ordering constraints, and performance characteristics. |

## Consumes
none

## Produces
none

## When applied
Applied when specifying public function contracts, agent tool schemas, prompt fields, and plugin extension seams.

## Sub-concepts
none

## Part of
module

## Implementation status
clean

## Design notes
Defines the boundary of a module in rjm. Crucially, it encompasses not only explicit syntactic signatures but the totality of implicit knowledge—ordering rules, error behaviors, and side effects—that a caller must understand to interact safely.
