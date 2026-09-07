---
package: rjm
name: AGENT_REGISTRY
slug: agent-registry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AGENT_REGISTRY

## Definition — verbatim
(used, not defined)

> "AGENT_REGISTRY: dict[str, str] = {" — scripts/eval/eval-e2e-delivery.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-e2e-delivery.py | 67 | defined here | Mapping linking evaluated agent names to their prompt definition paths on disk. |

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
A Python dictionary constant (`AGENT_REGISTRY`) in `eval-e2e-delivery.py` resolving agent keys to file paths, classified as `name-only` per D-023.
