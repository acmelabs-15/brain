---
package: addy
name: Parallel fan-out with merge
slug: parallel-fan-out-with-merge
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Parallel fan-out with merge

## Definition — verbatim
> "Multiple personas operate on the same input concurrently, each producing an independent report. A merge step (in the main agent's context) synthesizes them into a single decision." — references/orchestration-patterns.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 48 | defined here | Pattern catalog entry detailing concurrent multi-persona execution against a common artifact followed by a synthesis merge step |

## Consumes
Single input artifact (such as a pull request diff), multiple independent specialist personas, merge synthesis prompt

## Produces
Synthesized multi-perspective decision and actionable output (such as a go/no-go release verdict and rollback plan)

## When applied
When sub-tasks are genuinely independent, sub-agents benefit from isolated context windows, and wall-clock latency matters

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Parallel fan-out with merge coordinates concurrent multi-agent evaluations against a single shared artifact (as demonstrated by /ship dispatching code-reviewer, security-auditor, and test-engineer). Because sub-agents run in isolated context windows without cross-talk, each remains sharply focused on its specific domain; the primary agent then merges their findings into a cohesive verdict without context contamination.
