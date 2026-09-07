---
package: rjm
name: SKILLCREATOR_CONFIG
slug: skillcreator-config
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKILLCREATOR_CONFIG

## Definition — verbatim
(used, not defined)

> "SKILLCREATOR_CONFIG:" — .claude/skills/skillforge/references/configuration.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/configuration.md | 4 | defined here | Top-level YAML configuration key defining operational settings and thresholds for SkillForge execution. |

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
defects: doc-drift

## Design notes
`SKILLCREATOR_CONFIG` is a top-level YAML configuration key in `references/configuration.md` retaining legacy pre-v4.0.0 naming rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
