---
package: rjm
name: has_agent_label
slug: has-agent-label
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_agent_label

## Definition — verbatim
(used, not defined)

> "True when any label starts with ``agent-``." — scripts/issue_triage.py:251

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 250 | defined here | Helper function returning whether an issue has any label prefixed with agent-. |

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
defects: orphan

## Design notes
`has_agent_label` is an internal Python helper function in `scripts/issue_triage.py` for verifying agent label assignments rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
