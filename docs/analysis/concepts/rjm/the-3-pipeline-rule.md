---
package: rjm
name: the 3-pipeline rule
slug: the-3-pipeline-rule
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
---

# the 3-pipeline rule

## Definition — verbatim
> "fewer than 3 distinct pipelines (the 3-pipeline rule). c3 is N/A (scores 0)" — scripts/validation/check_agent_skill_discriminator.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 22 | defined here | Defines the pipeline threshold under which discriminator criterion c3 evaluates skill-shape candidacy. |

## Consumes
Distinct slash-command pipeline count invoking an agent.

## Produces
Exemption or evaluation verdict for criterion c3 in the agent-skill discriminator.

## When applied
Evaluated during discriminator scoring to exempt cross-cutting agents from skill-shape penalties.

## Sub-concepts
pipeline-rule-limit

## Part of
discriminator

## Implementation status
defects: missing-path, other

## Design notes
The 3-pipeline rule prevents cross-cutting agents invoked across three or more distinct slash-command pipelines from being penalized as skills under discriminator criterion c3.
