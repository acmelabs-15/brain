---
package: rjm
name: _load_marker_baseline
slug: load-marker-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _load_marker_baseline

## Definition — verbatim
(used, not defined)

> "def _load_marker_baseline(path: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_exec_portability.py:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 332 | defined here | Parses the baseline JSON file to extract the marker_files suppression dictionary. |

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
defects: other

## Design notes
An internal Python loader function identifier reading marker suppression counts from baseline files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
