---
package: rjm
name: --update-baseline
slug: update-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# --update-baseline

## Definition — verbatim
(used, not defined)

> "\"--update-baseline\"," — scripts/validation/portability_common.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 626 | defined here | CLI option directing the discriminator to score the full corpus and write baseline scores. |
| scripts/validation/portability_common.py | 83 | defined here | CLI option directing portability validators to rewrite baseline JSON files. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Cited in baseline comment as the command flag used to generate the baseline file. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Cited in baseline comment as the command flag used to generate the baseline file. |
| scripts/validation/skill_portability_baseline.json | 2 | used here | Cited in baseline comment as the command flag used to generate the baseline file. |

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
--update-baseline is a command-line flag identifier used across validation scripts to record and ratify baseline debt thresholds, classified as name-only per D-023.
