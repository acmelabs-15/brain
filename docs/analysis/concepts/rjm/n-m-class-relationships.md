---
package: rjm
name: N:M class relationships
slug: n-m-class-relationships
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# N:M class relationships

## Definition — verbatim
> "| N:M class relationships | Multiple rows reference each other | Introduce Bridge to decouple the hierarchies |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 63 | defined here | Listed in Common Mistakes as entangled multi-row dependencies requiring a Bridge pattern to decouple orthogonal hierarchies. |

## Consumes
CVA matrix structures where multiple commonality rows reference or cross-couple with one another.

## Produces
Bridge pattern architecture separating the abstraction hierarchy from the implementation hierarchy.

## When applied
When analyzing CVA matrices where two distinct dimensions intersect and create an N:M dependency explosion.

## Sub-concepts
none

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
An architectural complexity smell in rjm where multiple variation axes interconnect in a tangled N:M network of dependencies, signaling that two independent concepts have been conflated and must be decoupled using the Bridge pattern to let both dimensions vary independently.
