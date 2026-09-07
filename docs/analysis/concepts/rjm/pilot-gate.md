---
package: rjm
name: Pilot gate
slug: pilot-gate
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pilot gate

## Definition — verbatim
> "**Pilot gate (P0 risk R1 mitigation)**: Before committing, run a single agent-discriminating fixture from this batch through both variants live (one fixture × 2 variants = 2 API calls)." — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 181 | defined here | Defined as a P0 risk mitigation gate requiring live confirmation that naive baseline fails a fixture before committing corpus files. |

## Consumes
agent-discriminating-fixtures

## Produces
pilot-validation-result

## When applied
> "Before committing, run a single agent-discriminating fixture from this batch through both variants live" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:181

## Sub-concepts
none

## Part of
task-004

## Implementation status
defects: doc-drift

## Design notes
A quality gate executed prior to committing evaluation fixtures in an eval spike. It mandates running a single discriminating fixture live against both baseline and agent variants to verify that the baseline actually fails the test, ensuring evaluation budgets are not squandered on fixtures that fail to measure agent lift.
