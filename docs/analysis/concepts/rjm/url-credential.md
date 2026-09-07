---
package: rjm
name: url-credential
slug: url-credential
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# url-credential

## Definition — verbatim
(used, not defined)

> "reasons.extend([\"url-credential\"] * url_count)" — scripts/redact_secrets.py:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 184 | defined here | Redaction reason string recorded when credentials embedded in URLs are sanitized in CI sink redaction. |

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
`url-credential` is a redaction reason string identifying user credentials embedded in URLs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
