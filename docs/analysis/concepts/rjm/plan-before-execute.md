---
package: rjm
name: Plan Before Execute
slug: plan-before-execute
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plan Before Execute

## Definition — verbatim
> "Outline logic before API/code execution" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 68 | defined here | Defined as an orchestrator reliability principle requiring explicit logic outlining prior to action. |

## Consumes
Task requirements, scope definitions, and technical specifications.

## Produces
Pre-execution plans, phased task breakdowns, and outlined logic steps.

## When applied
Applied prior to initiating code modifications, API requests, or multi-step tool invocations.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
A foundational execution principle in rjm requiring agents to structure and validate their logical approach before modifying code or calling destructive external APIs. By enforcing pre-execution outlining, it prevents hasty code edits, scope drift, and circular error debugging loops.
