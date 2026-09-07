---
package: rjm
name: the 3-pipeline rule
slug: the-3-pipeline-rule
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
