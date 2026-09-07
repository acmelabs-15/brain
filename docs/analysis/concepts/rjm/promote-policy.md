---
package: rjm
name: promote_policy
slug: promote-policy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# promote_policy

## Definition — verbatim
(used, not defined)

> "def promote_policy(policy: dict[str, Any]) -> bool:" — scripts/skillbook.py:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 205 | defined here | Evaluates policy promotion while enforcing monotonic tier invariants and updating status. |

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
defects: doc-drift

## Design notes
promote_policy is a Python function identifier managing policy tier advancement rather than an SDLC lifecycle concept, classified as name-only per D-023.
