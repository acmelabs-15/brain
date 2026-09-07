---
package: rjm
name: _has_adr_corpus
slug: has-adr-corpus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _has_adr_corpus

## Definition — verbatim
(used, not defined)

> "def _has_adr_corpus(scanned: list[str]) -> bool:" — scripts/validation/check_adr_links.py:932

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 932 | defined here | Helper sentinel function verifying that scanned files include at least one ADR record to prevent false green passes. |

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
`_has_adr_corpus` is a Python helper function identifier in `check_adr_links.py` guarding against scans on non-ADR repositories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
