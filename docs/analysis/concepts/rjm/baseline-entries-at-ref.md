---
package: rjm
name: baseline_entries_at_ref
slug: baseline-entries-at-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# baseline_entries_at_ref

## Definition — verbatim
(used, not defined)

> "def baseline_entries_at_ref(repo_root: Path, base_ref: str, baseline_path: Path) -> set[str] | None:" — scripts/validation/check_adr_links.py:327

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 327 | defined here | Function reading the baseline file entries at a specific git reference via git cat-file and git show. |

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
`baseline_entries_at_ref` is a Python helper function identifier in `check_adr_links.py` extracting baseline allowances from git revisions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
