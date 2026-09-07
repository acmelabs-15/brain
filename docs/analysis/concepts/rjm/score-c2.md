---
package: rjm
name: score_c2
slug: score-c2
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# score_c2

## Definition — verbatim
(used, not defined)

> "def score_c2(body: str) -> tuple[bool, float]:" — scripts/validation/check_agent_skill_discriminator.py:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 279 | defined here | Evaluates an agent body against the structured-reference density threshold. |

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
defects: missing-path, other

## Design notes
score_c2 is a Python function identifier calculating the structured-reference ratio for discriminator scoring, classified as name-only per D-023.
