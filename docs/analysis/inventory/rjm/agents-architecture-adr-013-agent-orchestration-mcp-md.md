---
package: rjm
path: .agents/architecture/ADR-013-agent-orchestration-mcp.md
type: agent
bytes: 18270
unit: inv-rjm-8
deprecated: false
in_scope_via: inv-rjm-8
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-013-agent-orchestration-mcp.md, sha256: 3c5ab1bf1054f46f9b0f241efd270f250d43d5029727f78f114296ce423faec7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-013-agent-orchestration-mcp.md

## Purpose — required, verbatim
> "The ai-agents project has **18 specialized agents** coordinated by an orchestrator. Current orchestration relies on:" — .agents/architecture/ADR-013-agent-orchestration-mcp.md:24 (no explicit purpose statement)

## Design intent — required
Proposes a Model Context Protocol (MCP) server for agent orchestration to replace error-prone, untyped `Task()` calls and unstructured markdown handoffs with type-safe agent invocation, automated context injection, parallel execution management with conflict resolution, and enforced model routing. Without this architectural decision, multi-agent coordination would remain vulnerable to lost handoff context, untracked agent-to-agent transitions, parallel write conflicts on shared state files, and reliance on unvalidated prompt-based routing heuristics.

## Phase — required
cross-phase

## Inputs — required
Agent definitions in `src/claude/*.md` (.agents/architecture/ADR-013-agent-orchestration-mcp.md:83), workflow and routing definitions in `.agents/AGENT-SYSTEM.md` (.agents/architecture/ADR-013-agent-orchestration-mcp.md:84), cross-session context in `.agents/HANDOFF.md` (.agents/architecture/ADR-013-agent-orchestration-mcp.md:85), typed invocation parameters including task prompts and agent context (.agents/architecture/ADR-013-agent-orchestration-mcp.md:96-102), task descriptions for routing recommendations (.agents/architecture/ADR-013-agent-orchestration-mcp.md:219-223), and session state from Session State MCP (.agents/architecture/ADR-013-agent-orchestration-mcp.md:458-465).

## Outputs — required
Structured MCP tool responses (`InvokeAgentResult`, `TrackHandoffResult`, `GetRoutingRecommendationResult`, `StartParallelExecutionResult`, `AggregateParallelResultsResult`, `ResolveConflictResult`) (.agents/architecture/ADR-013-agent-orchestration-mcp.md:120-130, 204-212, 225-239, 258-264, 276-297, 311-318), MCP resource endpoints `agents://catalog`, `agents://workflows`, `agents://active`, and `agents://history` (.agents/architecture/ADR-013-agent-orchestration-mcp.md:322, 353, 388, 414), and Serena memory updates for `agent-invocation-history`, `agent-handoff-chain`, `agent-parallel-state`, and `agent-conflict-log` (.agents/architecture/ADR-013-agent-orchestration-mcp.md:446-452).

## Invokes — required
- agent ADR-009 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:12
- agent ADR-011 — .agents/architecture/ADR-011-session-state-mcp.md:12
- agent ADR-012 — .agents/architecture/ADR-012-skill-catalog-mcp.md:12
- agent AGENT-SYSTEM.md — .agents/AGENT-SYSTEM.md:1806

## Invoked by — required
- agent README — .agents/architecture/README.md:163
- agent ADR-048 — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:167

