---
package: rjm
name: Phase G4: Validate
slug: phase-g4-validate
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase G4: Validate

## Definition — verbatim
(used, not defined)

> "### Phase G4: Validate" — .claude/skills/adr-generator/SKILL.md:174

## Also called — verbatim
`Phase G4` — .claude/skills/adr-generator/references/quality-checklist.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 174 | defines | Fourth phase in ADR generator workflow conducting self-validation against the quality checklist before saving. |

## Consumes
Draft ADR produced in Phase G3 and the ADR Quality Checklist.

## Produces
Validated ADR passing all structural, content, conditional, and governance checks.

## When applied
Executed immediately before saving the ADR to disk.

## Sub-concepts
adr-quality-checklist

## Part of
adr-generator

## Implementation status
clean

## Design notes
The self-validation phase of the ADR generator workflow. In Phase G4, the generator runs a comprehensive self-check against the ADR Quality Checklist to ensure structural completeness, absence of duplicate numbers, balanced trade-offs, and compliance with governance rules before any file is saved.
