---
package: rjm
name: stripe-key
slug: stripe-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# stripe-key

## Definition — verbatim
(used, not defined)

> "(\"stripe-key\", re.compile(r\"\b(?:sk|pk|rk)_(?:live|test)_[A-Za-z0-9]{10,}\b\"))," — scripts/redact_secrets.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 47 | defined here | Secret redaction rule regex pattern identifying Stripe API key token shapes. |

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
stripe-key is a secret redaction token pattern identifier matching Stripe API credentials rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
