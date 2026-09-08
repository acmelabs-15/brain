---
package: rjm
name: Session End Validation
slug: session-end-validation
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Session End Validation

## Definition — verbatim
> "Session End Validation" — scripts/validation/pre_pr_sequence.py:247

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 247 | defined here | Pre-PR validation gate verifying that session-end protocol requirements and handoffs are satisfied. |

## Consumes
Session handoff records and working tree state at the conclusion of an agent session.

## Produces
Pass/fail validation verdict verifying session closeout compliance before PR creation.

## When applied
During pre-PR validation sequence execution prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Session closeout gate ensuring that agent session handoffs and protocol criteria are verified before changes can be bundled into a pull request.
