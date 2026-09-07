---
package: rjm
name: halt criterion
slug: halt-criterion
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# halt criterion

## Definition — verbatim
> "This is a **halt criterion**, not a checklist." — .claude/skills/decision-critic/references/rewrite-regression-check.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 20 | defined here | Defines the rewrite-regression check as a halt criterion rather than an advisory checklist. |

## Consumes
Decision evaluation workflows where mandatory preconditions or evidentiary standards must be satisfied.

## Produces
An immediate halt and routing to ESCALATE or REVISE when mandatory criteria are unmet, blocking progress toward a STAND verdict.

## When applied
Whenever a decision under critique fails fundamental evidentiary tests, such as lacking baseline measurements or regression budgets.

## Sub-concepts
none

## Part of
rewrite-regression-check

## Implementation status
defects: missing-path

## Design notes
A non-negotiable operational gate in decision critique that distinguishes blocking failure conditions from passive checklists, strictly forbidding approval (STAND) while load-bearing questions remain unanswered.
