---
package: rjm
name: PIPELINE_RULE_LIMIT
slug: pipeline-rule-limit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PIPELINE_RULE_LIMIT

## Definition — verbatim
(used, not defined)

> "PIPELINE_RULE_LIMIT: int = 3" — scripts/validation/check_agent_skill_discriminator.py:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 111 | defined here | Defines the distinct pipeline count limit constant for the 3-pipeline rule. |

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
PIPELINE_RULE_LIMIT is a Python constant identifier specifying the cutoff for the 3-pipeline rule in check_agent_skill_discriminator.py, classified as name-only per D-023.
