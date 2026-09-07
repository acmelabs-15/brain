---
package: rjm
name: "CATEGORY D: TEMPORAL CONSISTENCY (Staleness)"
slug: category-d-temporal-consistency-staleness
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# CATEGORY D: TEMPORAL CONSISTENCY (Staleness)

## Definition — verbatim
> "CATEGORY D: TEMPORAL CONSISTENCY (Staleness)" — scripts/incoherence.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 63 | defined here | Definition of inconsistency category covering outdated comments and historical references. |

## Consumes
Code comments, TODO/FIXME markers, and historical references against current repository files.

## Produces
Candidate incoherences where code comments or annotations describe removed or modified code.

## When applied
Selected to find stale documentation, obsolete TODO comments, or paths pointing to relocated files.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension identifying historical baggage, including outdated comments referring to deleted functions, completed TODO markers, and broken path citations.
