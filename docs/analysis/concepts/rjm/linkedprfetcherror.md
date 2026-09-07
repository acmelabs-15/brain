---
package: rjm
name: LinkedPrFetchError
slug: linkedprfetcherror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LinkedPrFetchError

## Definition — verbatim
(used, not defined)

> "Raised when linked-PR timeline data cannot be fetched or parsed." — scripts/issue_triage.py:524

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 523 | defined here | Exception class raised when GitHub timeline API calls fail or return unparseable payloads. |

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
`LinkedPrFetchError` is a Python exception class in `scripts/issue_triage.py` handling timeline fetch failures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
