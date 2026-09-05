---
package: rjm
path: .agents/AGENT-SYSTEM.md
source_file: sources/rjm/.agents/AGENT-SYSTEM.md
type: agent
bytes: 53992
lines: 1909
sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641
unit: inv-rjm-1
deprecated: false
in_scope_via: inv-rjm-1
aliases: []
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/AGENT-SYSTEM.md

## Purpose — required, verbatim
> "This multi-agent system coordinates specialized AI agents for software development tasks. Each agent has deep expertise in a specific domain, enabling high-quality outputs through division of labor and explicit quality gates." — .agents/AGENT-SYSTEM.md:14

## Design intent — required
Comprehensive architecture and operating manual for the multi-agent system in `sources/rjm`. It defines 20 specialized agents organized into 5 categories, 4 core agent roles (`strategic`, `coordinator`, `executor`, `support`), interaction workflows (Quick Fix, Standard Development, Strategic Decision, Ideation, Impact Analysis, Learning Extraction, and Spec Layer), routing heuristics, memory protocols, quality gates (critic validation, risk-tiered QA targets), artifact locations, and parallel execution guardrails (worktree isolation, rate limit pre-checks). Bridges individual agent prompt definitions with systemic coordination and lifecycle execution governance.

## Phase — required
cross-phase

## Inputs — required
User requests, issue descriptions, PR review comments, and task prompts routed through `@orchestrator` or invoked directly. Consumes repository context, architectural decisions (`.agents/architecture/ADR-*.md`), EARS specifications (`.agents/specs/requirements/`), steering guidance (`.agents/steering/`), and persistent cross-session memory retrieved via Serena tools (`mcp__serena__read_memory`) or `cloudmcp-manager`.

## Outputs — required
System-wide architectural specification and coordination documentation. Documents lifecycle artifacts produced across the codebase: research reports in `.agents/analysis/`, ADRs in `.agents/architecture/`, PRDs and task lists in `.agents/planning/`, critique reports in `.agents/critique/`, QA test strategies and reports in `.agents/qa/`, retrospectives in `.agents/retrospective/`, epic definitions in `.agents/roadmap/`, pipeline configurations in `.agents/devops/`, threat models in `.agents/security/`, active per-issue continuity handoffs in `.agents/sessions/handoffs/`, 3-tier EARS specifications in `.agents/specs/`, and entity/observation records in Serena memory.

## Invokes — required
- agent src/claude/orchestrator.md — .agents/AGENT-SYSTEM.md:49
- agent src/claude/milestone-planner.md — .agents/AGENT-SYSTEM.md:83
- agent task-decomposer.md — .agents/AGENT-SYSTEM.md:118
- agent spec-generator.md — .agents/AGENT-SYSTEM.md:153
- agent src/claude/implementer.md — .agents/AGENT-SYSTEM.md:196
- agent src/claude/devops.md — .agents/AGENT-SYSTEM.md:238
- agent src/claude/security.md — .agents/AGENT-SYSTEM.md:273
- agent src/claude/merge-resolver.md — .agents/AGENT-SYSTEM.md:309
- agent src/claude/critic.md — .agents/AGENT-SYSTEM.md:345
- agent src/claude/qa.md — .agents/AGENT-SYSTEM.md:380
- agent src/claude/independent-thinker.md — .agents/AGENT-SYSTEM.md:430
- agent src/claude/architect.md — .agents/AGENT-SYSTEM.md:468
- agent src/claude/analyst.md — .agents/AGENT-SYSTEM.md:503
- agent src/claude/explainer.md — .agents/AGENT-SYSTEM.md:540
- agent src/claude/high-level-advisor.md — .agents/AGENT-SYSTEM.md:576
- agent src/claude/roadmap.md — .agents/AGENT-SYSTEM.md:612
- agent src/claude/retrospective.md — .agents/AGENT-SYSTEM.md:647
- skill .claude/skills/memory/SKILL.md — .agents/AGENT-SYSTEM.md:685
- agent src/claude/skillbook.md — .agents/AGENT-SYSTEM.md:720
- agent src/claude/pr-comment-responder.md — .agents/AGENT-SYSTEM.md:756
- doc .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md — .agents/AGENT-SYSTEM.md:804
- script build/generate_agent_catalog.py — .agents/AGENT-SYSTEM.md:840
- script scripts/openclaw_bridge.py — .agents/AGENT-SYSTEM.md:841
- doc docs/agent-catalog.md — .agents/AGENT-SYSTEM.md:860
- doc .agents/governance/ears-format.md — .agents/AGENT-SYSTEM.md:1142
- doc .claude/rules/session-logs.md — .agents/AGENT-SYSTEM.md:1218

