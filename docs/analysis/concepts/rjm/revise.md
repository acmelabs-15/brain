---
package: rjm
name: REVISE
slug: revise
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# REVISE

## Definition — verbatim
> "REVISE when ANY of these apply:" — .claude/skills/decision-critic/scripts/decision-critic.py:322

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 52 | used here | Synthesis guidance verdict when scope is unclear or trade-offs are not addressed. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 32 | used here | Halt rule verdict returned for partial-answer rewrite proposals requiring budget or projection clarification. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 322 | defined here | Step 7 synthesis verdict rubric specifying conditions requiring decision revision. |
| .claude/skills/decision-critic/SKILL.md | 34 | defined here | Process synthesis diagram defining REVISE as one of three final decision critique verdicts. |

## Consumes
Verification failures on core claims, unaddressed challenge gaps, or incomplete rewrite projections.

## Produces
A revision directive requiring the proposer to clarify scope, add regression budgets, or resolve identified gaps before re-evaluating.

## When applied
When any FAILED item impacts a core claim, multiple items are UNCERTAIN on feasibility, or borderline between STAND and REVISE.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path

## Design notes
An intermediate gating verdict in the decision critic workflow that prevents premature commitment to flawed proposals while avoiding outright escalation, sending decisions back for refinement when core claims fail verification or critical trade-offs remain unaddressed.
