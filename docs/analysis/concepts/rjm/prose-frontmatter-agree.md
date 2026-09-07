---
package: rjm
name: prose-frontmatter-agree
slug: prose-frontmatter-agree
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# prose-frontmatter-agree

## Definition — verbatim
(used, not defined)

> "    \"prose-frontmatter-agree\": 0," — scripts/validation/adr_lifecycle_baseline.json:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 11 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 35 | defined here | Cited in module docstring explaining handling of records without status sections. |

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
`prose-frontmatter-agree` is a check name and baseline configuration key verifying consistency between markdown prose status headings and frontmatter status values rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
