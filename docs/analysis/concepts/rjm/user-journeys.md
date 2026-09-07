---
package: rjm
name: user_journeys
slug: user-journeys
kind: name-only
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# user_journeys

## Definition — verbatim
(used, not defined)

> "user_journeys:" — .claude/skills/slo-designer/templates/slo-config-template.yaml:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 11 | defined here | Root configuration key listing critical user journeys that define customer satisfaction requirements. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
slo-configuration-template

## Implementation status
defects: orphan, internal-contradiction

## Design notes
user_journeys is a YAML configuration schema property key in slo-config-template.yaml enumerating critical user journeys rather than a standalone lifecycle concept, classified as name-only per D-023.
