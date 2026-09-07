---
package: rjm
name: --allow-baseline-shrink
slug: allow-baseline-shrink
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --allow-baseline-shrink

## Definition — verbatim
(used, not defined)

> "\"--allow-baseline-shrink\"," — scripts/validation/portability_common.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 635 | defined here | CLI option permitting baseline updates that lower or drop recorded agent scores. |
| scripts/validation/portability_baseline.py | 132 | used here | Cited in warning message requiring this flag to confirm deliberate reductions in recorded debt. |
| scripts/validation/portability_common.py | 88 | defined here | CLI option flag permitting baseline updates that drop recorded violations. |
| scripts/validation/portability_floor.py | 126 | used here | Cited in docstring explaining deliberate debt lowering semantics. |

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
--allow-baseline-shrink is a command-line flag identifier requiring explicit confirmation to reduce recorded debt entries in ratchets, classified as name-only per D-023.
