---
package: rjm
path: docs/agent-governance.md
type: doc
bytes: 3203
unit: inv-rjm-188
in_scope_via: docs/agent-metrics.md
aliases: []
memo_inputs:
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/agent-governance.md

## Purpose — required, verbatim
> "This document provides an overview of the governance framework for the multi-agent system. Governance ensures agents remain focused, non-overlapping, and effective as the system evolves." — docs/agent-governance.md:5

## Design intent — required
Establishes the governance architecture and operational lifecycle for the multi-agent system to prevent agent sprawl, capability duplication, and routing ambiguity. It defines six mandatory agent design principles—centered on a strict 20% maximum capability overlap ceiling and clear entry criteria—and specifies quantitative triggers and steering committee processes for proposing, consolidating, and deprecating agents.

## Phase — required
cross-phase

## Inputs — required
- Architectural Decision Records created via the ADR template at `.agents/architecture/ADR-TEMPLATE.md` — docs/agent-governance.md:11
- Steering committee reviews and charter procedures at `.agents/governance/steering-committee-charter.md` — docs/agent-governance.md:12
- Capability overlap analysis and usage metrics — docs/agent-governance.md:32-48

## Outputs — required
- Governance verdicts across the agent lifecycle: `PROPOSED -> APPROVED -> ACTIVE -> DEPRECATED -> RETIRED` — docs/agent-governance.md:64
- Consolidation plans and deprecation decisions for redundant or underutilized agents — docs/agent-governance.md:38-48, 79-91

## Invokes — required
- template .agents/architecture/ADR-TEMPLATE.md — docs/agent-governance.md:11
- doc .agents/governance/steering-committee-charter.md — docs/agent-governance.md:12
- doc .agents/governance/agent-design-principles.md — docs/agent-governance.md:13
- doc .agents/governance/agent-consolidation-process.md — docs/agent-governance.md:14
- doc .agents/governance/agent-interview-protocol.md — docs/agent-governance.md:15
- doc CLAUDE.md — docs/agent-governance.md:94
- doc orchestrator-routing-algorithm.md — docs/agent-governance.md:95
- doc task-classification-guide.md — docs/agent-governance.md:96

## Invoked by — required
- doc docs/agent-metrics.md — docs/agent-metrics.md:297

## Concepts named — required, verbatim
- `multi-agent system` — docs/agent-governance.md:5 — used here
- `Governance` — docs/agent-governance.md:5 — defined here
- `ADR Template` — docs/agent-governance.md:11 — used here
- `Steering Committee Charter` — docs/agent-governance.md:12 — used here
- `Agent Design Principles` — docs/agent-governance.md:13 — used here
- `Consolidation Process` — docs/agent-governance.md:14 — used here
- `Interview Protocol` — docs/agent-governance.md:15 — used here
- `The Six Design Principles` — docs/agent-governance.md:17 — defined here
- `Non-Overlapping Specialization` — docs/agent-governance.md:21 — defined here
- `Clear Entry Criteria` — docs/agent-governance.md:22 — defined here
- `Explicit Limitations` — docs/agent-governance.md:23 — defined here
- `Composability` — docs/agent-governance.md:24 — defined here
- `Verifiable Success` — docs/agent-governance.md:25 — defined here
- `Consistent Interface` — docs/agent-governance.md:26 — defined here
- `Consolidation Triggers` — docs/agent-governance.md:38 — defined here
- `Steering Committee` — docs/agent-governance.md:49 — defined here
- `Agent Lifecycle` — docs/agent-governance.md:61 — defined here
- `PROPOSED` — docs/agent-governance.md:64 — defined here
- `APPROVED` — docs/agent-governance.md:64 — defined here
- `ACTIVE` — docs/agent-governance.md:64 — defined here
- `DEPRECATED` — docs/agent-governance.md:64 — defined here
- `RETIRED` — docs/agent-governance.md:64 — defined here

## Structure
- `# Agent System Governance` — docs/agent-governance.md:1
- `## Overview` — docs/agent-governance.md:3
- `## Governance Artifacts` — docs/agent-governance.md:7
- `## The Six Design Principles` — docs/agent-governance.md:17
- `## Proposing New Agents` — docs/agent-governance.md:28
- `## Consolidation Triggers` — docs/agent-governance.md:38
- `## Steering Committee` — docs/agent-governance.md:49
- `## Agent Lifecycle` — docs/agent-governance.md:61
- `## Quick Reference` — docs/agent-governance.md:70
- `### When to Create New Agent` — docs/agent-governance.md:72
- `### When to Consolidate` — docs/agent-governance.md:79
- `### When to Deprecate` — docs/agent-governance.md:86
- `## Related Documentation` — docs/agent-governance.md:92

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines precise quantitative triggers for multi-agent architecture governance, including a strict 20% capability overlap ceiling, an entry criteria threshold answerable in < 30 seconds, and consolidation triggers for agents with < 5% usage or > 3 misroutes/month. Outlines a five-stage agent lifecycle (`PROPOSED -> APPROVED -> ACTIVE -> DEPRECATED -> RETIRED`) managed by a 5-role steering committee operating under consensus rules (majority approval with no unaddressed objections).

## Context cost
3203 bytes (~800 tokens). Documentation overview; loads no external executable dependencies.
