---
package: rjm
name: build_agent_user_message
slug: build-agent-user-message
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_agent_user_message

## Definition — verbatim
(used, not defined)

> "def build_agent_user_message(germ: str) -> str:" — scripts/eval/_e2e_delivery_core.py:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 153 | defined here | Helper function formatting the user turn presented to the agent under test from a vague prompt germ. |

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
clean

## Design notes
A Python prompt construction helper function in `_e2e_delivery_core.py` combining a task germ with planning instructions, classified as `name-only` per D-023.
