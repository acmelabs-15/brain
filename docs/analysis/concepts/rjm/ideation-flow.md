---
package: rjm
name: Ideation Flow
slug: ideation-flow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ideation Flow

## Definition — verbatim
> "For exploring vague ideas and package requests." — .agents/AGENT-SYSTEM.md:958

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 956 | defined here | Four-phase workflow pattern (Research, Validation, Epic/PRD Creation, Plan Review) for exploring vague ideas and third-party packages. |

## Consumes
Vague user prompts, library/package URLs, exploratory ideas, or incomplete feature proposals.

## Produces
Research documents, validation verdicts, epics, PRDs, work breakdowns, and multi-specialist plan approvals.

## When applied
> "**Full Sequence**: `analyst → high-level-advisor → independent-thinker → critic → roadmap → explainer → task-decomposer → architect → devops → security → qa`" — .agents/AGENT-SYSTEM.md:1013

## Sub-concepts
none

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Ideation Flow is rjm's multi-stage governance funnel for turning ambiguous requests and exploratory ideas into production-ready plans. Across four distinct phases (Research & Discovery, Validation & Consensus, Epic & PRD Creation, and Plan Review), it ensures that ideas are thoroughly vetted for strategic fit, risk, architecture, security, and testability before any implementation begins.
