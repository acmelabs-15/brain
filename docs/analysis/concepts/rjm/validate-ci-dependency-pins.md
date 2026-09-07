---
package: rjm
name: validate_ci_dependency_pins
slug: validate-ci-dependency-pins
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_ci_dependency_pins

## Definition — verbatim
(used, not defined)

> "def validate_ci_dependency_pins(repo_root: Path) -> bool:" — scripts/validation/checks_tooling.py:524

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 40 | used here | Cited as the pre-PR validation function entry point binding pin checks into the local gate runner. |
| scripts/validation/checks_tooling.py | 524 | defined here | Pre-PR validation function comparing CI workflow pins against pyproject.toml constraints. |

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
defects: doc-drift, other, exit-code-mismatch

## Design notes
`validate_ci_dependency_pins` is a Python validation function identifier in `checks_tooling.py` verifying CI dependency pins against `pyproject.toml` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
