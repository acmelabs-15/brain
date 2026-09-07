---
package: rjm
name: Context Maintenance
slug: context-maintenance
kind: pattern
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

# Context Maintenance

## Definition — verbatim
> "Before each user message, re-read the active plan, relevant artifacts, and exact prior decisions." — .claude/agents/orchestrator.md:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 191 | defined here | Defines the context refresh and continuity rules to prevent drift across compactions and user turns. |
| src/claude/orchestrator.md | 191 | defined here | Defines the context refresh and continuity rules to prevent drift across compactions and user turns. |
| templates/agents/orchestrator.shared.md | 202 | defined here | Defines the context refresh and continuity rules to prevent drift across compactions and user turns. |

## Consumes
Active plan, relevant artifacts, recorded decisions, per-issue handoffs.

## Produces
Preserved execution state, consistent decision-making across context compaction.

## When applied
Before processing each user message, after phase completion, major transitions, or interruptions.

## Sub-concepts
event-driven-todo-review

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
Context Maintenance enforces active state restoration at every interaction turn. By requiring the orchestrator to re-read the plan and durable handoffs rather than relying on decay-prone memory or restarting workflows, it prevents repeated questions, redundant delegations, and drift across compaction boundaries.
