---
package: rjm
name: run_pytest
slug: run-pytest
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# run_pytest

## Definition — verbatim
(used, not defined)

> "def run_pytest(command: list[str], timeout: float, cwd: Path | None = None) -> tuple[str, str]:" — scripts/quality_gate/run_pytest.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 85 | defined here | Function executing the pytest subprocess under a bounded timeout and returning the status and summary tuple. |

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
run_pytest is a Python function identifier in run_pytest.py managing subprocess execution and error capturing for the pytest suite rather than an autonomous lifecycle concept.