## Concepts named — required, verbatim
- `ADR-013` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:12 — defined here
- `Agent Orchestration MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:12 — defined here
- `Prompt-based routing` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:26 — used here
- `Manual handoffs` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:27 — used here
- `HANDOFF.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:28 — used here
- `Task()` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:43 — used here
- `Session State MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:63 — used here
- `invoke_agent` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:73 — defined here
- `get_agent_catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:74 — defined here
- `track_handoff` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:75 — defined here
- `get_routing_recommendation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:76 — defined here
- `start_parallel_execution` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:77 — defined here
- `aggregate_parallel_results` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:78 — defined here
- `resolve_conflict` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:79 — defined here
- `agents://catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:73 — defined here
- `agents://workflows` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:74 — defined here
- `agents://active` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:75 — defined here
- `agents://history` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:76 — defined here
- `InvokeAgentParams` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:96 — defined here
- `AgentName` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:104 — defined here
- `AgentContext` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:112 — defined here
- `InvokeAgentResult` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:120 — defined here
- `HandoffContext` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:190 — defined here
- `quick-fix` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:361 — defined here
- `standard` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:367 — defined here
- `strategic` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:373 — defined here
- `ideation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:379 — defined here
- `qa_validation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:364 — used here
- `critic_review` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:370 — used here
- `agent-invocation-history` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:448 — defined here
- `agent-handoff-chain` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:449 — defined here
- `agent-parallel-state` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:450 — defined here
- `agent-conflict-log` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:451 — defined here
- `Skill Catalog MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:553 — used here
- `ADR-009` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:595 — used here
- `ADR-011` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:596 — used here
- `ADR-012` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:597 — used here

## Structure
- # ADR-013: Agent Orchestration MCP — .agents/architecture/ADR-013-agent-orchestration-mcp.md:12
- ## Status — .agents/architecture/ADR-013-agent-orchestration-mcp.md:14
- ## Date — .agents/architecture/ADR-013-agent-orchestration-mcp.md:18
- ## Context — .agents/architecture/ADR-013-agent-orchestration-mcp.md:22
- ### Current Agent Catalog — .agents/architecture/ADR-013-agent-orchestration-mcp.md:30
- ### Problems — .agents/architecture/ADR-013-agent-orchestration-mcp.md:41
- ### Evidence from Retrospectives — .agents/architecture/ADR-013-agent-orchestration-mcp.md:49
- ## Decision — .agents/architecture/ADR-013-agent-orchestration-mcp.md:55
- ### Architecture — .agents/architecture/ADR-013-agent-orchestration-mcp.md:65
- ## Tool Interface Design — .agents/architecture/ADR-013-agent-orchestration-mcp.md:89
- ### invoke_agent — .agents/architecture/ADR-013-agent-orchestration-mcp.md:91
- ### get_agent_catalog — .agents/architecture/ADR-013-agent-orchestration-mcp.md:146
- ### track_handoff — .agents/architecture/ADR-013-agent-orchestration-mcp.md:178
- ### get_routing_recommendation — .agents/architecture/ADR-013-agent-orchestration-mcp.md:214
- ### start_parallel_execution — .agents/architecture/ADR-013-agent-orchestration-mcp.md:241
- ### aggregate_parallel_results — .agents/architecture/ADR-013-agent-orchestration-mcp.md:266
- ### resolve_conflict — .agents/architecture/ADR-013-agent-orchestration-mcp.md:299
- ## Resource URIs — .agents/architecture/ADR-013-agent-orchestration-mcp.md:320
- ### agents://catalog — .agents/architecture/ADR-013-agent-orchestration-mcp.md:322
- ### agents://workflows — .agents/architecture/ADR-013-agent-orchestration-mcp.md:353
- ### agents://active — .agents/architecture/ADR-013-agent-orchestration-mcp.md:388
- ### agents://history — .agents/architecture/ADR-013-agent-orchestration-mcp.md:414
- ## Serena Integration — .agents/architecture/ADR-013-agent-orchestration-mcp.md:442
- ### Memory Schema — .agents/architecture/ADR-013-agent-orchestration-mcp.md:444
- ### Integration with Session State MCP — .agents/architecture/ADR-013-agent-orchestration-mcp.md:453
- ## Workflow Enforcement — .agents/architecture/ADR-013-agent-orchestration-mcp.md:483
- ### Routing Heuristics (from AGENT-SYSTEM.md) — .agents/architecture/ADR-013-agent-orchestration-mcp.md:485
- ## Rationale — .agents/architecture/ADR-013-agent-orchestration-mcp.md:528
- ### Alternatives Considered — .agents/architecture/ADR-013-agent-orchestration-mcp.md:530
- ### Trade-offs — .agents/architecture/ADR-013-agent-orchestration-mcp.md:539
- ## Consequences — .agents/architecture/ADR-013-agent-orchestration-mcp.md:545
- ### Positive — .agents/architecture/ADR-013-agent-orchestration-mcp.md:547
- ### Negative — .agents/architecture/ADR-013-agent-orchestration-mcp.md:555
- ### Neutral — .agents/architecture/ADR-013-agent-orchestration-mcp.md:561
- ## Implementation Notes — .agents/architecture/ADR-013-agent-orchestration-mcp.md:567
- ### Phase 1: Core Invocation (P0) — .agents/architecture/ADR-013-agent-orchestration-mcp.md:569
- ### Phase 2: Handoff Tracking (P1) — .agents/architecture/ADR-013-agent-orchestration-mcp.md:575
- ### Phase 3: Parallel Execution (P2) — .agents/architecture/ADR-013-agent-orchestration-mcp.md:581
- ### Phase 4: Smart Routing (P3) — .agents/architecture/ADR-013-agent-orchestration-mcp.md:587
- ## Related Decisions — .agents/architecture/ADR-013-agent-orchestration-mcp.md:593
- ## References — .agents/architecture/ADR-013-agent-orchestration-mcp.md:599

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-013-agent-orchestration-mcp.md:602 Referenced Serena memory file "../.serena/memories/skill-orchestration-001-parallel-execution-time-savings.md" does not exist in repository.
- missing-path · .agents/architecture/ADR-013-agent-orchestration-mcp.md:603 Referenced Serena memory file "../.serena/memories/skill-orchestration-002-parallel-handoff-coordination.md" does not exist in repository.
- missing-path · .agents/architecture/ADR-013-agent-orchestration-mcp.md:85 Referenced cross-session context file ".agents/HANDOFF.md" was deleted per subsequent architecture changes (ADR-014).

## Observations
Defines a comprehensive MCP server specification for agent orchestration, incorporating 7 tool interfaces (`invoke_agent`, `get_agent_catalog`, `track_handoff`, `get_routing_recommendation`, `start_parallel_execution`, `aggregate_parallel_results`, `resolve_conflict`) and 4 resource URIs (`agents://catalog`, `agents://workflows`, `agents://active`, `agents://history`). Integrates with Session State MCP for evidence logging and Serena memory for invocation tracking and conflict logging.

## Context cost
18,270 bytes, ~4,600 tokens.
