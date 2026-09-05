---
package: rjm
path: .agents/AGENT-SYSTEM.md
type: agent
bytes: 53992
unit: inv-rjm-1
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/AGENT-SYSTEM.md

## Purpose — required, verbatim
> "This multi-agent system coordinates specialized AI agents for software development tasks. Each agent has deep expertise in a specific domain, enabling high-quality outputs through division of labor and explicit quality gates." — .agents/AGENT-SYSTEM.md:14

## Design intent — required
Comprehensive architecture and operations manual for the repository's 20-agent multi-agent coordination system. It establishes deterministic routing heuristics, standard workflow execution patterns (Quick Fix, Standard Development, Strategic Decision, Ideation, Impact Analysis, Learning Extraction, and Spec Layer), 3-tier requirements traceability (REQ → DESIGN → TASK), parallel execution governance with git worktree isolation, glob-based steering injection, risk-tiered testing thresholds, and explicit quality gates (critic, QA, independent-thinker). Without it, autonomous agents would lack consistent boundary definitions, standard handoff and memory protocols, conflict resolution mechanisms (ADR-009 consensus and escalation to high-level-advisor), and guidelines for safe parallel execution.

## Phase — required
cross-phase

## Inputs — required
- User requests, task prompts, or problem statements routed to the orchestrator or direct specialist invocations (e.g. `Task(subagent_type=...)`, `@agent`).
- Context from previous work and memory retrieval queries via Serena/cloudmcp-manager tools (`mcp__cloudmcp-manager__memory-search_nodes`).
- Artifacts from preceding lifecycle stages: Epics, PRD documents, ADRs, requirements specifications (`REQ-NNN`), design documents (`DESIGN-NNN`), task breakdowns (`TASK-NNN`), source code, git diffs/conflicts, and test results.
- Steering files (`.agents/steering/*.md`) matched by file path glob patterns.
- PR review comments and GitHub API review feedback for PR workflows.

## Outputs — required
- Delegated subagent tasks and workflow coordination across 20 specialized agents.
- Specification artifacts: Requirements in `.agents/specs/requirements/REQ-NNN-*.md`, design documents in `.agents/specs/design/DESIGN-NNN-*.md`, task documents in `.agents/specs/tasks/TASK-NNN-*.md`.
- Planning and roadmap artifacts: Epics in `.agents/roadmap/`, PRDs in `.agents/planning/PRD-*.md`, atomic tasks in `.agents/planning/`.
- Architecture and review artifacts: ADRs in `.agents/architecture/ADR-NNN-*.md`, critique reports in `.agents/critique/`.
- Implementation, verification, and ops artifacts: Production code, unit tests, pipeline configs in `.agents/devops/`, threat models in `.agents/security/TM-NNN-*.md`, security reports in `.agents/security/SR-NNN-*.md`, test strategies and reports in `.agents/qa/`.
- Retrospective and learning artifacts: Retrospective reports in `.agents/retrospective/`, learned skills in `.agents/skills/`.
- Continuity records: Session handoffs in `.agents/sessions/handoffs/` and memory entities/observations in Serena knowledge graph.

## Invokes — required
- agent orchestrator — .agents/AGENT-SYSTEM.md:47
- agent milestone-planner — .agents/AGENT-SYSTEM.md:81
- agent task-decomposer — .agents/AGENT-SYSTEM.md:116
- agent spec-generator — .agents/AGENT-SYSTEM.md:151
- agent implementer — .agents/AGENT-SYSTEM.md:194
- agent devops — .agents/AGENT-SYSTEM.md:236
- agent security — .agents/AGENT-SYSTEM.md:271
- agent merge-resolver — .agents/AGENT-SYSTEM.md:307
- agent critic — .agents/AGENT-SYSTEM.md:343
- agent qa — .agents/AGENT-SYSTEM.md:378
- agent independent-thinker — .agents/AGENT-SYSTEM.md:428
- agent architect — .agents/AGENT-SYSTEM.md:466
- agent analyst — .agents/AGENT-SYSTEM.md:501
- agent explainer — .agents/AGENT-SYSTEM.md:538
- agent high-level-advisor — .agents/AGENT-SYSTEM.md:574
- agent roadmap — .agents/AGENT-SYSTEM.md:610
- agent retrospective — .agents/AGENT-SYSTEM.md:645
- skill memory — .agents/AGENT-SYSTEM.md:683
- agent skillbook — .agents/AGENT-SYSTEM.md:718
- agent pr-comment-responder — .agents/AGENT-SYSTEM.md:754
- reference .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md — .agents/AGENT-SYSTEM.md:804
- doc src/claude/orchestrator.md — .agents/AGENT-SYSTEM.md:49

