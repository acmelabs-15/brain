---
package: rjm
name: build_pytest_command
slug: build-pytest-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_pytest_command

## Definition — verbatim
(used, not defined)

> "def build_pytest_command() -> list[str]:" — scripts/quality_gate/run_pytest.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 69 | defined here | Function constructing the CLI invocation for pytest, preferring uv run when available with fallback to python -m pytest. |

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
defects: orphan

## Design notes
build_pytest_command is a Python function identifier in run_pytest.py generating the test runner command list rather than an autonomous lifecycle concept.
