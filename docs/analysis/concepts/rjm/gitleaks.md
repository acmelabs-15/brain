---
package: rjm
name: gitleaks
slug: gitleaks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# gitleaks

## Definition — verbatim
(used, not defined)

> "scanner (use CodeQL / gitleaks-class tooling for scanning committed code). It" — scripts/redact_secrets.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 10 | used here | Cited in docstring contrasting repository secret scanning tools with in-process free-text redactors. |

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
gitleaks is an external secret scanner tool name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
