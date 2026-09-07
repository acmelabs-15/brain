---
package: rjm
name: Parallel Execution
slug: parallel-execution
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Parallel Execution

## Definition — verbatim
> "Parallel execution enables multiple agents to work simultaneously on independent tasks, reducing wall-clock time by 30-50% compared to sequential execution." — .agents/AGENT-SYSTEM.md:1289

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1285 | defines | Comprehensive specification of parallel multi-agent execution, orchestration responsibilities, worktree isolation, and conflict resolution. |
| .agents/analysis/claude-flow-architecture-analysis.md | 17 | defines | Analyzes concurrent agent coordination models from claude-flow showing 2.8-4.4x execution speedups. |

## Consumes
Independent tasks with clear boundaries, available API rate limit budget, and git worktrees (if modifying files).

## Produces
Concurrently executed task results aggregated by the orchestrator into a single atomic commit.

## When applied
> "Tasks are independent" — .agents/AGENT-SYSTEM.md:1299

## Sub-concepts
parallel-execution-readiness, rate-limit-pre-check, worktree-isolation-pattern, sectioning-pattern, voting-pattern, session-coordination-protocol

## Part of
none

## Implementation status
clean

## Design notes
An orchestration strategy enabling multiple specialized subagents to work concurrently on independent tasks rather than waiting in a sequential pipeline. While introducing 10-20% coordination overhead, it achieves 30-50% wall-clock time savings for non-overlapping operations such as multi-PR reviews, impact analyses across disciplines, and decoupled documentation updates.
