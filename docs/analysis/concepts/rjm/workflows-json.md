---
package: rjm
name: workflows.json
slug: workflows-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# workflows.json

## Definition — verbatim
(used, not defined)

> "Manages .agents/skillbook/policies.json, tensions.json, and workflows.json." — scripts/skillbook.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 12 | used here | JSON file path referenced in skillbook CLI documentation for workflow policy registrations. |

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
defects: doc-drift

## Design notes
workflows.json is a file path identifier referenced for workflow definitions rather than an SDLC lifecycle concept, classified as name-only per D-023.
