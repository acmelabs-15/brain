---
package: rjm
name: write_baseline
slug: write-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# write_baseline

## Definition — verbatim
(used, not defined)

> "def write_baseline(path: Path, counts: dict[str, int]) -> None:" — scripts/validation/check_adr_lifecycle.py:956

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 956 | defined here | Writes updated per-check counts as the new baseline ceiling atomically using a temp file. |
| scripts/validation/check_rule_activation_coverage.py | 362 | defined here | Writes baseline uncovered rules and skills payload failing closed on error. |
| scripts/validation/check_skill_md_exec_portability.py | 463 | defined here | Writes exec-path vendor portability ratchet baseline JSON. |
| scripts/validation/check_skill_md_portability.py | 1180 | defined here | Writes vendor portability ratchet baseline JSON with current and marker counts. |
| scripts/validation/check_vendor_portability.py | 517 | defined here | Writes vendor portability baseline file from current offender set. |
| scripts/validation/portability_common.py | 244 | defined here | Writes a sorted portability baseline and prints standard summary output. |

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
defects: doc-drift, other

## Design notes
`write_baseline` is a Python baseline serialization function identifier across multiple validation scripts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
