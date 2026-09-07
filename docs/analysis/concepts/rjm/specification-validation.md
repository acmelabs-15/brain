---
package: rjm
name: Specification Validation
slug: specification-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase2-specification-deep-dive.md, sha256: c290149e8372d86a6cdc5ec7c1b56975781fb6a1b175ce635f6e82282209a307}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Specification Validation

## Definition — verbatim
> "## Specification Validation" — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase2-specification-deep-dive.md | 56 | defined here | Section heading and pre-Phase 3 checklist validating specification completeness and quality. |
| .claude/skills/skillforge/references/specification-template.md | 380 | defined here | Markdown heading within template checklist validating specification completeness and quality. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 39 | used here | Table row recording extraction of Specification Validation into references/phase2-specification-deep-dive.md. |

## Consumes
Completed XML skill specification document.

## Produces
Validation pass verdict authorizing transition into Phase 3 (Generation).

## When applied
Applied as a mandatory quality gate before initiating skill code and documentation generation.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Specification Validation is the quality gate between Phase 2 (Specification) and Phase 3 (Generation). In rjm, it strictly checks for missing placeholders, verified timelessness scores (>=7), explicit WHY rationale for every decision, and traceable requirements before artifact generation begins.
