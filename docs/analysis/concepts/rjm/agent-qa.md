---
package: rjm
name: agent-qa
slug: agent-qa
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent-qa

## Definition — verbatim
(used, not defined)

> "OWNER = \"agent-qa\"" — scripts/eval/software_engineering_library_activation_gate.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 31 | used here | Assigned owner of the activation gate state and subsequent restoration pull requests. |

## Consumes
Test reports, activation threshold breach notifications, and gate failure outputs.

## Produces
Restoration pull requests, bug reports, and quality validation verdicts.

## When applied
Assigned ownership of rollback alerts and responsible for restoring failing rules or fixing test gates.

## Sub-concepts
none

## Part of
quality-assurance

## Implementation status
clean

## Design notes
The quality assurance subagent role in rjm responsible for test enforcement, evaluation monitoring, and authoring restoration pull requests when automated gates fail.
