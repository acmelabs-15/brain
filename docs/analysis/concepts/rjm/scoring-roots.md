---
package: rjm
name: SCORING_ROOTS
slug: scoring-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SCORING_ROOTS

## Definition — verbatim
(used, not defined)

> "SCORING_ROOTS: tuple[str, ...] = AGENT_CORPUS_ROOTS + COMMAND_ROOTS" — scripts/validation/agent_skill_discriminator_baseline.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 50 | defined here | Constant tuple combining agent and command roots used by dirty-state baseline guard. |

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
`SCORING_ROOTS` is a constant tuple identifier combining agent and command root paths to guard against dirty working tree state during baseline updates rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
