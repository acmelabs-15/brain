---
package: rjm
name: step_2_decide
slug: step-2-decide
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step_2_decide

## Definition — verbatim
> "Select approach. Record in Decision Log with MULTI-STEP chain:" — .claude/skills/planner/scripts/planner.py:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 216 | defined here | Directive requiring multi-step reasoning chains for selected architectural and micro-decisions. |

## Consumes
Evaluated candidate approaches and trade-off comparisons from Step 2.

## Produces
Selected approach recorded in the Decision Log with detailed multi-step causal reasoning chains covering both architecture and micro-decisions.

## When applied
Applied in Step 2 of planning once candidate evaluation is complete.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A decision logging protocol requiring multi-step causal chains rather than superficial one-line justifications, ensuring that architectural decisions and micro-decisions are fully defensible.
