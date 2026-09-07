---
package: rjm
name: [skill-discriminator: <rationale>]
slug: skill-discriminator-rationale
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

# [skill-discriminator: <rationale>]

## Definition — verbatim
(used, not defined)

> "The PR description carries the token ``[skill-discriminator: <rationale>]``" — scripts/validation/check_agent_skill_discriminator.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 31 | defined here | Token specification permitting PR authors to override discriminator failures with an explicit rationale. |

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
[skill-discriminator: <rationale>] is a PR description override token syntax used to exempt skill-shaped agents, classified as name-only per D-023.
