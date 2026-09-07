---
package: rjm
name: get_agent_weight
slug: get-agent-weight
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
  - {path: scripts/consensus/weights.py, sha256: 22b10a8b11a55f0c1b7e739cc87d38639b97623b5f2e345ad1dcf30642f5ae89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_agent_weight

## Definition — verbatim
(used, not defined)

> "def get_agent_weight(agent: str, domain: DecisionDomain) -> float:" — scripts/consensus/weights.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 28 | used here | Re-exported weight lookup function symbol from weights submodule. |
| scripts/consensus/weights.py | 83 | defined here | Function returning the expertise weight for a given agent in a specific decision domain. |

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
defects: orphan, script-bug

## Design notes
get_agent_weight is a Python helper function identifier in scripts/consensus/weights.py retrieving domain-specific agent weights rather than an operational lifecycle concept.
