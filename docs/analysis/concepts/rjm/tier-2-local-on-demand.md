---
package: rjm
name: Tier 2: Local On-Demand
slug: tier-2-local-on-demand
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 2: Local On-Demand

## Definition — verbatim
(used, not defined)

> "subgraph T2[\"Tier 2: Local On-Demand\"]" — docs/codeql-architecture.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 29 | defined here | Flowchart subgraph label defining the local on-demand CodeQL scanning tier. |
| docs/codeql-integration.md | 14 | defined here | Overview bullet describing local on-demand CodeQL scans executed via skill or script. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, missing-path

## Design notes
`Tier 2: Local On-Demand` is an architectural diagram label and subsection heading designating local on-demand scanning rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
