---
package: rjm
name: _counts_at_ref
slug: counts-at-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _counts_at_ref

## Definition — verbatim
(used, not defined)

> "def _counts_at_ref(repo_root: Path, ref: str, baseline_path: Path) -> dict[str, int] | None:" — scripts/validation/check_adr_lifecycle.py:923

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 923 | defined here | Helper function reading and parsing baseline check counts recorded at a git ref via git show. |

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
`_counts_at_ref` is a Python helper function in check_adr_lifecycle.py querying git ref baseline state rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