## Invoked by — required
- doc src/claude/AGENTS.md — src/claude/AGENTS.md:360

## Concepts named — required, verbatim
- `orchestrator` — .agents/AGENT-SYSTEM.md:47 — defined here
- `milestone-planner` — .agents/AGENT-SYSTEM.md:81 — defined here
- `task-decomposer` — .agents/AGENT-SYSTEM.md:116 — defined here
- `spec-generator` — .agents/AGENT-SYSTEM.md:151 — defined here
- `implementer` — .agents/AGENT-SYSTEM.md:194 — defined here
- `devops` — .agents/AGENT-SYSTEM.md:236 — defined here
- `security` — .agents/AGENT-SYSTEM.md:271 — defined here
- `merge-resolver` — .agents/AGENT-SYSTEM.md:307 — defined here
- `critic` — .agents/AGENT-SYSTEM.md:343 — defined here
- `qa` — .agents/AGENT-SYSTEM.md:378 — defined here
- `independent-thinker` — .agents/AGENT-SYSTEM.md:428 — defined here
- `architect` — .agents/AGENT-SYSTEM.md:466 — defined here
- `analyst` — .agents/AGENT-SYSTEM.md:501 — defined here
- `explainer` — .agents/AGENT-SYSTEM.md:538 — defined here
- `high-level-advisor` — .agents/AGENT-SYSTEM.md:574 — defined here
- `roadmap` — .agents/AGENT-SYSTEM.md:610 — defined here
- `retrospective` — .agents/AGENT-SYSTEM.md:645 — defined here
- `skillbook` — .agents/AGENT-SYSTEM.md:718 — defined here
- `pr-comment-responder` — .agents/AGENT-SYSTEM.md:754 — defined here
- `strategic` — .agents/AGENT-SYSTEM.md:835 — defined here
- `coordinator` — .agents/AGENT-SYSTEM.md:836 — defined here
- `executor` — .agents/AGENT-SYSTEM.md:837 — defined here
- `support` — .agents/AGENT-SYSTEM.md:838 — defined here
- `Quick Fix Flow` — .agents/AGENT-SYSTEM.md:868 — defined here
- `Standard Development Flow` — .agents/AGENT-SYSTEM.md:893 — defined here
- `Strategic Decision Flow` — .agents/AGENT-SYSTEM.md:931 — defined here
- `Ideation Flow` — .agents/AGENT-SYSTEM.md:956 — defined here
- `Impact Analysis Flow` — .agents/AGENT-SYSTEM.md:1021 — defined here
- `Learning Extraction Flow` — .agents/AGENT-SYSTEM.md:1061 — defined here
- `Spec Layer Workflow` — .agents/AGENT-SYSTEM.md:1078 — defined here
- `EARS` — .agents/AGENT-SYSTEM.md:157 — used here
- `ADR-009` — .agents/AGENT-SYSTEM.md:792 — used here
- `merge` — .agents/AGENT-SYSTEM.md:808 — defined here
- `vote` — .agents/AGENT-SYSTEM.md:809 — defined here
- `escalate` — .agents/AGENT-SYSTEM.md:810 — defined here
- `Worktree Isolation Pattern` — .agents/AGENT-SYSTEM.md:1374 — defined here
- `Sectioning Pattern` — .agents/AGENT-SYSTEM.md:1411 — defined here
- `Voting Pattern` — .agents/AGENT-SYSTEM.md:1431 — defined here
- `Steering System` — .agents/AGENT-SYSTEM.md:1570 — defined here
- `Critic Validation` — .agents/AGENT-SYSTEM.md:1643 — defined here
- `QA Verification` — .agents/AGENT-SYSTEM.md:1661 — defined here
- `Traceability Validation` — .agents/AGENT-SYSTEM.md:1672 — defined here
- `Disagree and Commit Protocol` — .agents/AGENT-SYSTEM.md:1053 — defined here
- `Session Handoff` — .agents/AGENT-SYSTEM.md:1185 — defined here

