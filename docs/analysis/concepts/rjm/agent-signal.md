---
package: rjm
name: agent_signal
slug: agent-signal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
