---
package: rjm
name: validate_adr_links
slug: validate-adr-links
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_adr_links

## Definition — verbatim
(used, not defined)

> "def validate_adr_links(repo_root: Path, base_ref: str = \"auto\") -> bool:" — scripts/validation/check_adr_links.py:972

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 972 | defined here | Primary entrypoint function invoked by pre_pr.py validating ADR links and returning boolean pass status. |

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
`validate_adr_links` is a Python function identifier in `check_adr_links.py` providing the validation gate entrypoint rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
