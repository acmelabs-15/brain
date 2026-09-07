---
package: rjm
name: Selection Decision Tree
slug: selection-decision-tree
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Selection Decision Tree

## Definition — verbatim
> "## Selection Decision Tree" — .claude/skills/skillforge/references/architecture-patterns.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/architecture-patterns.md | 15 | defined here | Section heading providing a decision tree to choose among Single-Phase, Generator, Checklist, Multi-Agent Parallel, Multi-Agent Sequential, and Multi-Phase. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 43 | used here | Transformation notes entry listing the decision tree as part of extracted architectural patterns. |

## Consumes
Task characteristics including procedural simplicity, artifact production, audit requirements, and subtask independence.

## Produces
Recommended architecture pattern for the skill being created.

## When applied
Applied during Phase 1/Phase 2 when architecting the skill structure.

## Sub-concepts
none

## Part of
architecture-patterns

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
The Selection Decision Tree provides a deterministic branching rubric that guides authors to select the most appropriate structural pattern (Single-Phase, Generator, Checklist, Multi-Agent Parallel, or Multi-Phase) based on task complexity and execution dynamics.
