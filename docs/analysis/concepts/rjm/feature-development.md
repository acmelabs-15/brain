---
package: rjm
name: Feature Development
slug: feature-development
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Feature Development

## Definition — verbatim
> "Feature Development: orchestrator → analyst → architect → milestone-planner → critic → implementer → qa → retrospective" — .claude/agents/AGENTS.md:227-228

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 227 | defined here | Defines the standard multi-agent sequence for end-to-end feature delivery. |
| docs/task-classification-guide.md | 19 | defined here | Classified as a primary task dimension type with specific indicators and agent sequence. |
| src/claude/AGENTS.md | 227 | defined here | Canonical definition of the feature development workflow sequence across subagents. |

## Consumes
User feature request, requirement description, or new capability specification.

## Produces
Architected, planned, reviewed, implemented, verified, and retrospectively documented feature code.

## When applied
Applied for non-trivial feature additions and user-facing capabilities requiring multi-agent rigor.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Feature Development is rjm's comprehensive eight-agent standard workflow for building new software capabilities. It sequences orchestrator, analyst, architect, milestone-planner, critic, implementer, qa, and retrospective agents to ensure full lifecycle governance, from problem framing through quality verification and organizational learning.
