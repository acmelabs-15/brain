---
package: rjm
name: frontmatter-parses
slug: frontmatter-parses
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# frontmatter-parses

## Definition — verbatim
(used, not defined)

> "    \"frontmatter-parses\": 0," — scripts/validation/adr_lifecycle_baseline.json:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 5 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 32 | defined here | Cited in module docstring as one of the closed ADR lifecycle defect checks. |

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
`frontmatter-parses` is a check name and baseline configuration key verifying that an ADR begins with a parseable YAML frontmatter mapping rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
