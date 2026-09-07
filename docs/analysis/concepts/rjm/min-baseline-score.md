---
package: rjm
name: MIN_BASELINE_SCORE
slug: min-baseline-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_skill_discriminator_baseline.py, sha256: 25e7f6b164c7be6361c22acacc683a54b4b053fb01051e8c0643d223f09dfef3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MIN_BASELINE_SCORE

## Definition — verbatim
(used, not defined)

> "MIN_BASELINE_SCORE = 0" — scripts/validation/agent_skill_discriminator_baseline.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 63 | defined here | Constant defining minimum allowable baseline score for discriminator ratchet validation. |

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
defects: missing-path

## Design notes
`MIN_BASELINE_SCORE` is an integer constant setting the lower bound (0) for valid agent-skill discriminator scores rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
