---
package: rjm
name: Structural Completeness
slug: structural-completeness
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

# Structural Completeness

## Definition — verbatim
(used, not defined)

> "## Structural Completeness" — .claude/skills/adr-generator/references/quality-checklist.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/quality-checklist.md | 5 | defines | Checklist section verifying template-required sections, number uniqueness, kebab-slug title matching, naming conventions, Proposed status, and date format. |

## Consumes
Draft ADR file and detected repository template specification.

## Produces
Verification that all required structural sections and metadata fields are present and valid.

## When applied
During Phase G4 self-validation of an ADR.

## Sub-concepts
none

## Part of
adr-quality-checklist

## Implementation status
clean

## Design notes
A primary checklist category in the ADR Quality Checklist ensuring that an ADR possesses all template-mandated sections, adheres to file naming and numbering conventions, contains a descriptive title matching its filename slug, and maintains an initial status of Proposed.
