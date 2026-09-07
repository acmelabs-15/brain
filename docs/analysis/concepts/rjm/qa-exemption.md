---
package: rjm
name: QA exemption
slug: qa-exemption
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# QA exemption

## Definition — verbatim
> "Shared investigation-only allowlist for ADR-034 QA exemption." — scripts/modules/investigation_allowlist.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 1 | used here | Policy mechanism exempting investigation artifacts from standard QA requirements per ADR-034. |

## Consumes
Commit diffs and file paths modified during an investigation session.

## Produces
Exemption verdict permitting merge without full test suite execution when changes are investigation-only.

## When applied
Evaluated during commit validation and PR review checks when sessions declare the ADR-034 QA exemption.

## Sub-concepts
investigation-artifact

## Part of
qa

## Implementation status
clean

## Design notes
QA exemption allows exploratory and diagnostic work to be merged without requiring production test suites, provided all touched paths fall within the approved investigation allowlist.
