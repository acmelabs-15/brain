---
package: rjm
name: id-matches-filename
slug: id-matches-filename
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# id-matches-filename

## Definition — verbatim
(used, not defined)

> "    \"id-matches-filename\": 0," — scripts/validation/adr_lifecycle_baseline.json:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 6 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 67 | defined here | Documented in check listing as verifying frontmatter id equals filename ADR number. |

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
`id-matches-filename` is a check name and baseline configuration key verifying that an ADR frontmatter id matches its filename number rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
