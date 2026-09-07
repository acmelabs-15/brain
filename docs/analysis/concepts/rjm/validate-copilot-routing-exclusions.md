---
package: rjm
name: validate_copilot_routing_exclusions
slug: validate-copilot-routing-exclusions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_copilot_routing_exclusions.py, sha256: d7fae2a3a71646d5de19396107aca1fb122a971001c0c1de52e0e6e995bd1336}
  - {path: scripts/validation/checks_copilot.py, sha256: a87749f06bec537b9a0ba2d61d7ba1cdbef072251d599d7518826aa0d3b22bdd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_copilot_routing_exclusions

## Definition — verbatim
(used, not defined)

> "def validate_copilot_routing_exclusions(repo_root: Path) -> bool:" — scripts/validation/check_copilot_routing_exclusions.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 81 | defined here | Primary entrypoint function returning True when shipped Copilot skills contain no routing to excluded skills. |
| scripts/validation/checks_copilot.py | 11 | defined here | Wrapper function delegating to `check_copilot_routing_exclusions` while catching missing template errors. |

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
A Python validation function in `check_copilot_routing_exclusions.py` and `checks_copilot.py` verifying Copilot skills do not route to excluded skills, classified as name-only per D-023.
