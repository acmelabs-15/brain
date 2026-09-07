---
package: rjm
name: pytest_signal
slug: pytest-signal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# pytest_signal

## Definition — verbatim
(used, not defined)

> "def pytest_signal(pytest_status: str) -> str:" — scripts/quality_gate/external_signal_gate.py:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/external_signal_gate.py | 87 | defined here | Helper function returning an external signal specification for the gate aggregator based on pytest status. |

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
pytest_signal is a Python function identifier in external_signal_gate.py formatting pytest execution status into gate-aggregator signal specifications rather than an autonomous lifecycle concept.
