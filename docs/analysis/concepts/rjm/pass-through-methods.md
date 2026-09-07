---
package: rjm
name: Pass-through methods
slug: pass-through-methods
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

# Pass-through methods

## Definition — verbatim
(used, not defined)

> "Pass-through methods leak by widening the interface. If A.foo just calls B.foo, callers depend on both A and B, not one. Either hide B behind A entirely or let callers talk to B directly." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:69

## Also called — verbatim
Pass-through method — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:174

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 69 | used here | Identified as a design smell where methods merely forward calls to collaborators without transforming or enriching the abstraction. |

## Consumes
none

## Produces
none

## When applied
Identified during module interface review and refactoring passes to eliminate gratuitous delegation layers.

## Sub-concepts
none

## Part of
shallow-module

## Implementation status
clean

## Design notes
An interface smell in rjm where an intermediate method does nothing except delegate to an identical method on a collaborator. It artificially broadens the intermediate module's interface, forcing callers to conceptually depend on both layers.
