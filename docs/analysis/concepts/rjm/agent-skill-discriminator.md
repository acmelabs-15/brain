---
package: rjm
name: agent-skill discriminator
slug: agent-skill-discriminator
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# agent-skill discriminator

## Definition — verbatim
(used, not defined)

> "Full-corpus baseline ratchet for the agent-skill discriminator (issue #4087)." — scripts/validation/agent_skill_discriminator_baseline.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 1 | used here | Baseline ratchet module docstring citing the discriminator mechanism being protected. |

## Consumes
Agent definition files located in agent corpus roots (`.claude/agents/`, `templates/agents/`).

## Produces
Heuristic discriminator score and baseline comparison verdict preventing skill-shaped agent definitions.

## When applied
Executed during CI verification to evaluate whether agent definitions exceed skill-shape thresholds.

## Sub-concepts
none

## Part of
agent-system

## Implementation status
defects: missing-path

## Design notes
A validation gate and heuristic scoring mechanism in rjm that prevents agents from being implemented when their behavior and scope should be structured as skills, protected by baseline ratchets to avoid spurious CI failures on legacy agents.
