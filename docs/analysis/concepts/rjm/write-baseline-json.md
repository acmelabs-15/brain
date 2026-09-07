---
package: rjm
name: write_baseline_json
slug: write-baseline-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# write_baseline_json

## Definition — verbatim
(used, not defined)

> "write_baseline_json" — scripts/validation/portability_baseline.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 38 | used here | Imported to write updated executable portability baseline files atomically. |
| scripts/validation/check_skill_md_portability.py | 111 | used here | Imported to write updated Markdown portability baseline files atomically. |
| scripts/validation/portability_baseline.py | 56 | defined here | Exported in `__all__` as the public function writing portability baseline JSON atomically under file locks. |

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
clean in scripts/validation/portability_baseline.py; defects: other in scripts/validation/check_skill_md_exec_portability.py, doc-drift in scripts/validation/check_skill_md_portability.py

## Design notes
An atomic baseline serialization utility writing locked JSON ratchet state rather than an agent lifecycle concept.
