---
package: rjm
name: Planning Artifacts
slug: planning-artifacts
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Planning Artifacts

## Definition — verbatim
> "Planning Artifacts" — scripts/validation/pre_pr_sequence.py:361

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 361 | defined here | Pre-PR validation gate running validate_planning_artifacts to enforce planning consistency. |
| scripts/validation/pre_pr.py | 19 | used here | Documented as step 11 in the pre-PR validation sequence list. |

## Consumes
Planning documents and execution plans in `.agents/plans/`.

## Produces
Pass/fail verification verdict on planning artifact consistency and structure.

## When applied
Run during the pre-PR validation sequence; skipped when the `--quick` flag is supplied or when already passed via the `planning-artifacts` pre-push job.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
defects: doc-drift

## Design notes
A quality gate in the pre-PR validation sequence that validates planning artifacts across `.agents/plans/` for consistency, required sections, and schema conformity. It is skipped in `--quick` mode and bypassed during pre-PR runs if already executed during fast-stage pre-push checks (`already_run_by="planning-artifacts"`).
