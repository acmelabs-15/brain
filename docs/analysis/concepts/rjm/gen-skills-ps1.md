---
package: rjm
name: gen-skills.ps1
slug: gen-skills-ps1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/steering-matcher.skill, sha256: 528fcbe473cd2fe26f50130e3972a84a6646f17661f43330673cf4b74700362b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gen-skills.ps1

## Definition — verbatim
(used, not defined)

> "# Regenerate: pwsh ./scripts/gen-skills.ps1" — .claude/skills/steering-matcher/steering-matcher.skill:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/steering-matcher.skill | 11 | used here | Referenced in comment header as the PowerShell generation script used to regenerate .skill files. |

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
`gen-skills.ps1` is a PowerShell build script filename referenced in generated skill comments rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
