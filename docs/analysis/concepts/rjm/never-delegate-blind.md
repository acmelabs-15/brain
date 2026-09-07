---
package: rjm
name: Never delegate blind
slug: never-delegate-blind
kind: pattern
package_phase: rjm:coordinator
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

# Never delegate blind

## Definition — verbatim
> "**Never delegate blind.** Every handoff includes: context, constraints, expected output format, success criteria, dependencies on prior work." — .claude/agents/orchestrator.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 60 | defined here | Non-negotiable delegation rule requiring context, constraints, expected format, and criteria in handoffs. |
| src/claude/orchestrator.md | 60 | defined here | Core operational invariant ensuring specialists receive complete delegation packages. |
| templates/agents/orchestrator.shared.md | 73 | defined here | Shared template rule barring delegation without complete operational context. |

## Consumes
Triaged task parameters, architectural constraints, prior agent findings, and success metrics.

## Produces
Fully contextualized delegation packages preventing subagent hallucination or unconstrained exploration.

## When applied
Enforced during every inter-agent handoff dispatch.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Never delegate blind is an orchestration invariant mandating that every subagent handoff explicitly package context, constraints, expected output formats, success criteria, and dependencies. In multi-agent architectures, it prevents downstream agents from operating on incomplete assumptions or diverging from project standards.
