---
package: rjm
name: BROAD SWEEP
slug: broad-sweep
kind: technique
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# BROAD SWEEP

## Definition — verbatim
> "BROAD SWEEP [SUB-AGENT]" — scripts/incoherence.py:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 200 | defined here | Step 4 action instruction for sub-agents to conduct high-recall broad search for potential incoherences. |

## Consumes
Assigned consistency dimension and initial search strategy across documentation, code, configs, and tests.

## Produces
Preliminary list of potential conflicting locations (Location A and Location B) and tracked search paths.

## When applied
Executed during Step 4 of the Detection Phase by exploration sub-agents.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
High-recall exploration technique where sub-agents cast a wide net across repository files to capture any potential incoherences while deferring precision filtering to later steps.
