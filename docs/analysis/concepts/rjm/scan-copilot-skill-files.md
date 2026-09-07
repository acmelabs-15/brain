---
package: rjm
name: scan_copilot_skill_files
slug: scan-copilot-skill-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_copilot_skill_files

## Definition — verbatim
(used, not defined)

> "def scan_copilot_skill_files(" — scripts/validation/check_copilot_routing_exclusions.py:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 66 | defined here | Function scanning shipped Copilot skill markdown documents for forbidden routes pointing to excluded skills. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Python validation function in `check_copilot_routing_exclusions.py` that scans Copilot skill files for excluded routing targets, classified as name-only per D-023.
