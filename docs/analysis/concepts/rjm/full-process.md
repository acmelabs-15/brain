---
package: rjm
name: Full Process
slug: full-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Full Process

## Definition — verbatim
> "### Full Process (Complex Prompts)" — .claude/skills/prompt-engineer/references/workflow.md:33
> "Proceed to Phase 1." — .claude/skills/prompt-engineer/references/workflow.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 33 | defined here | Defined as the comprehensive four-phase workflow for optimizing complex, multi-section system prompts. |

## Consumes
Complex prompts featuring multiple functional sections, conditional behaviors, tool orchestration, or documented failure modes.

## Produces
Rigorous prompt overhaul spanning operating context analysis, visual card planning, change execution, and holistic integration checks.

## When applied
During Phase 0 Triage when prompt complexity warrants full human-in-the-loop decomposition and review.

## Sub-concepts
operating-context, current-state-assessment, visual-card-layout, integration-checks, quality-verification, completion-checkpoint

## Part of
prompt-optimizer

## Implementation status
clean

## Design notes
Full Process executes an end-to-end optimization lifecycle for complex system prompts. Spanning four structured phases (understand, plan with visual cards, execute, integrate and verify), it ensures that multi-section interactions and tool integrations are comprehensively analyzed and approved before modification.
