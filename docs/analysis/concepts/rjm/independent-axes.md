---
package: rjm
name: Independent axes
slug: independent-axes
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

# Independent axes

## Definition — verbatim
> "| Independent axes | Two separate Strategy hierarchies |" — .claude/skills/cva-analysis/references/multidimensional-cva.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 31 | defined here | Pattern mapping table entry linking independent variability dimensions to two separate Strategy hierarchies. |

## Consumes
Multidimensional CVA analysis demonstrating that variation along one dimension operates independently from variation along another.

## Produces
Two or more isolated Strategy hierarchies that can vary and evolve without coupling to each other.

## When applied
When analyzing cross-cutting concerns in multidimensional CVA where each concern varies exclusively by its own dimension.

## Sub-concepts
none

## Part of
multidimensional-cva

## Implementation status
defects: missing-path

## Design notes
A relationship configuration in multidimensional CVA where two dimensions of variation do not interact (e.g. tax rules varying purely by geography while rate APIs vary purely by carrier), allowing each axis to be modeled as an independent Strategy hierarchy without cross-cutting delegation.
