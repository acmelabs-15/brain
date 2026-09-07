---
package: rjm
name: score_agent
slug: score-agent
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# score_agent

## Definition — verbatim
(used, not defined)

> "def score_agent(repo_root: Path, agent_path: str, index: PipelineIndex) -> AgentScore:" — scripts/validation/check_agent_skill_discriminator.py:401

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 401 | defined here | Computes criteria c1, c2, and c3 to produce an aggregate score for a specified agent. |

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
score_agent is a Python function identifier orchestrating discriminator scoring for a single agent, classified as name-only per D-023.
