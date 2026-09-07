---
package: rjm
name: ADR Quality Checklist
slug: adr-quality-checklist
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/quality-checklist.md, sha256: 8a66e192b59dcb7663bf3a054a57c2655d4d2aaf8c60429ae8ca15c2fa961cf4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Quality Checklist

## Definition — verbatim
> "Self-validation checklist for Phase G4. All items must pass before saving the ADR." — .claude/skills/adr-generator/references/quality-checklist.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/quality-checklist.md | 1 | defines | Document title and self-validation checklist enforcing quality, completeness, and governance before saving an ADR. |

## Consumes
Draft ADR document generated in Phase G3.

## Produces
Validation findings covering structural completeness, content quality, conditional sections, and governance rules.

## When applied
Mandatory gate applied during Phase G4 of ADR generation prior to saving to disk.

## Sub-concepts
structural-completeness, content-quality, governance

## Part of
none

## Implementation status
clean

## Design notes
A formal self-validation checklist used during Phase G4 of ADR generation to verify that an ADR meets structural completeness, content rigor, conditional section criteria, and governance standards before it can be written to disk. It acts as an automated quality gate preventing placeholder content, missing trade-offs, and premature status promotion.
