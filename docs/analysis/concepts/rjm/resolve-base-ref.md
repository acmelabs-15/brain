---
package: rjm
name: resolve_base_ref
slug: resolve-base-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# resolve_base_ref

## Definition — verbatim
(used, not defined)

> "def resolve_base_ref(repo_root: Path) -> str | None:" — scripts/validation/check_adr_links.py:265

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 265 | defined here | Function resolving the local git base reference from candidates (origin/HEAD, origin/main, main). |

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
`resolve_base_ref` is a Python helper function identifier in `check_adr_links.py` determining the local git base branch reference rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
