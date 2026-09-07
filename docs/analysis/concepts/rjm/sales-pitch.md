---
package: rjm
name: Sales Pitch
slug: sales-pitch
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sales Pitch

## Definition — verbatim
> "Marketing language, exaggerations, unverifiable adjectives" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 106 | defines | Tabulated under Subjectivity anti-patterns as marketing language, exaggerations, and unverifiable adjectives. |
| .claude/skills/adr-generator/SKILL.md | 206 | applies | Listed in common anti-patterns table instructing that marketing language erodes trust and mandating precise, quantifiable technical language. |

## Consumes
Descriptive prose and rhetorical framing within architectural proposals.

## Produces
Style defect requiring replacement of marketing buzzwords and unverifiable claims with quantifiable technical statements.

## When applied
Enforced during ADR drafting and review to purge marketing rhetoric, unsubstantiated hype, and superlative adjectives from engineering records.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Sales Pitch occurs when an ADR adopts promotional marketing language (e.g., 'effortless', 'blazing-fast', 'industry standard') instead of objective engineering terminology. In rjm's architecture discipline, sales rhetoric erodes technical credibility and obscures true trade-offs; detecting Sales Pitch triggers a demand for concrete, measurable, and falsifiable technical justifications.
