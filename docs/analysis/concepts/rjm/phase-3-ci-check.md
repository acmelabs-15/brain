---
package: rjm
name: Phase 3 CI check
slug: phase-3-ci-check
kind: name-only
package_phase: none
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

# Phase 3 CI check

## Definition — verbatim
(used, not defined)

> "Phase 3 CI check: detect new agents added in skill shape (Issue #2008)." — scripts/validation/check_agent_skill_discriminator.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 2 | used here | Describes the rollout phase and purpose of the agent-skill discriminator validation check. |

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
A docstring heading and rollout phase label for the discriminator CI check rather than a development lifecycle concept, classified as name-only per D-023.
