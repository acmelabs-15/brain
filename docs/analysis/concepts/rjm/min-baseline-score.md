---
package: rjm
name: MIN_BASELINE_SCORE
slug: min-baseline-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
