---
package: rjm
name: Multi-Phase
slug: multi-phase
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-Phase

## Definition — verbatim
> "| **Multi-Phase** | Complex ordered workflows | Phase 1 → Phase 2 → Phase 3 |" — .claude/skills/skillforge/references/architecture-patterns.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/architecture-patterns.md | 10 | defined here | Architecture patterns table entry defining Multi-Phase for complex ordered workflows sequenced as Phase 1 → Phase 2 → Phase 3. |

## Consumes
Multi-step, complex lifecycle workflows with ordered dependencies between stages.

## Produces
A structured, phased workflow specification with discrete phase gates and intermediate artifacts.

## When applied
Selected when tasks are too intricate for a single linear pass and require distinct preparatory, execution, and verification phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Multi-Phase is an architectural workflow pattern in SkillForge that decomposes complex tasks into ordered sequential stages with clear phase boundaries, allowing intermediate checkpoints and distinct artifact generation at each stage.
