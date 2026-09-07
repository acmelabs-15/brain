---
package: matt
name: Migrate
slug: migrate
kind: phase
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Migrate

## Definition — verbatim
> "move call sites over in batches sized by blast radius (per package, per directory), one ticket per batch, each blocked by the expand. CI stays green because the old form still exists." — docs/engineering/to-tickets.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 51 | defined here | Defines the Migrate stage of expand-contract wide refactoring as moving call sites over in bounded batches. |
| external/to-tickets.md | 46 | defined here | External catalog definition of the Migrate phase where callers are incrementally shifted to the new form. |

## Consumes
Call sites using the legacy implementation, following completion of the Expand ticket.

## Produces
Individual tickets that transition call sites to the new form in partitioned, reviewable batches.

## When applied
Sequenced after the Expand ticket and before the Contract ticket in wide refactors.

## Sub-concepts
none

## Part of
expand-contract, to-tickets

## Implementation status
clean

## Design notes
`Migrate` represents the incremental transition phase of the expand-contract refactoring pattern in `to-tickets`. By dividing call site updates into batches scoped by package or directory, each migration step fits cleanly within an agent's context window while preserving green CI status throughout the transition.