## Invoked by — required
- doc src/claude/AGENTS.md — src/claude/AGENTS.md:360
- doc .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:34
- doc .agents/architecture/ADR-013-agent-orchestration-mcp.md — .agents/architecture/ADR-013-agent-orchestration-mcp.md:26

## Concepts named — required, verbatim
- `Multi-Agent Orchestration System` — .agents/AGENT-SYSTEM.md:8 — defined here
- `Specialization` — .agents/AGENT-SYSTEM.md:20 — defined here
- `Quality Gates` — .agents/AGENT-SYSTEM.md:21 — defined here
- `Knowledge Persistence` — .agents/AGENT-SYSTEM.md:22 — defined here
- `Clear Handoffs` — .agents/AGENT-SYSTEM.md:23 — defined here
- `Traceability` — .agents/AGENT-SYSTEM.md:24 — defined here
- `orchestrator` — .agents/AGENT-SYSTEM.md:47 — defined here
- `milestone-planner` — .agents/AGENT-SYSTEM.md:81 — defined here
- `task-decomposer` — .agents/AGENT-SYSTEM.md:116 — defined here
- `spec-generator` — .agents/AGENT-SYSTEM.md:151 — defined here
- `EARS requirements format` — .agents/AGENT-SYSTEM.md:157 — used here
- `traceability chains` — .agents/AGENT-SYSTEM.md:157 — used here
- `specification hierarchy` — .agents/AGENT-SYSTEM.md:157 — used here
- `3-Tier Output` — .agents/AGENT-SYSTEM.md:185 — defined here
- `implementer` — .agents/AGENT-SYSTEM.md:194 — defined here
- `SOLID principles` — .agents/AGENT-SYSTEM.md:200 — used here
- `Security-Critical Coverage` — .agents/AGENT-SYSTEM.md:212 — defined here
- `devops` — .agents/AGENT-SYSTEM.md:236 — defined here
- `security` — .agents/AGENT-SYSTEM.md:271 — defined here
- `OWASP Top 10` — .agents/AGENT-SYSTEM.md:277 — used here
- `STRIDE analysis` — .agents/AGENT-SYSTEM.md:277 — used here
- `Post-Implementation Verification` — .agents/AGENT-SYSTEM.md:287 — defined here
- `merge-resolver` — .agents/AGENT-SYSTEM.md:307 — defined here
- `critic` — .agents/AGENT-SYSTEM.md:343 — defined here
- `qa` — .agents/AGENT-SYSTEM.md:378 — defined here
- `Testing Philosophy` — .agents/AGENT-SYSTEM.md:386 — defined here
- `Coverage Targets by Risk Tier` — .agents/AGENT-SYSTEM.md:392 — defined here
- `independent-thinker` — .agents/AGENT-SYSTEM.md:428 — defined here
- `architect` — .agents/AGENT-SYSTEM.md:466 — defined here
- `analyst` — .agents/AGENT-SYSTEM.md:501 — defined here
- `RICE scoring` — .agents/AGENT-SYSTEM.md:518 — used here
- `explainer` — .agents/AGENT-SYSTEM.md:538 — defined here
- `high-level-advisor` — .agents/AGENT-SYSTEM.md:574 — defined here
- `roadmap` — .agents/AGENT-SYSTEM.md:610 — defined here
- `RICE/KANO prioritization` — .agents/AGENT-SYSTEM.md:616 — used here
- `retrospective` — .agents/AGENT-SYSTEM.md:645 — defined here
- `Five Whys` — .agents/AGENT-SYSTEM.md:651 — used here
- `Fishbone analysis` — .agents/AGENT-SYSTEM.md:651 — used here
- `skill extraction` — .agents/AGENT-SYSTEM.md:651 — used here
- `skillbook` — .agents/AGENT-SYSTEM.md:718 — defined here
- `pr-comment-responder` — .agents/AGENT-SYSTEM.md:754 — defined here
- `Aggregation and Escalation` — .agents/AGENT-SYSTEM.md:801 — defined here
- `consensus protocol` — .agents/AGENT-SYSTEM.md:812 — defined here
- `Agent Roles` — .agents/AGENT-SYSTEM.md:827 — defined here
- `strategic` — .agents/AGENT-SYSTEM.md:835 — defined here
- `coordinator` — .agents/AGENT-SYSTEM.md:836 — defined here
- `executor` — .agents/AGENT-SYSTEM.md:837 — defined here
- `support` — .agents/AGENT-SYSTEM.md:838 — defined here
- `one-level-deep pattern` — .agents/AGENT-SYSTEM.md:866 — defined here
- `Quick Fix Flow` — .agents/AGENT-SYSTEM.md:868 — defined here
- `Standard Development Flow` — .agents/AGENT-SYSTEM.md:893 — defined here
- `Strategic Decision Flow` — .agents/AGENT-SYSTEM.md:931 — defined here
- `Ideation Flow` — .agents/AGENT-SYSTEM.md:956 — defined here
- `Impact Analysis Flow` — .agents/AGENT-SYSTEM.md:1021 — defined here
- `Disagree and Commit Protocol` — .agents/AGENT-SYSTEM.md:1053 — defined here
- `Learning Extraction Flow` — .agents/AGENT-SYSTEM.md:1061 — defined here
- `Spec Layer Workflow` — .agents/AGENT-SYSTEM.md:1078 — defined here
- `Traceability Chain` — .agents/AGENT-SYSTEM.md:1100 — defined here
- `Request Pattern Matching` — .agents/AGENT-SYSTEM.md:1148 — defined here
- `Agent Selection Matrix` — .agents/AGENT-SYSTEM.md:1168 — defined here
- `Session Handoff` — .agents/AGENT-SYSTEM.md:1185 — defined here
- `Memory Protocol` — .agents/AGENT-SYSTEM.md:1220 — defined here
- `Skill Persistence` — .agents/AGENT-SYSTEM.md:1249 — defined here
- `Parallel Execution` — .agents/AGENT-SYSTEM.md:1285 — defined here
- `Parallel Execution Readiness` — .agents/AGENT-SYSTEM.md:1336 — defined here
- `Rate Limit Pre-Check` — .agents/AGENT-SYSTEM.md:1358 — defined here
- `Worktree Isolation Pattern` — .agents/AGENT-SYSTEM.md:1374 — defined here
- `Sectioning Pattern` — .agents/AGENT-SYSTEM.md:1411 — defined here
- `Voting Pattern` — .agents/AGENT-SYSTEM.md:1431 — defined here
- `Session Coordination Protocol` — .agents/AGENT-SYSTEM.md:1462 — defined here
- `Steering System` — .agents/AGENT-SYSTEM.md:1570 — defined here
- `Kiro pattern` — .agents/AGENT-SYSTEM.md:1574 — used here
- `glob-based inclusion` — .agents/AGENT-SYSTEM.md:1574 — used here
- `Injection Protocol` — .agents/AGENT-SYSTEM.md:1622 — defined here
- `Critic Validation` — .agents/AGENT-SYSTEM.md:1643 — defined here
- `QA Verification` — .agents/AGENT-SYSTEM.md:1661 — defined here
- `Traceability Validation` — .agents/AGENT-SYSTEM.md:1672 — defined here
- `Agent Disagreement` — .agents/AGENT-SYSTEM.md:1685 — defined here
- `Scope Creep` — .agents/AGENT-SYSTEM.md:1694 — defined here
- `Blocked Tasks` — .agents/AGENT-SYSTEM.md:1703 — defined here
- `Blocker Report` — .agents/AGENT-SYSTEM.md:1708 — defined here
- `Workflow Selection` — .agents/AGENT-SYSTEM.md:1728 — defined here
- `Agent Model Assignment` — .agents/AGENT-SYSTEM.md:1741 — defined here
- `Entity Naming Conventions` — .agents/AGENT-SYSTEM.md:1859 — defined here
- `Relation Types` — .agents/AGENT-SYSTEM.md:1872 — defined here
- `Skill Categories` — .agents/AGENT-SYSTEM.md:1885 — defined here
- `Priority Definitions` — .agents/AGENT-SYSTEM.md:1897 — defined here

