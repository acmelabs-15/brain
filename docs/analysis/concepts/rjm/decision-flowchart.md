---
package: rjm
name: Decision Flowchart
slug: decision-flowchart
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision Flowchart

## Definition — verbatim
> "## Decision Flowchart" — docs/task-classification-guide.md:328

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 328 | defined here | Flowchart detailing the sequential priority checks for evaluating security, infrastructure, research, and cross-domain orchestration. |

## Consumes
Incoming task parameters and sequential branching evaluations.

## Produces
Final agent routing decisions and orchestrator coordination requirements.

## When applied
When routing incoming tasks through hierarchical priority checks to ensure security and infrastructure implications are evaluated first.

## Sub-concepts
none

## Part of
task-classification-guide

## Implementation status
clean

## Design notes
A priority-ordered decision flowchart in rjm ensuring security and infrastructure evaluations take precedence during task classification before evaluating research or implementation complexity.
