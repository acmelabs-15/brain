---
package: rjm
name: MAX_BASELINE_SCORE
slug: max-baseline-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MAX_BASELINE_SCORE

## Definition — verbatim
(used, not defined)

> "MAX_BASELINE_SCORE = 3" — scripts/validation/agent_skill_discriminator_baseline.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 64 | defined here | Constant defining maximum allowable baseline score for discriminator ratchet validation. |

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
`MAX_BASELINE_SCORE` is an integer constant setting the upper bound (3) for valid agent-skill discriminator scores rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
