---
package: rjm
name: agent-skill discriminator
slug: agent-skill-discriminator
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_skill_discriminator_baseline.py, sha256: 25e7f6b164c7be6361c22acacc683a54b4b053fb01051e8c0643d223f09dfef3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
