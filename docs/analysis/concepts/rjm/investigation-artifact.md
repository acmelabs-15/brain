---
package: rjm
name: investigation artifact
slug: investigation-artifact
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# investigation artifact

## Definition — verbatim
(used, not defined)

> "Single source of truth for investigation artifact path patterns." — scripts/modules/investigation_allowlist.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 3 | used here | Describes the scope of allowlisted path patterns qualifying for the ADR-034 QA exemption. |

## Consumes
none

## Produces
none

## When applied
When an investigation session creates or modifies exploratory and diagnostic artifacts covered by the ADR-034 allowlist.

## Sub-concepts
none

## Part of
qa-exemption

## Implementation status
clean

## Design notes
An investigation artifact is a non-production file (such as session logs, analysis reports, retrospectives, or memory notes) created during an exploratory or diagnostic task that is exempt from production QA testing requirements under ADR-034.
