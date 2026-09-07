---
package: rjm
name: Input Expansion
slug: input-expansion
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase1-analysis-deep-dive.md, sha256: 242427fcc7271d76c15e9d96a0388cdb21f1dc97ee092f69c1bc77685887235f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Input Expansion

## Definition — verbatim
> "Transform user's goal into comprehensive requirements:" — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase1-analysis-deep-dive.md | 3 | defined here | Section heading introducing requirements extraction from raw user input. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 38 | used here | Table row recording extraction of Input Expansion from SKILL.md into references/phase1-analysis-deep-dive.md. |

## Consumes
Brief user prompts and high-level goal statements.

## Produces
Structured explicit requirements, implicit expectations, and existing ecosystem landscape mappings.

## When applied
Applied in Step 1A of Phase 1 (Deep Analysis) when initiating skill design.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Input Expansion systematically unpacks a terse user prompt into explicit, implicit, and discovered requirements. In rjm, it ensures the skill author does not merely implement the literal words requested, but designs for the complete problem space and operational context.
