---
package: rjm
name: ABSTRACT DIMENSION CATALOG
slug: abstract-dimension-catalog
kind: reference
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ABSTRACT DIMENSION CATALOG

## Definition — verbatim
> "ABSTRACT DIMENSION CATALOG" — scripts/incoherence.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 40 | defined here | Heading for the 11 abstract consistency dimensions catalog. |

## Consumes
Codebase survey findings and repository information sources.

## Produces
Selected dimensions for targeted exploration agents.

## When applied
Consulted in step 2 of the incoherence detection workflow to select consistency dimensions based on available info sources.

## Sub-concepts
category-a-specification-vs-behavior, category-b-interface-contract-integrity, category-c-cross-reference-consistency, category-d-temporal-consistency-staleness, category-e-error-handling-consistency, category-f-configuration-environment, category-g-ambiguity-underspecification, category-h-policy-convention-compliance, category-i-completeness-documentation-gaps, category-j-compositional-consistency, category-k-implicit-contract-integrity

## Part of
incoherence-detector

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
A structured reference taxonomy of 11 consistency dimensions (Categories A through K) used to guide multi-agent codebase audits for documentation drift, broken contracts, staleness, and ambiguity.
