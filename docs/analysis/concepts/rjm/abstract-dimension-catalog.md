---
package: rjm
name: ABSTRACT DIMENSION CATALOG
slug: abstract-dimension-catalog
kind: reference
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
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
