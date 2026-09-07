---
package: rjm
name: github-pat
slug: github-pat
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# github-pat

## Definition — verbatim
(used, not defined)

> "(\"github-pat\", re.compile(r\"\bgithub_pat_[A-Za-z0-9_]{22,}\b\"))," — scripts/redact_secrets.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 46 | defined here | Secret redaction rule regex pattern identifying GitHub Personal Access Token shapes. |

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
github-pat is a secret redaction token pattern identifier matching GitHub Personal Access Tokens rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
