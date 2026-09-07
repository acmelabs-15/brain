---
package: rjm
name: parse_iso_timestamp
slug: parse-iso-timestamp
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# parse_iso_timestamp

## Definition — verbatim
(used, not defined)

> "def parse_iso_timestamp(value: str) -> datetime:" — scripts/issue_triage.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 149 | defined here | Python helper function parsing ISO-8601 UTC timestamp strings from GitHub API payloads into datetime objects. |

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
`parse_iso_timestamp` is a Python timestamp parsing helper function in `issue_triage.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