## Structure
- Multi-Agent Orchestration System — .agents/AGENT-SYSTEM.md:8
- 1. Executive Summary — .agents/AGENT-SYSTEM.md:10
- Purpose — .agents/AGENT-SYSTEM.md:12
- Key Benefits — .agents/AGENT-SYSTEM.md:16
- Quick Start — .agents/AGENT-SYSTEM.md:26
- Agent Count — .agents/AGENT-SYSTEM.md:37
- 2. Agent Catalog — .agents/AGENT-SYSTEM.md:43
- 2.1 Coordination Agents — .agents/AGENT-SYSTEM.md:45
- orchestrator — .agents/AGENT-SYSTEM.md:47
- milestone-planner — .agents/AGENT-SYSTEM.md:81
- task-decomposer — .agents/AGENT-SYSTEM.md:116
- spec-generator — .agents/AGENT-SYSTEM.md:151
- 2.2 Implementation Agents — .agents/AGENT-SYSTEM.md:192
- implementer — .agents/AGENT-SYSTEM.md:194
- devops — .agents/AGENT-SYSTEM.md:236
- security — .agents/AGENT-SYSTEM.md:271
- merge-resolver — .agents/AGENT-SYSTEM.md:307
- 2.3 Quality Agents — .agents/AGENT-SYSTEM.md:341
- critic — .agents/AGENT-SYSTEM.md:343
- qa — .agents/AGENT-SYSTEM.md:378
- independent-thinker — .agents/AGENT-SYSTEM.md:428
- 2.4 Design Agents — .agents/AGENT-SYSTEM.md:464
- architect — .agents/AGENT-SYSTEM.md:466
- analyst — .agents/AGENT-SYSTEM.md:501
- explainer — .agents/AGENT-SYSTEM.md:538
- 2.5 Strategy Agents — .agents/AGENT-SYSTEM.md:572
- high-level-advisor — .agents/AGENT-SYSTEM.md:574
- roadmap — .agents/AGENT-SYSTEM.md:610
- retrospective — .agents/AGENT-SYSTEM.md:645
- 2.6 Support Agents — .agents/AGENT-SYSTEM.md:681
- memory skill and Serena tools — .agents/AGENT-SYSTEM.md:683
- skillbook — .agents/AGENT-SYSTEM.md:718
- pr-comment-responder — .agents/AGENT-SYSTEM.md:754
- 2.5 Agent Coordination — .agents/AGENT-SYSTEM.md:788
- Overview — .agents/AGENT-SYSTEM.md:790
- Aggregation and Escalation — .agents/AGENT-SYSTEM.md:801
- Agent Roles — .agents/AGENT-SYSTEM.md:827
- 3. Workflow Patterns — .agents/AGENT-SYSTEM.md:864
- 3.1 Quick Fix Flow — .agents/AGENT-SYSTEM.md:868
- 3.2 Standard Development Flow — .agents/AGENT-SYSTEM.md:893
- 3.3 Strategic Decision Flow — .agents/AGENT-SYSTEM.md:931
- 3.4 Ideation Flow — .agents/AGENT-SYSTEM.md:956
- 3.5 Impact Analysis Flow — .agents/AGENT-SYSTEM.md:1021
- 3.6 Learning Extraction Flow — .agents/AGENT-SYSTEM.md:1061
- 3.7 Spec Layer Workflow (Phase 1+) — .agents/AGENT-SYSTEM.md:1078
- Usage Examples — .agents/AGENT-SYSTEM.md:1104
- Troubleshooting Guide — .agents/AGENT-SYSTEM.md:1135
- 4. Routing Heuristics — .agents/AGENT-SYSTEM.md:1146
- Request Pattern Matching — .agents/AGENT-SYSTEM.md:1148
- Agent Selection Matrix — .agents/AGENT-SYSTEM.md:1168
- 5. Memory and Handoff System — .agents/AGENT-SYSTEM.md:1183
- 5.1 Session Handoff — .agents/AGENT-SYSTEM.md:1185
- HANDOFF.md Structure — .agents/AGENT-SYSTEM.md:1187
- Session Log Location (historical only, creation discontinued) — .agents/AGENT-SYSTEM.md:1215
- 5.2 Memory Protocol — .agents/AGENT-SYSTEM.md:1220
- 5.3 Skill Persistence — .agents/AGENT-SYSTEM.md:1249
- 5.4 Artifact Locations — .agents/AGENT-SYSTEM.md:1261
- 6. Parallel Execution — .agents/AGENT-SYSTEM.md:1285
- 6.0 Overview — .agents/AGENT-SYSTEM.md:1287
- 6.1 When to Use Parallel Execution — .agents/AGENT-SYSTEM.md:1293
- Use Parallel Execution When — .agents/AGENT-SYSTEM.md:1295
- Use Sequential Execution When — .agents/AGENT-SYSTEM.md:1305
- 6.2 Orchestrator Responsibilities — .agents/AGENT-SYSTEM.md:1315
- 6.3 Parallel Execution Pattern Template — .agents/AGENT-SYSTEM.md:1329
- Prerequisites Checklist — .agents/AGENT-SYSTEM.md:1331
- Execution Steps — .agents/AGENT-SYSTEM.md:1345
- Rate Limit Pre-Check — .agents/AGENT-SYSTEM.md:1358
- 6.4 Worktree Isolation Pattern — .agents/AGENT-SYSTEM.md:1374
- Correct Pattern — .agents/AGENT-SYSTEM.md:1378
- Why This Matters — .agents/AGENT-SYSTEM.md:1392
- Cleanup — .agents/AGENT-SYSTEM.md:1401
- 6.5 Sectioning Pattern — .agents/AGENT-SYSTEM.md:1411
- 6.6 Voting Pattern — .agents/AGENT-SYSTEM.md:1431
- 6.7 Aggregation Strategies — .agents/AGENT-SYSTEM.md:1454
- 6.8 Session Coordination Protocol — .agents/AGENT-SYSTEM.md:1462
- Orchestrator Aggregation — .agents/AGENT-SYSTEM.md:1468
- Commit Message Format — .agents/AGENT-SYSTEM.md:1477
- 6.9 Example Scenarios — .agents/AGENT-SYSTEM.md:1487
- Example 1: Multi-PR Review (Sessions 19-22) — .agents/AGENT-SYSTEM.md:1489
- Example 2: Impact Analysis — .agents/AGENT-SYSTEM.md:1513
- Example 3: Documentation Updates — .agents/AGENT-SYSTEM.md:1531
- 6.10 Limitations and Constraints — .agents/AGENT-SYSTEM.md:1547
- 6.11 Anti-Patterns to Avoid — .agents/AGENT-SYSTEM.md:1558
- 7. Steering System — .agents/AGENT-SYSTEM.md:1570
- 7.1 Overview — .agents/AGENT-SYSTEM.md:1572
- 7.2 Steering File Locations — .agents/AGENT-SYSTEM.md:1578
- 7.3 How Steering Works — .agents/AGENT-SYSTEM.md:1590
- 1. Task Analysis — .agents/AGENT-SYSTEM.md:1592
- 2. Pattern Matching — .agents/AGENT-SYSTEM.md:1602
- 3. Context Injection — .agents/AGENT-SYSTEM.md:1612
- 4. Token Savings — .agents/AGENT-SYSTEM.md:1616
- 7.4 Injection Protocol — .agents/AGENT-SYSTEM.md:1622
- 7.5 Implementation Timeline — .agents/AGENT-SYSTEM.md:1632
- 8. Quality Gates — .agents/AGENT-SYSTEM.md:1641
- 8.1 Critic Validation — .agents/AGENT-SYSTEM.md:1643
- 8.2 QA Verification — .agents/AGENT-SYSTEM.md:1661
- 8.3 Traceability Validation — .agents/AGENT-SYSTEM.md:1672
- 9. Conflict Resolution — .agents/AGENT-SYSTEM.md:1683
- 9.1 Agent Disagreement — .agents/AGENT-SYSTEM.md:1685
- 9.2 Scope Creep — .agents/AGENT-SYSTEM.md:1694
- 9.3 Blocked Tasks — .agents/AGENT-SYSTEM.md:1703
- 10. Quick Reference Tables — .agents/AGENT-SYSTEM.md:1726
- Workflow Selection — .agents/AGENT-SYSTEM.md:1728
- Agent Model Assignment — .agents/AGENT-SYSTEM.md:1741
- 11. Extension Points — .agents/AGENT-SYSTEM.md:1766
- 11.1 Adding New Agents — .agents/AGENT-SYSTEM.md:1768
- 11.2 Adding Steering Files — .agents/AGENT-SYSTEM.md:1812
- 11.3 Adding Workflows — .agents/AGENT-SYSTEM.md:1834
- 12. Appendix — .agents/AGENT-SYSTEM.md:1857
- A. Entity Naming Conventions — .agents/AGENT-SYSTEM.md:1859
- B. Relation Types — .agents/AGENT-SYSTEM.md:1872
- C. Skill Categories — .agents/AGENT-SYSTEM.md:1885
- D. Priority Definitions — .agents/AGENT-SYSTEM.md:1897

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/AGENT-SYSTEM.md:153 · references agent prompt file `src/claude/spec-generator.md` which does not exist in the repository.
- missing-path · .agents/AGENT-SYSTEM.md:372 · references example plan artifact `.agents/planning/PLAN-auth.md` which does not exist.
- missing-path · .agents/AGENT-SYSTEM.md:866 · relative path `../../src/claude/orchestrator.md` traverses above the repository root from `.agents/` (also duplicated at line 1082).
- missing-path · .agents/AGENT-SYSTEM.md:1015 · references backlog file `.agents/roadmap/backlog.md` which does not exist.
- missing-path · .agents/AGENT-SYSTEM.md:1584 · steering table references `.agents/steering/csharp-patterns.md` which does not exist.
- internal-contradiction · .agents/AGENT-SYSTEM.md:39 · asserts the system has 20 specialized agents in 5 categories, but Section 2 defines 6 functional subsections (2.1 to 2.6) followed by a duplicate heading `## 2.5 Agent Coordination` at line 788.
- internal-contradiction · .agents/AGENT-SYSTEM.md:837 · Agent Roles table lists `debug` under executor role examples ("implementer, qa, devops, security, debug"), but `debug` is not present in the agent catalog.
- internal-contradiction · .agents/AGENT-SYSTEM.md:1741 · Agent Model Assignment table lists only 18 agents, omitting `merge-resolver` and `spec-generator`, while including `memory` which line 700 explicitly designates as a skill and tool contract rather than an agent route.

## Observations
- System evolution evidence: Section 2.5 ("Agent Coordination", line 788) was comprehensively rewritten pursuant to ADR-098 to eliminate a prior 4-tier hierarchy (Manager/Expert/Builder/Integration), establishing that agent frontmatter `role:` metadata is purely descriptive rather than an operational runtime permission gate.
- Parallel execution model: Section 6 documents an advanced parallel execution framework using dedicated git worktree isolation (`git worktree add -b <branch>`), pre-flight GitHub API rate limit budgeting, and structured conflict aggregation strategies (`merge`, `vote`, `escalate`).
- Context efficiency: Implements glob-scoped steering injection (Section 7, "Kiro pattern") into agent prompts, achieving ~30% token reduction by avoiding global guidance injection.

## Context cost
53992 bytes, ~13,500 tokens. When invoked, serves as full multi-agent architectural reference.
