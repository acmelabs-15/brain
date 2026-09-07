---
package: rjm
name: EXIT_DRIFT
slug: exit-drift
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruleset_context_drift.py, sha256: 56755ce625991eaa7f74bbf22bcef3c07df5e6257092da96e537c4cb4875062d}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_DRIFT

## Definition — verbatim
(used, not defined)

> "EXIT_DRIFT = 1" — scripts/ci/ruleset_context_drift.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruleset_context_drift.py | 37 | defined here | Constant exit code 1 signaling drift detected between ruleset required contexts and live GitHub repository settings. |
| scripts/validation/check_ruleset_params_drift.py | 29 | defined here | Constant exit code 1 indicating ruleset parameter values drift from baseline configurations. |
| scripts/validation/check_shipped_skill_routes.py | 283 | defined here | Constant exit code 1 denoting route drift between shipped skills and routing definitions. |

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
defects: orphan, exit-code-mismatch

## Design notes
`EXIT_DRIFT` is an exit code constant in drift checking scripts signaling detected drift between baseline configurations and active repository state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
