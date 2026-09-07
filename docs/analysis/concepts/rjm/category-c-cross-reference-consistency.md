---
package: rjm
name: "CATEGORY C: CROSS-REFERENCE CONSISTENCY"
slug: category-c-cross-reference-consistency
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# CATEGORY C: CROSS-REFERENCE CONSISTENCY

## Definition — verbatim
> "CATEGORY C: CROSS-REFERENCE CONSISTENCY" — scripts/incoherence.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 57 | defined here | Definition of inconsistency category between distinct documents or internal sections. |

## Consumes
Multiple documentation files, guides, and specifications across the repository.

## Produces
Candidate incoherences where different documents describe the same concept inconsistently.

## When applied
Selected when multiple documentation files describe shared concepts, limits, or numeric constants.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension verifying that multiple documentation files or guides maintain uniform terminology, numeric limits, and conceptual definitions without intra-doc contradictions.
