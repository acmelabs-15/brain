---
package: rjm
name: Model, Effort, and Cost Routing
slug: model-effort-and-cost-routing
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Model, Effort, and Cost Routing

## Definition — verbatim
> "Use the flagship for almost all interactive work." — .claude/agents/orchestrator.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 107 | defined here | Defines economic guidelines and policies for model tier selection, effort levels, and cost routing. |
| src/claude/orchestrator.md | 107 | defined here | Defines economic guidelines and policies for model tier selection, effort levels, and cost routing. |
| templates/agents/orchestrator.shared.md | 89 | defined here | Cross-references the model and effort routing policy for per-invocation model requests. |

## Consumes
Task interactivity classification (interactive vs async batch), reversible vs one-way-door stakes, and model tier availability.

## Produces
Model tier assignments (opus, sonnet, haiku) and reasoning effort parameters for agent dispatches.

## When applied
Applied when selecting models and effort parameters prior to delegating subagent tasks.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
Model, Effort, and Cost Routing establishes an empirical economic policy for multi-agent systems. Recognizing that human waiting time dominates token cost by 20–40x, it prioritizes flagship models for interactive workflows while reserving lesser models strictly for asynchronous batch workloads and advising against unproductive max-effort dial settings.
