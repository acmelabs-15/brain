---
package: rjm
name: Automation Analysis
slug: automation-analysis
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

# Automation Analysis

## Definition — verbatim
> "Identify opportunities for scripts that enable agentic operation:" — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase1-analysis-deep-dive.md | 98 | defined here | Section heading introducing analysis of repeatable and verifiable operations for scripting. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 38 | used here | Table row recording extraction of Automation Analysis into references/phase1-analysis-deep-dive.md. |

## Consumes
Skill procedural operations, verification requirements, and state persistence needs.

## Produces
Categorized automation script proposals (validation, generation, state management, calculation).

## When applied
Applied in Step 1D of Phase 1 (Deep Analysis) to determine tool and script boundaries.

## Sub-concepts
- decision-script-vs-no-script

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Automation Analysis evaluates skill steps to identify operations that should be delegated to deterministic Python scripts rather than pure model prompt reasoning. In rjm, this enables skills to achieve agentic autonomy and self-verification.
