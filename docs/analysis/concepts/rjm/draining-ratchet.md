---
package: rjm
name: draining ratchet
slug: draining-ratchet
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# draining ratchet

## Definition — verbatim
> "Frozen ADR-080 model-pin baseline. Draining ratchet: this count must never grow and should shrink each release until empty." — scripts/validation/model_pin_baseline.json:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_model_pins.py | 4 | used here | Describes enforcement of ADR-080 model pin governance policy via a frozen baseline that burns down over time. |
| scripts/validation/model_pin_baseline.json | 3 | defined here | Defines baseline description stating the count must never grow and should shrink each release until empty. |

## Consumes
Committed baseline configuration files (`model_pin_baseline.json`) and scanned unit frontmatter metadata.

## Produces
Pass/fail verification verdicts ensuring grandfathered legacy configuration counts never increase and burn down over successive releases.

## When applied
Executed in validation gates to enforce deprecation and migration governance while grandfathering existing legacy debt.

## Sub-concepts
none

## Part of
ratchet

## Implementation status
clean

## Design notes
A draining ratchet is a governance and validation technique in rjm where legacy technical debt (specifically versioned model pins under ADR-080) is grandfathered into a frozen baseline whose entry count is strictly forbidden from increasing and must burn down over successive releases until fully eliminated.
