---
package: rjm
name: refuse_symlinked_baseline
slug: refuse-symlinked-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# refuse_symlinked_baseline

## Definition — verbatim
(used, not defined)

> "refuse_symlinked_baseline" — scripts/validation/portability_baseline.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 48 | used here | Imported from portability_baseline module for symlink validation on test baselines. |
| scripts/validation/check_vendor_portability.py | 90 | used here | Imported from portability_baseline to verify baseline paths are not reached via symlinks. |
| scripts/validation/portability_baseline.py | 54 | defined here | Exported in __all__ as public symlinked and repository-escaping baseline check. |

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
A validation guard function in `scripts/validation/portability_baseline.py` preventing symlink traversal out of tracked paths, classified as `name-only` per D-023.
