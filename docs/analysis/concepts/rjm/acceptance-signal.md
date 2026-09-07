---
package: rjm
name: acceptance_signal
slug: acceptance-signal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# acceptance_signal

## Definition — verbatim
(used, not defined)

> "def acceptance_signal(body: str) -> str:" — scripts/quality_gate/spec_external_signal_gate.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/spec_external_signal_gate.py | 95 | defined here | Function returning an external acceptance-criteria signal specification for gate_aggregator. |

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
acceptance_signal is a Python helper function identifier in spec_external_signal_gate.py formatting deterministic acceptance criteria results for gate_aggregator rather than an autonomous lifecycle concept.
