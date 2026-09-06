---
package: addy
name: architecture decision
slug: architecture-decision
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# architecture decision

## Definition — verbatim
(used, not defined)
> "\"prompt\": \"Document the architecture decision behind the queue design\"," — evals/cases/documentation-and-adrs.json:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/documentation-and-adrs.json | 10 | used here | Prompt asking the agent to document the technical choice behind a queue design. |

## Consumes
Technical problem statement, competing design options, system constraints, and trade-off considerations.

## Produces
An explicit technical choice recorded with its rationale, consequences, and trade-offs.

## When applied
When choosing between architectural designs, system topologies, data models, or core dependencies.

## Sub-concepts
adr, trade-offs

## Part of
documentation-and-adrs

## Implementation status
clean

## Design notes
An architecture decision represents a consequential structural choice in system design that carries significant trade-offs and high reversal costs. Documenting architecture decisions ensures that the rationale behind complex designs remains transparent and deliberate throughout the software lifecycle.
