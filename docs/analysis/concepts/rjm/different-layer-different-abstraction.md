---
package: rjm
name: Different Layer, Different Abstraction
slug: different-layer-different-abstraction
kind: technique
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

# Different Layer, Different Abstraction

## Definition — verbatim
> "Different Layer, Different Abstraction" — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:73

> "Each layer should change the level of abstraction. If a layer adds nothing, it leaks the layer beneath it." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 73 | defined here | Defined as an architectural rule requiring every distinct layer in a system to provide a different level of abstraction. |

## Consumes
Multi-layered architectural designs, wrappers, decorators, and collaborator interfaces.

## Produces
Distinct abstraction tiers without redundant pass-through layers.

## When applied
Applied when designing wrappers, decorators, skill interfaces, and orchestrator boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural rule in rjm ensuring that layering represents real conceptual shifts (e.g., higher-level domain workflows versus low-level persistence operations) rather than meaningless administrative partitioning that leaks underlying implementations.
