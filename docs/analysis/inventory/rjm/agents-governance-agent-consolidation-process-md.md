---
package: rjm
path: .agents/governance/agent-consolidation-process.md
type: agent
bytes: 7552
unit: inv-rjm-54
in_scope_via: .agents/governance/agent-design-principles.md
aliases: []
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/agent-consolidation-process.md

## Purpose — required, verbatim
> "This document defines the process for identifying, evaluating, and executing agent consolidations. Consolidation reduces system complexity, eliminates confusion, and maintains focus." — .agents/governance/agent-consolidation-process.md:5

## Design intent — required
Operational governance protocol defining the 5-phase lifecycle (Identification, Evaluation, Planning, Execution, Validation) for consolidating redundant, overlapping, or underutilized agents within the multi-agent system. It establishes quantitative automatic and manual review triggers (such as >20% capability overlap, <5% invocation rate, and >3 misroutings/month), provides structured templates for overlap analysis, impact assessment, and migration planning, defines deprecation notice and parallel operation periods, specifies directory structure for retired agent archives, and outlines a rollback procedure to prevent regressions.

## Phase — required
cross-phase

## Inputs — required
- Capability comparison candidates and metrics across agents
- Overlap audit data (>20% overlap threshold triggering review)
- Usage metrics and orchestrator routing logs (<5% invocations, >3 routing errors/month)
- Agent definitions across platforms (`claude/[agent].md`, `vs-code-agents/[agent].agent.md`, `copilot-cli/[agent].agent.md`)
- Existing agent interview records (`.agents/governance/interviews/[agent]-interview.md`)
- Orchestrator routing documentation (`docs/orchestrator-routing-algorithm.md`)

## Outputs — required
- Overlap analysis reports and capability comparison matrices
- Consolidation impact assessments and risk analyses
- Migration plans with capability mappings, timelines, and communication plans
- Deprecation notices added to agent definitions with successor pointers
- Retired agent archives under `.agents/archive/retired-agents/[agent-name]/`
- Post-consolidation validation checklists and rollback procedures

## Invokes — required
- agent agent-design-principles.md — .agents/governance/agent-consolidation-process.md:304
- agent steering-committee-charter.md — .agents/governance/agent-consolidation-process.md:305
- template ADR-TEMPLATE.md — .agents/governance/agent-consolidation-process.md:306
- agent agent-interview-protocol.md — .agents/governance/agent-consolidation-process.md:307

## Invoked by — required
- agent .agents/governance/agent-design-principles.md — .agents/governance/agent-design-principles.md:342
- agent .agents/governance/steering-committee-charter.md — .agents/governance/steering-committee-charter.md:167

## Concepts named — required, verbatim
- `Agent Consolidation Process` — .agents/governance/agent-consolidation-process.md:1 — defined here
- `Consolidation Triggers` — .agents/governance/agent-consolidation-process.md:9 — defined here
- `Automatic Review Triggers` — .agents/governance/agent-consolidation-process.md:11 — defined here
- `Manual Review Triggers` — .agents/governance/agent-consolidation-process.md:21 — defined here
- `Overlap Analysis` — .agents/governance/agent-consolidation-process.md:32 — defined here
- `Recommendation Threshold` — .agents/governance/agent-consolidation-process.md:62 — defined here
- `Impact Assessment` — .agents/governance/agent-consolidation-process.md:76 — defined here
- `Decision Criteria` — .agents/governance/agent-consolidation-process.md:106 — defined here
- `Migration Plan Template` — .agents/governance/agent-consolidation-process.md:121 — defined here
- `Deprecation Notice` — .agents/governance/agent-consolidation-process.md:172 — defined here
- `Parallel Operation` — .agents/governance/agent-consolidation-process.md:188 — defined here
- `Retirement` — .agents/governance/agent-consolidation-process.md:195 — defined here
- `Post-Consolidation Checklist` — .agents/governance/agent-consolidation-process.md:207 — defined here
- `Archive Structure` — .agents/governance/agent-consolidation-process.md:240 — defined here
- `Rollback Procedure` — .agents/governance/agent-consolidation-process.md:257 — defined here

## Structure
- # Agent Consolidation Process
- ## Purpose
- ## Consolidation Triggers
- ### Automatic Review Triggers
- ### Manual Review Triggers
- ## Phase 1: Identification
- ### Overlap Analysis
- ### Recommendation Threshold
- ## Phase 2: Evaluation
- ### Impact Assessment
- ### Decision Criteria
- ## Phase 3: Planning
- ### Migration Plan Template
- ## Phase 4: Execution
- ### Step 1: Update Surviving Agent
- ### Step 2: Deprecation Notice
- ### Step 3: Parallel Operation
- ### Step 4: Retirement
- ## Phase 5: Validation
- ### Post-Consolidation Checklist
- ## Archive Structure
- ## Rollback Procedure
- ## Example: Hypothetical Consolidation
- ### Scenario
- ### Analysis
- ### Decision
- ### Outcome
- ## Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/governance/agent-consolidation-process.md:87 · Path "claude/[agent].md" does not exist at root (actual Claude definitions reside under .claude/agents/).
- missing-path · .agents/governance/agent-consolidation-process.md:88 · Path "vs-code-agents/[agent].agent.md" does not exist in repository.
- missing-path · .agents/governance/agent-consolidation-process.md:89 · Path "copilot-cli/[agent].agent.md" does not exist at root (actual Copilot definitions reside under src/copilot-cli/agents/).

## Observations
- Defines an actionable numerical threshold for agent overlap: 0-10% (no action), 11-20% (clarify boundaries), 21-40% (consider consolidation), 41-70% (strong candidate), 71-100% (consolidation required).
- Prescribes a disciplined 30-day deprecation notice and 2-week parallel operation period before final agent retirement and archiving.
- Provides a concrete example consolidating a hypothetical `code-reviewer` agent into `qa` based on 65% capability overlap.

## Context cost
7552 bytes, 314 lines, ~1900 tokens.
