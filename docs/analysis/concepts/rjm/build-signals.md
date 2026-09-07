---
package: rjm
name: build_signals
slug: build-signals
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_signals

## Definition — verbatim
(used, not defined)

> "def build_signals(env: dict[str, str]) -> list[str]:" — scripts/quality_gate/external_signal_gate.py:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/external_signal_gate.py | 143 | defined here | Helper function returning the aggregated signal argument list for gate_aggregator from environment variables. |
| scripts/quality_gate/spec_external_signal_gate.py | 130 | defined here | Helper function returning signal arguments combining acceptance criteria and agent verdicts for spec gate aggregation. |

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
build_signals is a Python helper function identifier in quality gate scripts constructing command-line arguments for gate_aggregator rather than an autonomous lifecycle concept.
