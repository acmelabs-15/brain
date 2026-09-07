---
package: rjm
name: _agent_name_arg
slug: agent-name-arg
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _agent_name_arg

## Definition — verbatim
(used, not defined)

> "def _agent_name_arg(value: str) -> str:" — scripts/eval/eval-model-sweep.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-sweep.py | 93 | defined here | CLI argument type validator function ensuring agent names match regex format. |

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
defects: missing-path, doc-drift

## Design notes
An internal CLI argument validator function identifier for agent names, classified as name-only per D-023.
