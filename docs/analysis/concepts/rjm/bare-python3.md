---
package: rjm
name: bare-python3
slug: bare-python3
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# bare-python3

## Definition — verbatim
> "Detect bare-python3 documentation pointing to scripts that import third-party deps." — scripts/validation/check_python3_entrypoints.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 2 | defined here | Module docstring defines the pattern of invoking scripts directly via bare python3 rather than uv run. |

## Consumes
Python scripts with standard library dependencies only.

## Produces
Direct script execution using the system interpreter without virtual environment activation.

## When applied
Applied when invoking utility scripts that do not require external packages, and restricted when scripts declare third-party imports.

## Sub-concepts
third-party-deps

## Part of
none

## Implementation status
defects: orphan

## Design notes
An execution pattern in rjm referring to running scripts via the bare system python3 interpreter, which only resolves standard library modules and fails if third-party packages are imported.
