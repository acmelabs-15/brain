---
package: rjm
name: EXPLORATION DISPATCH
slug: exploration-dispatch
kind: technique
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# EXPLORATION DISPATCH

## Definition — verbatim
> "EXPLORATION DISPATCH" — scripts/incoherence.py:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 171 | defined here | Step 3 action instruction launching parallel sub-agents for each selected consistency dimension. |

## Consumes
List of selected dimensions and the dimension exploration task prompt template.

## Produces
Parallel invocation of lightweight exploration sub-agents across dimensions.

## When applied
Executed during Step 3 of the Detection Phase after dimensions are selected.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Dispatch technique that launches parallel sub-agents in a single message, assigning each agent to explore one consistency dimension independently to maximize recall and speed.
