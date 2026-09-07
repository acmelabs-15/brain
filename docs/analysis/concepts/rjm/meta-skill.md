---
package: rjm
name: meta-skill
slug: meta-skill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# meta-skill

## Definition — verbatim
(used, not defined)

> "domains: [meta-skill, automation, skill-creation, orchestration, agentic, routing]" — .claude/skills/skillforge/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 14 | defined here | Used as a metadata domain classification tag in frontmatter identifying skills that generate or orchestrate other skills. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
meta-skill is a domain classification metadata tag in skillforge frontmatter describing skills that create or manage other skills, classified as name-only per D-023.
