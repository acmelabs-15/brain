---
package: rjm
name: _has_regression_arguments
slug: has-regression-arguments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _has_regression_arguments

## Definition — verbatim
(used, not defined)

> "def _has_regression_arguments(line: str) -> bool:" — scripts/validation/check_build_gates.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 88 | defined here | Helper function checking whether code-qualities-assessment invocation includes regression flags. |

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
defects: missing-path

## Design notes
`_has_regression_arguments` is an internal Python function identifier in `check_build_gates.py` inspecting command arguments rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
