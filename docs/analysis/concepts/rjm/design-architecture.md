---
package: rjm
name: Design/Architecture
slug: design-architecture
kind: role
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design/Architecture

## Definition — verbatim
> "| **Design/Architecture** | Structure, patterns, correctness | Pattern appropriate, phases logical, no circular deps | Always |" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 11 | defined here | Core synthesis panel agent evaluating structural soundness, pattern fit, and absence of circular dependencies. |

## Consumes
Generated skill structure, pattern choices, and workflow phases.

## Produces
Architectural score (1-10), strengths, and issue descriptions with required remediation.

## When applied
Always active during Phase 4 synthesis panel evaluation.

## Sub-concepts
none

## Part of
panel-composition

## Implementation status
clean

## Design notes
A permanent evaluative agent role on the SkillForge synthesis panel focused on ensuring skills adhere to sound software architecture, logical phase sequencing, and appropriate pattern selection.
