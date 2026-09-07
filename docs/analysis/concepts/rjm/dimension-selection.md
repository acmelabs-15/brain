---
package: rjm
name: DIMENSION SELECTION
slug: dimension-selection
kind: technique
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# DIMENSION SELECTION

## Definition — verbatim
> "DIMENSION SELECTION" — scripts/incoherence.py:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 156 | defined here | Step 2 action instruction selecting abstract consistency dimensions based on surveyed info sources. |

## Consumes
Codebase survey results from Step 1 and the abstract dimension catalog (categories A–K).

## Produces
List of selected consistency dimensions with rationale.

## When applied
Executed during Step 2 of the Detection Phase following the codebase survey.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Selection technique that matches available repository information sources against the 11 abstract consistency categories without opening detailed files or creating ad-hoc domain dimensions.
