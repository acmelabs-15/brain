---
package: rjm
name: RECONCILIATION PHASE
slug: reconciliation-phase
kind: phase
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# RECONCILIATION PHASE

## Definition — verbatim
> "RECONCILIATION PHASE (Steps 14-22, after user edits report):" — scripts/incoherence.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 20 | defined here | Heading defining steps 14 through 22 of the incoherence reconciliation workflow. |

## Consumes
User-annotated Incoherence Report containing resolution instructions.

## Produces
Target file modifications applied by Developer and Technical Writer agents, updated report status markers, and reconciliation summary.

## When applied
Executed after a user has reviewed the Incoherence Report and provided resolution guidance in steps 14 through 22.

## Sub-concepts
none

## Part of
incoherence-detector

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
The execution half of the incoherence detector workflow that parses human resolutions from the generated report, dispatches wave-based modifications across code and docs, and updates report status markers.
