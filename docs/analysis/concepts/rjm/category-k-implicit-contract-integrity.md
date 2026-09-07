---
package: rjm
name: "CATEGORY K: IMPLICIT CONTRACT INTEGRITY"
slug: category-k-implicit-contract-integrity
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# CATEGORY K: IMPLICIT CONTRACT INTEGRITY

## Definition — verbatim
> "CATEGORY K: IMPLICIT CONTRACT INTEGRITY" — scripts/incoherence.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 105 | defined here | Definition of inconsistency category for identifier names and log messages promising behavior not delivered. |

## Consumes
Code identifiers, function names, error strings, module paths, and actual behavioral code.

## Produces
Candidate incoherences where naming semantics or log descriptions mislead about underlying functionality.

## When applied
Selected particularly for LLM-assisted workflows to locate deceptive identifiers, non-validating validators, or misrepresenting logs.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension identifying deceptive naming or erroneous log and error messages that imply invariants or behaviors not honored by the implementation.
