---
package: addy
name: exceptions table
slug: exceptions-table
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# exceptions table

## Definition — verbatim
> "an exceptions table with owners and expiry dates. Every number needs a stated reason." — .gemini/commands/constraints.toml:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 18 | defined here | Specifies the exceptions table with owners and expiry dates in CONSTRAINTS.md. |

## Consumes
Approved temporary exemptions from project constraints.

## Produces
A structured table tracking rule exemptions with owners, reasons, and expiration dates.

## When applied
When an intentional deviation from quality constraints is required.

## Sub-concepts
none

## Part of
constraints-md

## Implementation status
clean

## Design notes
A structured ledger within CONSTRAINTS.md that tracks rule exemptions with explicit owners and expiration dates, preventing permanent technical debt accumulation.
