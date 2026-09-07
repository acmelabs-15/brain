---
package: rjm
name: slack-token
slug: slack-token
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# slack-token

## Definition — verbatim
(used, not defined)

> "(\"slack-token\", re.compile(r\"\bxox[baprs]-[A-Za-z0-9-]{10,}\b\"))," — scripts/redact_secrets.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 49 | defined here | Secret redaction rule regex pattern identifying Slack token shapes. |

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
slack-token is a secret redaction token pattern identifier matching Slack authentication tokens rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
