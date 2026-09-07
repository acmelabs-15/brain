---
package: rjm
name: Architecture Pattern Selection
slug: architecture-pattern-selection
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architecture Pattern Selection

## Definition — verbatim
(used, not defined)

> "Architecture Pattern Selection, Selection Decision Tree" — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 43 | used here | Table entry identifying extracted architecture pattern selection guidelines and decision tree. |

## Consumes
Task complexity requirements, procedural ordering, and execution autonomy requirements.

## Produces
Selection of a standardized skill architecture pattern (Single-Phase, Checklist, Generator, Multi-Phase, Multi-Agent Parallel/Sequential, or Orchestrator).

## When applied
Applied during Phase 2 Specification and Evolution analysis when structuring new or refactored skills.

## Sub-concepts
none

## Part of
evolution-and-architecture-selection

## Implementation status
defects: doc-drift, internal-contradiction, orphan

## Design notes
Architecture Pattern Selection is an rjm design technique using a decision tree to evaluate task complexity and determine the structural composition of a skill (e.g. single-phase, checklist, generator, multi-agent).
