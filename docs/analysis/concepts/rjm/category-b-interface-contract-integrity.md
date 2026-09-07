---
package: rjm
name: "CATEGORY B: INTERFACE CONTRACT INTEGRITY"
slug: category-b-interface-contract-integrity
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# CATEGORY B: INTERFACE CONTRACT INTEGRITY

## Definition — verbatim
> "CATEGORY B: INTERFACE CONTRACT INTEGRITY" — scripts/incoherence.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 51 | defined here | Definition of inconsistency category between interface definitions and runtime values. |

## Consumes
Type definitions, schema definitions, function signatures, and runtime behavior.

## Produces
Candidate incoherences where types or schemas contradict runtime execution.

## When applied
Selected when a codebase has static types, schemas, or docstrings to verify against runtime contracts.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension auditing whether runtime execution respects static interface boundaries, schema validation rules, and function signatures.
