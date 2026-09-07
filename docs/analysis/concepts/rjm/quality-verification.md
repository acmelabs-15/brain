---
package: rjm
name: Quality Verification
slug: quality-verification
kind: checklist
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

# Quality Verification

## Definition — verbatim
> "### 4.2 Quality Verification" — .claude/skills/prompt-engineer/references/workflow.md:277
> "Verify the optimized prompt by asking open verification questions about each major change:" — .claude/skills/prompt-engineer/references/workflow.md:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 277 | defined here | Defined as a verification protocol using open-ended diagnostic questions to test prompt changes against unintended behaviors. |

## Consumes
Significant prompt modifications and their declared intended behavioral effects.

## Produces
Documented assessment answering open diagnostic questions to validate behavior before final presentation.

## When applied
In Phase 4 of prompt optimization prior to presenting the completed prompt for user approval.

## Sub-concepts
none

## Part of
full-process

## Implementation status
clean

## Design notes
Quality Verification mandates the use of open-ended diagnostic questions ("What behavior will this produce in edge cases?") rather than leading confirmation questions ("Is this correct?"). By actively seeking edge case failures and misinterpretations, it uncovers silent prompt regressions before the prompt is deployed.