## Structure
- # Multi-Agent Orchestration System — .agents/AGENT-SYSTEM.md:8
- ## 1. Executive Summary — .agents/AGENT-SYSTEM.md:10
- ### Purpose — .agents/AGENT-SYSTEM.md:12
- ### Key Benefits — .agents/AGENT-SYSTEM.md:16
- ### Quick Start — .agents/AGENT-SYSTEM.md:26
- ### Agent Count — .agents/AGENT-SYSTEM.md:37
- ## 2. Agent Catalog — .agents/AGENT-SYSTEM.md:43
- ### 2.1 Coordination Agents — .agents/AGENT-SYSTEM.md:45
- #### orchestrator — .agents/AGENT-SYSTEM.md:47
- #### milestone-planner — .agents/AGENT-SYSTEM.md:81
- #### task-decomposer — .agents/AGENT-SYSTEM.md:116
- #### spec-generator — .agents/AGENT-SYSTEM.md:151
- ### 2.2 Implementation Agents — .agents/AGENT-SYSTEM.md:192
- #### implementer — .agents/AGENT-SYSTEM.md:194
- #### devops — .agents/AGENT-SYSTEM.md:236
- #### security — .agents/AGENT-SYSTEM.md:271
- #### merge-resolver — .agents/AGENT-SYSTEM.md:307
- ### 2.3 Quality Agents — .agents/AGENT-SYSTEM.md:341
- #### critic — .agents/AGENT-SYSTEM.md:343
- #### qa — .agents/AGENT-SYSTEM.md:378
- #### independent-thinker — .agents/AGENT-SYSTEM.md:428
- ### 2.4 Design Agents — .agents/AGENT-SYSTEM.md:464
- #### architect — .agents/AGENT-SYSTEM.md:466
- #### analyst — .agents/AGENT-SYSTEM.md:501
- #### explainer — .agents/AGENT-SYSTEM.md:538
- ### 2.5 Strategy Agents — .agents/AGENT-SYSTEM.md:572
- #### high-level-advisor — .agents/AGENT-SYSTEM.md:574
- #### roadmap — .agents/AGENT-SYSTEM.md:610
- #### retrospective — .agents/AGENT-SYSTEM.md:645
- ### 2.6 Support Agents — .agents/AGENT-SYSTEM.md:681
- #### memory skill and Serena tools — .agents/AGENT-SYSTEM.md:683
- #### skillbook — .agents/AGENT-SYSTEM.md:718
- #### pr-comment-responder — .agents/AGENT-SYSTEM.md:754
- ## 2.5 Agent Coordination — .agents/AGENT-SYSTEM.md:788
- ### Overview — .agents/AGENT-SYSTEM.md:790
- ### Aggregation and Escalation — .agents/AGENT-SYSTEM.md:801
- ### Agent Roles — .agents/AGENT-SYSTEM.md:827
- ## 3. Workflow Patterns — .agents/AGENT-SYSTEM.md:864
- ### 3.1 Quick Fix Flow — .agents/AGENT-SYSTEM.md:868
- ### 3.2 Standard Development Flow — .agents/AGENT-SYSTEM.md:893
- ### 3.3 Strategic Decision Flow — .agents/AGENT-SYSTEM.md:931
- ### 3.4 Ideation Flow — .agents/AGENT-SYSTEM.md:956
- ### 3.5 Impact Analysis Flow — .agents/AGENT-SYSTEM.md:1021
- ### 3.6 Learning Extraction Flow — .agents/AGENT-SYSTEM.md:1061
- ### 3.7 Spec Layer Workflow (Phase 1+) — .agents/AGENT-SYSTEM.md:1078
- #### Usage Examples — .agents/AGENT-SYSTEM.md:1104
- #### Troubleshooting Guide — .agents/AGENT-SYSTEM.md:1135
- ## 4. Routing Heuristics — .agents/AGENT-SYSTEM.md:1146
- ### Request Pattern Matching — .agents/AGENT-SYSTEM.md:1148
- ### Agent Selection Matrix — .agents/AGENT-SYSTEM.md:1168
- ## 5. Memory and Handoff System — .agents/AGENT-SYSTEM.md:1183
- ### 5.1 Session Handoff — .agents/AGENT-SYSTEM.md:1185
- #### HANDOFF.md Structure — .agents/AGENT-SYSTEM.md:1187
- #### Session Log Location (historical only, creation discontinued) — .agents/AGENT-SYSTEM.md:1215
- ### 5.2 Memory Protocol — .agents/AGENT-SYSTEM.md:1220
- ### 5.3 Skill Persistence — .agents/AGENT-SYSTEM.md:1249
- ### 5.4 Artifact Locations — .agents/AGENT-SYSTEM.md:1261
- ## 6. Parallel Execution — .agents/AGENT-SYSTEM.md:1285
- ### 6.0 Overview — .agents/AGENT-SYSTEM.md:1287
- ### 6.1 When to Use Parallel Execution — .agents/AGENT-SYSTEM.md:1293
- #### Use Parallel Execution When — .agents/AGENT-SYSTEM.md:1295
- #### Use Sequential Execution When — .agents/AGENT-SYSTEM.md:1305
- ### 6.2 Orchestrator Responsibilities — .agents/AGENT-SYSTEM.md:1315
- ### 6.3 Parallel Execution Pattern Template — .agents/AGENT-SYSTEM.md:1329
- #### Prerequisites Checklist — .agents/AGENT-SYSTEM.md:1331
- #### Execution Steps — .agents/AGENT-SYSTEM.md:1345
- #### Rate Limit Pre-Check — .agents/AGENT-SYSTEM.md:1358
- ### 6.4 Worktree Isolation Pattern — .agents/AGENT-SYSTEM.md:1374
- #### Correct Pattern — .agents/AGENT-SYSTEM.md:1378
- #### Why This Matters — .agents/AGENT-SYSTEM.md:1392
- #### Cleanup — .agents/AGENT-SYSTEM.md:1401
- ### 6.5 Sectioning Pattern — .agents/AGENT-SYSTEM.md:1411
- ### 6.6 Voting Pattern — .agents/AGENT-SYSTEM.md:1431
- ### 6.7 Aggregation Strategies — .agents/AGENT-SYSTEM.md:1454
- ### 6.8 Session Coordination Protocol — .agents/AGENT-SYSTEM.md:1462
- #### Orchestrator Aggregation — .agents/AGENT-SYSTEM.md:1468
- #### Commit Message Format — .agents/AGENT-SYSTEM.md:1477
- ### 6.9 Example Scenarios — .agents/AGENT-SYSTEM.md:1487
- #### Example 1: Multi-PR Review (Sessions 19-22) — .agents/AGENT-SYSTEM.md:1489
- #### Example 2: Impact Analysis — .agents/AGENT-SYSTEM.md:1513
- #### Example 3: Documentation Updates — .agents/AGENT-SYSTEM.md:1531
- ### 6.10 Limitations and Constraints — .agents/AGENT-SYSTEM.md:1547
- ### 6.11 Anti-Patterns to Avoid — .agents/AGENT-SYSTEM.md:1558
- ## 7. Steering System — .agents/AGENT-SYSTEM.md:1570
- ### 7.1 Overview — .agents/AGENT-SYSTEM.md:1572
- ### 7.2 Steering File Locations — .agents/AGENT-SYSTEM.md:1578
- ### 7.3 How Steering Works — .agents/AGENT-SYSTEM.md:1590
- #### 1. Task Analysis — .agents/AGENT-SYSTEM.md:1592
- #### 2. Pattern Matching — .agents/AGENT-SYSTEM.md:1602
- #### 3. Context Injection — .agents/AGENT-SYSTEM.md:1612
- #### 4. Token Savings — .agents/AGENT-SYSTEM.md:1616
- ### 7.4 Injection Protocol — .agents/AGENT-SYSTEM.md:1622
- ### 7.5 Implementation Timeline — .agents/AGENT-SYSTEM.md:1632
- ## 8. Quality Gates — .agents/AGENT-SYSTEM.md:1641
- ### 8.1 Critic Validation — .agents/AGENT-SYSTEM.md:1643
- ### 8.2 QA Verification — .agents/AGENT-SYSTEM.md:1661
- ### 8.3 Traceability Validation — .agents/AGENT-SYSTEM.md:1672
- ## 9. Conflict Resolution — .agents/AGENT-SYSTEM.md:1683
- ### 9.1 Agent Disagreement — .agents/AGENT-SYSTEM.md:1685
- ### 9.2 Scope Creep — .agents/AGENT-SYSTEM.md:1694
- ### 9.3 Blocked Tasks — .agents/AGENT-SYSTEM.md:1703
- ## 10. Quick Reference Tables — .agents/AGENT-SYSTEM.md:1726
- ### Workflow Selection — .agents/AGENT-SYSTEM.md:1728
- ### Agent Model Assignment — .agents/AGENT-SYSTEM.md:1741
- ## 11. Extension Points — .agents/AGENT-SYSTEM.md:1766
- ### 11.1 Adding New Agents — .agents/AGENT-SYSTEM.md:1768
- ### 11.2 Adding Steering Files — .agents/AGENT-SYSTEM.md:1812
- ### 11.3 Adding Workflows — .agents/AGENT-SYSTEM.md:1834
- ## 12. Appendix — .agents/AGENT-SYSTEM.md:1857
- ### A. Entity Naming Conventions — .agents/AGENT-SYSTEM.md:1859
- ### B. Relation Types — .agents/AGENT-SYSTEM.md:1872
- ### C. Skill Categories — .agents/AGENT-SYSTEM.md:1885
- ### D. Priority Definitions — .agents/AGENT-SYSTEM.md:1897

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · `src/claude/spec-generator.md` — .agents/AGENT-SYSTEM.md:153: References src/claude/spec-generator.md as agent file, but spec-generator is implemented as a skill under .claude/skills/spec-generator/SKILL.md.
- missing-path · `../../src/claude/orchestrator.md` — .agents/AGENT-SYSTEM.md:866: Uses double parent directory traversal from .agents/, which escapes repo root.
- missing-path · `../../src/claude/orchestrator.md` — .agents/AGENT-SYSTEM.md:1082: Duplicate occurrence of broken relative path escaping repo root.
- missing-path · `.agents/roadmap/backlog.md` — .agents/AGENT-SYSTEM.md:1015: Directs defer handling to create a backlog entry at .agents/roadmap/backlog.md, but no such backlog file exists in the repository.
- missing-path · `csharp-patterns.md` — .agents/AGENT-SYSTEM.md:1584: Lists csharp-patterns.md in .agents/steering/ for glob pattern **/*.cs, but the file does not exist.
- internal-contradiction · `2.5 Agent Coordination` — .agents/AGENT-SYSTEM.md:788: Section numbering duplicates 2.5 for both Strategy Agents (line 572) and Agent Coordination (line 788).
- internal-contradiction · `debug` — .agents/AGENT-SYSTEM.md:837: Agent roles table lists debug under executor examples, but no debug agent exists in the agent catalog or model assignment table.
- internal-contradiction · `Agent Model Assignment` — .agents/AGENT-SYSTEM.md:1741: Table lists only 18 agents, omitting spec-generator (cataloged at line 151) and merge-resolver (cataloged at line 307).
- doc-drift · `orchestrator` — .agents/AGENT-SYSTEM.md:1745: Assigns sonnet model to orchestrator, implementer, and critic, whereas their actual agent prompt definitions specify model: opus.
- doc-drift · `20 specialized agents` — .agents/AGENT-SYSTEM.md:39: Claims system includes 20 specialized agents, but section 2.1 includes spec-generator which is a skill rather than an agent, and section 2.6 includes memory which explicitly notes it is a skill/tool contract rather than an agent route.

## Observations
Central architectural reference for `rjm`. Establishes the 4 agent roles (`strategic`, `coordinator`, `executor`, `support`) used across frontmatter templates, defines 3-tier EARS requirements traceability, outlines the Dan North + Rico Mariani testing philosophy with risk-tiered coverage targets (100% security, 80% business, 60-70% docs), documents git worktree isolation procedures for parallel execution, and records the deprecation of historical session logs in favor of per-issue handoffs.

## Context cost
53992 bytes, ~13,500 tokens.
