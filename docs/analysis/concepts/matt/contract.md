---
package: matt
name: Contract
slug: contract
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

# Contract

## Definition — verbatim
> "delete the old form once no caller remains, in a ticket blocked by every migrate batch." — docs/engineering/to-tickets.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 52 | defined here | Defines the Contract stage in expand-contract refactorings as deleting the old form once all callers have migrated. |
| external/to-tickets.md | 47 | defined here | External catalog definition of the Contract phase removing the obsolete implementation. |

## Consumes
A deprecated interface or schema from which all active call sites have been completely removed.

## Produces
Clean removal of legacy code, leaving only the new unified implementation.

## When applied
The final ticket in an expand-contract sequence, blocked by every Migrate ticket.

## Sub-concepts
none

## Part of
expand-contract, to-tickets

## Implementation status
clean

## Design notes
`Contract` is the terminal phase of the expand-contract pattern in `to-tickets`. Once all callers have migrated to the new implementation across earlier tickets, the Contract ticket removes the obsolete code or database fields, permanently concluding the refactoring without having introduced intermediate system breakages.
