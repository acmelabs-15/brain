---
package: rjm
name: Generation Order
slug: generation-order
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase3-generation-deep-dive.md, sha256: cd9b8fe32d69e8db40084da5d79f81aa00781b644560daf43cc76502d01fa6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generation Order

## Definition — verbatim
> "## Generation Order" — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase3-generation-deep-dive.md | 6 | defined here | Section heading detailing the step-by-step sequence for generating skill directory and files. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 40 | used here | Table row recording extraction of Generation Order into references/phase3-generation-deep-dive.md. |

## Consumes
Validated skill specification, template assets, and fresh execution context.

## Produces
Sequentially generated skill directory structure, SKILL.md, references/, assets/, and scripts/.

## When applied
Applied throughout Phase 3 (Generation) to guide file synthesis.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Generation Order prescribes a disciplined sequence for creating skill components (directory scaffolding -> SKILL.md -> references -> templates -> scripts -> packaging). In rjm, adhering to this order ensures dependencies are created before they are referenced, preventing dangling paths.
