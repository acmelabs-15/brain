---
package: rjm
name: Irreversibility warning
slug: irreversibility-warning
kind: gate
package_phase: rjm:build
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

# Irreversibility warning

## Definition — verbatim
> "**Irreversibility warning**: T4-5 incurs real Anthropic API cost (~$0.09 at current rates per DESIGN-004) and produces a timestamp-keyed run directory." — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 236 | defined here | Explicit execution warning highlighting irreversible API costs and audit trail generation prior to live spike execution. |

## Consumes
dry-run-validation

## Produces
cost-awareness

## When applied
> "Validate the corpus and runner end-to-end via `--dry-run` before executing live" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:236

## Sub-concepts
none

## Part of
task-execution

## Implementation status
defects: doc-drift

## Design notes
A procedural safeguard highlighted in task definitions alerting engineers and agents to operations that generate real financial costs or permanent audit artifacts. It requires pre-execution dry-run validation to prevent accidental resource expenditure.
