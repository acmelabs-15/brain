---
package: rjm
name: refuse_unsafe_baseline_write
slug: refuse-unsafe-baseline-write
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# refuse_unsafe_baseline_write

## Definition — verbatim
(used, not defined)

> "def refuse_unsafe_baseline_write(" — scripts/validation/portability_common.py:433

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 36 | used here | Imported to guard baseline overwrites against uncovered roots, symlinks, and dropped entries. |
| scripts/validation/check_skill_md_portability.py | 109 | used here | Imported to prevent unvetted or unsafe baseline rewrites during portability validation. |
| scripts/validation/portability_common.py | 433 | defined here | Function evaluating coverage, symlinks, and predecessor baselines to decide if a rewrite is safe. |

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
clean in scripts/validation/portability_common.py; defects: other in scripts/validation/check_skill_md_exec_portability.py, doc-drift in scripts/validation/check_skill_md_portability.py

## Design notes
A guard function enforcing ratchet update safety checks rather than an agent lifecycle concept.
