---
package: rjm
name: REPOSITORY_ROOT
slug: repository-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REPOSITORY_ROOT

## Definition — verbatim
(used, not defined)

> "REPOSITORY_ROOT = Path(__file__).resolve().parents[2]" — scripts/quality_gate/path_utils.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/path_utils.py | 7 | defined here | Constant defining the repository root directory as two levels above path_utils.py for path resolution. |

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
REPOSITORY_ROOT is a Python module-level constant identifier in path_utils.py locating the repository root directory rather than an autonomous lifecycle concept.
