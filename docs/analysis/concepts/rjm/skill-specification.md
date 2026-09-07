---
package: rjm
name: skill_specification
slug: skill-specification
kind: name-only
package_phase: rjm:Phase 2: Specification
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill_specification

## Definition — verbatim
(used, not defined)

> "<skill_specification version=\"1.0\">" — .claude/skills/skillforge/references/specification-template.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 20 | defined here | Root XML element tag enclosing a SkillForge skill specification document. |

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
clean

## Design notes
skill_specification is the root XML element tag name for skill specification documents rather than an independent lifecycle concept.
