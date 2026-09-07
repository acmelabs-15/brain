---
package: rjm
name: Multi-Agent Orchestration System
slug: multi-agent-orchestration-system
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

# Multi-Agent Orchestration System

## Definition — verbatim
> "This multi-agent system coordinates specialized AI agents for software development tasks. Each agent has deep expertise in a specific domain, enabling high-quality outputs through division of labor and explicit quality gates." — .agents/AGENT-SYSTEM.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 8 | defined here | Heading and architecture manual title defining the multi-agent coordination system. |

## Consumes
User requests, task prompts, and problem statements requiring coordinated multi-agent assistance.

## Produces
Coordinated multi-agent workflows, specifications, architecture decisions, code implementations, tests, and session handoffs.

## When applied
Applied across the entire software development lifecycle when executing multi-step tasks that require domain specialization and quality gating.

## Sub-concepts
specialization, quality-gates, knowledge-persistence, clear-handoffs, traceability, orchestrator

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The core architectural framework of rjm that coordinates 20 specialized AI personas across software engineering workflows. It establishes strict separation of concerns, explicit quality gates (critic, QA, security), deterministic routing heuristics, and parallel execution governance via git worktrees, preventing context exhaustion and ensuring reproducible, verified outputs.
