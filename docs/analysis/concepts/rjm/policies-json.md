---
package: rjm
name: policies.json
slug: policies-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# policies.json

## Definition — verbatim
(used, not defined)

> "Manages .agents/skillbook/policies.json, tensions.json, and workflows.json." — scripts/skillbook.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 12 | used here | JSON file path managed by skillbook CLI storing evidence-tiered agent policies. |

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
policies.json is a file path identifier for local storage of agent behavioral policies rather than an SDLC lifecycle concept, classified as name-only per D-023.
