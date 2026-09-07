---
package: rjm
name: missing_required_roots
slug: missing-required-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# missing_required_roots

## Definition — verbatim
(used, not defined)

> "def missing_required_roots(root: Path) -> list[str]:" — scripts/validation/check_skill_md_portability.py:578

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 578 | defined here | Identifies declared plugin roots whose skills subtrees are missing from the filesystem. |

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
defects: doc-drift

## Design notes
`missing_required_roots` is a Python validation function identifier identifying absent required plugin roots rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
