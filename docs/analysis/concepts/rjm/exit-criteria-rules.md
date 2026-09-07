---
package: rjm
name: Exit Criteria Rules
slug: exit-criteria-rules
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Exit Criteria Rules

## Definition — verbatim
> "Reject any exit criterion that cannot be observed, tested, or scoped." — .claude/agents/milestone-planner.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 87 | defined here | Rule set governing milestone exit criteria (observable, testable, scoped). |
| templates/agents/milestone-planner.shared.md | 90 | defined here | Shared template section enforcing the three mandatory criteria rules for milestones. |

## Consumes
Proposed milestone acceptance conditions.

## Produces
Rigorously filtered exit criteria conforming to observability, testability, and explicit scope bounding.

## When applied
Applied during the authoring and review of milestone exit criteria.

## Sub-concepts
none

## Part of
exit-criteria

## Implementation status
clean

## Design notes
Exit Criteria Rules establish the three non-negotiable qualities of valid milestone exit criteria: observable (third-party verifiable), testable (binary pass/fail), and scoped (prevents scope creep). In rjm, these rules prevent vague criteria like "system feels responsive" from degrading plan execution.
