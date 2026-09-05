---
package: rjm
path: .agents/architecture/ADR-013-agent-orchestration-mcp.md
type: agent
bytes: 18270
unit: inv-rjm-8
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-013-agent-orchestration-mcp.md, sha256: 3c5ab1bf1054f46f9b0f241efd270f250d43d5029727f78f114296ce423faec7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-013-agent-orchestration-mcp.md

## Purpose — required, verbatim
> "Create an **Agent Orchestration MCP** that:" — .agents/architecture/ADR-013-agent-orchestration-mcp.md:57

## Design intent — required
Formalizes multi-agent coordination across 18 specialized agents by replacing ad-hoc prompt routing and untyped `Task()` calls with a dedicated Model Context Protocol (MCP) server. It prevents lost context during agent handoffs, avoids merge conflicts on shared files like `HANDOFF.md` during parallel agent execution, tracks workflows from agent to agent, and enforces role-to-model assignments (e.g., reserving Opus for strategic depth while routing standard tasks to Sonnet).

## Phase — required
cross-phase

## Inputs — required
- Agent catalog definitions and workflows from `.agents/AGENT-SYSTEM.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:84
- Agent definitions in `src/claude/*.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:83
- Cross-session context in `.agents/HANDOFF.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:85
- User task description in routing params — .agents/architecture/ADR-013-agent-orchestration-mcp.md:220
- Constraints in routing params — .agents/architecture/ADR-013-agent-orchestration-mcp.md:222
- Current session context from Session State MCP — .agents/architecture/ADR-013-agent-orchestration-mcp.md:459
- Typed invocation parameters in InvokeAgentParams — .agents/architecture/ADR-013-agent-orchestration-mcp.md:96

## Outputs — required
- Unique invocation references and status in InvokeAgentResult — .agents/architecture/ADR-013-agent-orchestration-mcp.md:120
- Handoff records with preserved context and ID in TrackHandoffResult — .agents/architecture/ADR-013-agent-orchestration-mcp.md:204
- Routing recommendations in GetRoutingRecommendationResult — .agents/architecture/ADR-013-agent-orchestration-mcp.md:225
- Parallel execution tracking and aggregated results in AggregateParallelResultsResult — .agents/architecture/ADR-013-agent-orchestration-mcp.md:276
- Conflict resolutions in ResolveConflictResult — .agents/architecture/ADR-013-agent-orchestration-mcp.md:311
- MCP catalog resource — .agents/architecture/ADR-013-agent-orchestration-mcp.md:322
- MCP workflows resource — .agents/architecture/ADR-013-agent-orchestration-mcp.md:353
- MCP active resource — .agents/architecture/ADR-013-agent-orchestration-mcp.md:388
- MCP history resource — .agents/architecture/ADR-013-agent-orchestration-mcp.md:414
- Serena memory agent-invocation-history — .agents/architecture/ADR-013-agent-orchestration-mcp.md:448
- Serena memory agent-handoff-chain — .agents/architecture/ADR-013-agent-orchestration-mcp.md:449
- Serena memory agent-parallel-state — .agents/architecture/ADR-013-agent-orchestration-mcp.md:450
- Serena memory agent-conflict-log — .agents/architecture/ADR-013-agent-orchestration-mcp.md:451

## Invokes — required
- doc AGENT-SYSTEM.md — .agents/architecture/ADR-013-agent-orchestration-mcp.md:601
- agent ADR-009-parallel-safe-multi-agent-design.md — .agents/architecture/ADR-013-agent-orchestration-mcp.md:595
- agent ADR-011-session-state-mcp.md — .agents/architecture/ADR-013-agent-orchestration-mcp.md:596
- agent ADR-012-skill-catalog-mcp.md — .agents/architecture/ADR-013-agent-orchestration-mcp.md:597

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:163
- agent ADR-013 — .agents/architecture/ADR-014-distributed-handoff-architecture.md:246
- agent ADR-013 — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:45
- agent ADR-013 — .agents/architecture/ADR-065-orchestrator-as-router.md:104

## Concepts named — required, verbatim
`Agent Orchestration MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:12, 57 — defined here
`Prompt-based routing` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:26 — defined here
`Manual handoffs` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:27 — defined here
`HANDOFF.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:28, 46, 51, 85, 565 — used here
`orchestrator` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:24, 34, 105, 136, 330 — used here
`planner` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:34, 105 — used here
`task-generator` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:34, 107 — used here
`implementer` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:35, 105, 137, 339 — used here
`devops` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:35, 106 — used here
`security` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:35, 106, 142 — used here
`critic` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:36, 106 — used here
`qa` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:36, 106 — used here
`independent-thinker` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:36, 108, 141 — used here
`architect` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:37, 105, 139 — used here
`analyst` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:37, 105, 138 — used here
`explainer` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:37, 106 — used here
`high-level-advisor` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:38, 107, 140, 249 — used here
`roadmap` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:38, 107, 143 — used here
`retrospective` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:38, 107 — used here
`memory` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:39, 108 — used here
`skillbook` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:39, 108 — used here
`pr-comment-responder` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:39, 108 — used here
`Session State MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:63, 117, 453, 596 — used here
`invoke_agent` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:73, 91, 571 — defined here
`get_agent_catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:74, 146, 572 — defined here
`track_handoff` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:75, 178, 577 — defined here
`get_routing_recommendation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:76, 214, 589 — defined here
`start_parallel_execution` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:77, 241, 583 — defined here
`aggregate_parallel_results` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:78, 266, 584 — defined here
`resolve_conflict` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:79, 299, 585 — defined here
`agents://catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:73, 322, 573 — defined here
`agents://workflows` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:74, 353, 590 — defined here
`agents://active` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:75, 388 — defined here
`agents://history` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:76, 414, 578 — defined here
`quick-fix` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:171, 361 — defined here
`standard` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:171, 367 — defined here
`strategic` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:171, 373 — defined here
`ideation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:379 — defined here
`qa_validation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:364, 370 — defined here
`critic_review` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:370 — defined here
`validation_consensus` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:382 — defined here
`plan_review` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:382 — defined here
`agent-invocation-history` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:448 — defined here
`agent-handoff-chain` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:449 — defined here
`agent-parallel-state` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:450 — defined here
`agent-conflict-log` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:451 — defined here
`Skill Catalog MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:553, 597 — used here

## Structure
- `# ADR-013: Agent Orchestration MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:12
- `## Status` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:14
- `## Date` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:18
- `## Context` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:22
- `### Current Agent Catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:30
- `### Problems` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:41
- `### Evidence from Retrospectives` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:49
- `## Decision` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:55
- `### Architecture` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:65
- `## Tool Interface Design` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:89
- `### invoke_agent` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:91
- `### get_agent_catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:146
- `### track_handoff` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:178
- `### get_routing_recommendation` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:214
- `### start_parallel_execution` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:241
- `### aggregate_parallel_results` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:266
- `### resolve_conflict` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:299
- `## Resource URIs` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:320
- `### agents://catalog` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:322
- `### agents://workflows` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:353
- `### agents://active` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:388
- `### agents://history` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:414
- `## Serena Integration` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:442
- `### Memory Schema` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:444
- `### Integration with Session State MCP` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:453
- `## Workflow Enforcement` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:483
- `### Routing Heuristics (from AGENT-SYSTEM.md)` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:485
- `## Rationale` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:528
- `### Alternatives Considered` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:530
- `### Trade-offs` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:539
- `## Consequences` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:545
- `### Positive` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:547
- `### Negative` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:555
- `### Neutral` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:561
- `## Implementation Notes` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:567
- `### Phase 1: Core Invocation (P0)` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:569
- `### Phase 2: Handoff Tracking (P1)` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:575
- `### Phase 3: Parallel Execution (P2)` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:581
- `### Phase 4: Smart Routing (P3)` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:587
- `## Related Decisions` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:593
- `## References` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:599

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `../.serena/memories/skill-orchestration-001-parallel-execution-time-savings.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:602 — Memory file does not exist on disk.
- missing-path: `../.serena/memories/skill-orchestration-002-parallel-handoff-coordination.md` — .agents/architecture/ADR-013-agent-orchestration-mcp.md:603 — Memory file does not exist on disk.
- doc-drift: status marked proposed and implemented false — .agents/architecture/ADR-013-agent-orchestration-mcp.md:3, 9 — Later architecture documents (ADR-014, ADR-048) treat MCP tooling as active design direction with partial schema implementation in `src/agent-registry-schema.ts`.

## Observations
Provides comprehensive TypeScript type contracts for multi-agent tool execution, agent capability metadata, and workflow definitions. Maps default models to agents based on cognitive depth requirements (Opus for high-level-advisor, independent-thinker, security, roadmap; Sonnet for general execution).

## Context cost
18,270 bytes, approximately 4,500 tokens.
