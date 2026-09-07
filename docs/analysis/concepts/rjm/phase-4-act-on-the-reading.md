---
package: rjm
name: Phase 4: Act on the reading
slug: phase-4-act-on-the-reading
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Act on the reading

## Definition — verbatim
> "### Phase 4: Act on the reading" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 70 | defined here | Defined as the concluding phase of diagnostics, guiding actions based on green, unchanged, or regressed readings. |

## Consumes
Delta evaluation and baseline comparison from Phase 3.

## Produces
An engineering decision: proceed with work, initiate debugging triage, or flag an existing baseline defect.

## When applied
Executed after evaluating the delta in Phase 3.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
The decision-making phase of diagnostics. It prescribes clear courses of action: proceed if green and unchanged, trigger triage via debugging playbooks if a regression occurred, or flag pre-existing baseline issues without attempting silent fixes.
