---
package: rjm
name: Correlated axes
slug: correlated-axes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Correlated axes

## Definition — verbatim
> "| Correlated axes | Bridge pattern (one axis delegates to the other) |" — .claude/skills/cva-analysis/references/multidimensional-cva.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 32 | defined here | Pattern mapping table entry linking interdependent variability dimensions to the Bridge pattern. |

## Consumes
Multidimensional CVA analysis revealing that operations depend on combined values across two dimensions.

## Produces
Bridge pattern architecture where one abstraction hierarchy delegates to an implementation hierarchy.

## When applied
When an operation's execution varies according to the intersection of two distinct axes (e.g. shipping calculation depending on both geography and carrier).

## Sub-concepts
none

## Part of
multidimensional-cva

## Implementation status
defects: missing-path

## Design notes
A multidimensional CVA condition where two variation axes interact and must be resolved together; rather than creating a Cartesian explosion of concrete subclasses, the system adopts the Bridge pattern, allowing one axis (the abstraction) to delegate execution to the other (the implementation).
