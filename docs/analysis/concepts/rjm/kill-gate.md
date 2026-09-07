---
package: rjm
name: KILL GATE
slug: kill-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KILL GATE

## Definition — verbatim
> "KILL GATE: {gate['verdict']} ({'PASS' if gate['passed'] else 'FAIL'})" — scripts/eval/eval-knowledge-integration.py:737

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-knowledge-integration.py | 737 | defined here | Printed in assessment summary table rendering final quality gate verdict and pass/fail exit condition. |

## Consumes
Calculated baseline and enhanced scores, deltas across evaluated skills, and regression indicators.

## Produces
Binary process exit verdict (0 for pass, 1 for fail) and categorical judgment (PROCEED, CONDITIONAL, STOP, NO_DATA).

## When applied
At the conclusion of skill evaluation suites before merging or releasing updated skills.

## Sub-concepts
- no-data

## Part of
skill-knowledge-integration-assessment

## Implementation status
defects: doc-drift

## Design notes
A quality gate in rjm that enforces performance thresholds on skills, terminating execution with an error exit code if a skill fails to demonstrate measurable value addition or suffers regression relative to baseline unassisted models.
