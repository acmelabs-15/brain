---
package: rjm
name: agent_signal
slug: agent-signal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# agent_signal

## Definition — verbatim
(used, not defined)

> "def agent_signal(agent: str, verdict: str) -> str:" — scripts/quality_gate/external_signal_gate.py:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/external_signal_gate.py | 94 | defined here | Helper function returning an LLM agent signal specification for gate_aggregator with aliased verdict tokens. |
| scripts/quality_gate/spec_external_signal_gate.py | 101 | defined here | Helper function returning an LLM agent signal specification for spec validation gate aggregation. |

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
agent_signal is a Python helper function identifier in quality gate scripts formatting agent review verdicts into gate-aggregator signal specifications rather than an autonomous lifecycle concept.
