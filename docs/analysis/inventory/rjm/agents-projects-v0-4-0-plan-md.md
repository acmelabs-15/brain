---
package: rjm
path: .agents/projects/v0.4.0/PLAN.md
type: agent
bytes: 29810
unit: inv-rjm-57
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/projects/v0.4.0/PLAN.md

## Purpose — required, verbatim
> "Extract the reusable multi-agent framework from `rjmurillo/ai-agents` into a new repo `rjmurillo/awesome-ai`, published as a Claude Code plugin marketplace. `ai-agents` becomes a reference implementation that consumes `awesome-ai` as a plugin." — .agents/projects/v0.4.0/PLAN.md:21

## Design intent — required
Provides the comprehensive architectural implementation plan and phased work breakdown for ADR-045, extracting the reusable multi-agent framework from `rjmurillo/ai-agents` into an independent repository `rjmurillo/awesome-ai` published as a 4-plugin Claude Code marketplace (`core-agents`, `framework-skills`, `session-protocol`, `quality-gates`). Establishes strict path abstraction contracts, path traversal prevention mechanisms (`get_safe_path` with `os.path.realpath` containment checks), SHA pinning supply chain security, and output path parameterization across 14 agent templates. Organizes execution into 6 sequential phases across 30-39 estimated sessions, enforcing a strict prerequisite gate that v0.3.1 (PowerShell-to-Python migration) must complete in full before extraction begins. Without this plan, framework extraction would have faced severe session budget overruns, broken path references in downstream projects, duplicated migration labor, and path traversal security vulnerabilities.

## Phase — required
none

## Inputs — required
- Architectural decisions and research: `ADR-045: Framework Extraction via Plugin Marketplace` (`../../architecture/ADR-045-framework-extraction-via-plugin-marketplace.md` — .agents/projects/v0.4.0/PLAN.md:757) and `Plugin Marketplace Research` (`../../analysis/claude-code-plugin-marketplaces.md` — .agents/projects/v0.4.0/PLAN.md:758).
- Prerequisite milestone plan: `v0.3.1 PowerShell Migration` (`../v0.3.1/PowerShell-migration.md` — .agents/projects/v0.4.0/PLAN.md:759).
- Feasibility, security, and critique reviews: `ADR-045 Debate Log` (`../../critique/ADR-045-debate-log.md` — .agents/projects/v0.4.0/PLAN.md:760), `ADR-045 Security Review` (`../../security/ADR-045-framework-extraction-security-review.md` — .agents/projects/v0.4.0/PLAN.md:761), and `ADR-045 Feasibility Analysis` (`../../analysis/adr-045-feasibility-analysis.md` — .agents/projects/v0.4.0/PLAN.md:762).
- Formal inventory audit: `adr-045-inventory-audit.md` (`.agents/analysis/adr-045-inventory-audit.md` — .agents/projects/v0.4.0/PLAN.md:613).
- Representative agent template: `templates/agents/orchestrator.shared.md` (.agents/projects/v0.4.0/PLAN.md:615) and consumer root docs `CLAUDE.md` and `AGENTS.md` (.agents/projects/v0.4.0/PLAN.md:619-620).

## Outputs — required
- Target repository layout and marketplace catalog schema for `rjmurillo/awesome-ai` with 4 plugins: `core-agents`, `framework-skills`, `session-protocol`, `quality-gates` (.agents/projects/v0.4.0/PLAN.md:230-304).
- Path abstraction contract specification defining environment variables (`AWESOME_AI_SESSIONS_DIR`, `AWESOME_AI_HANDOFFS_DIR`, etc.) and `get_safe_path()` path traversal validation (.agents/projects/v0.4.0/PLAN.md:306-334).
- 6-phase execution plan spanning Phase 0 (Foundation) to Phase 5 (Docs + Copilot) with revised 30-39 session breakdown (.agents/projects/v0.4.0/PLAN.md:34-44, 210-606, 732-753).
- Scope definition for parameterizing 14 agent templates and 63 total hybrid files (.agents/projects/v0.4.0/PLAN.md:159-192, 349-363).
- Security governance model covering supply chain SHA pinning, hook execution context, path containment, and secret masking (.agents/projects/v0.4.0/PLAN.md:624-653).

## Invokes — required
- doc ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/projects/v0.4.0/PLAN.md:757
- doc claude-code-plugin-marketplaces.md — .agents/projects/v0.4.0/PLAN.md:758
- doc PowerShell-migration.md — .agents/projects/v0.4.0/PLAN.md:759
- doc ADR-045-debate-log.md — .agents/projects/v0.4.0/PLAN.md:760
- doc ADR-045-framework-extraction-security-review.md — .agents/projects/v0.4.0/PLAN.md:761
- doc adr-045-feasibility-analysis.md — .agents/projects/v0.4.0/PLAN.md:762
- doc adr-045-inventory-audit.md — .agents/projects/v0.4.0/PLAN.md:613
- template orchestrator.shared.md — .agents/projects/v0.4.0/PLAN.md:615
- doc CLAUDE.md — .agents/projects/v0.4.0/PLAN.md:619
- doc AGENTS.md — .agents/projects/v0.4.0/PLAN.md:620

## Invoked by — required
- doc PLAN.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:263
- doc PLAN.md — .agents/analysis/adr-045-feasibility-analysis.md:241
- doc PLAN.md — .agents/security/ADR-045-framework-extraction-security-review.md:1025

## Concepts named — required, verbatim
- `v0.4.0 Milestone: Framework Extraction (awesome-ai)` — .agents/projects/v0.4.0/PLAN.md:2 — defined here
- `ADR-045` — .agents/projects/v0.4.0/PLAN.md:9 — used here
- `v0.3.0` — .agents/projects/v0.4.0/PLAN.md:10 — used here
- `v0.3.1` — .agents/projects/v0.4.0/PLAN.md:10 — used here
- `Claude Code plugin marketplace` — .agents/projects/v0.4.0/PLAN.md:21 — used here
- `Copilot CLI` — .agents/projects/v0.4.0/PLAN.md:43 — used here
- `Phase 0: Foundation` — .agents/projects/v0.4.0/PLAN.md:55 — defined here
- `Phase 1: Core Agents` — .agents/projects/v0.4.0/PLAN.md:62 — defined here
- `Phase 2: Framework Skills` — .agents/projects/v0.4.0/PLAN.md:69 — defined here
- `Phase 3: Protocol + Gates` — .agents/projects/v0.4.0/PLAN.md:75 — defined here
- `Phase 4: Consumer Wiring` — .agents/projects/v0.4.0/PLAN.md:80 — defined here
- `Phase 5: Docs + Copilot` — .agents/projects/v0.4.0/PLAN.md:87 — defined here
- `Track A` — .agents/projects/v0.4.0/PLAN.md:120 — defined here
- `Track B` — .agents/projects/v0.4.0/PLAN.md:121 — defined here
- `Track C` — .agents/projects/v0.4.0/PLAN.md:122 — defined here
- `Track D` — .agents/projects/v0.4.0/PLAN.md:123 — defined here
- `Track E` — .agents/projects/v0.4.0/PLAN.md:124 — defined here
- `Track F` — .agents/projects/v0.4.0/PLAN.md:125 — defined here
- `core-agents` — .agents/projects/v0.4.0/PLAN.md:133 — defined here
- `framework-skills` — .agents/projects/v0.4.0/PLAN.md:133 — defined here
- `session-protocol` — .agents/projects/v0.4.0/PLAN.md:133 — defined here
- `quality-gates` — .agents/projects/v0.4.0/PLAN.md:133 — defined here
- `path abstraction contract` — .agents/projects/v0.4.0/PLAN.md:217 — defined here
- `CVSS 7.8` — .agents/projects/v0.4.0/PLAN.md:135 — used here
- `CVSS 8.1` — .agents/projects/v0.4.0/PLAN.md:140 — used here
- `CVSS 7.4` — .agents/projects/v0.4.0/PLAN.md:492 — used here
- `SHA pinning` — .agents/projects/v0.4.0/PLAN.md:140 — used here
- `Blocking Gate` — .agents/projects/v0.4.0/PLAN.md:220 — defined here
- `marketplace.json` — .agents/projects/v0.4.0/PLAN.md:233 — defined here
- `plugin.json` — .agents/projects/v0.4.0/PLAN.md:237 — defined here
- `hooks.json` — .agents/projects/v0.4.0/PLAN.md:454 — defined here
- `Template Path Parameterization` — .agents/projects/v0.4.0/PLAN.md:349 — defined here
- `SESSION-PROTOCOL template` — .agents/projects/v0.4.0/PLAN.md:252 — defined here
- `expand-contract` — .agents/projects/v0.4.0/PLAN.md:544 — used here
- `namespace migration script` — .agents/projects/v0.4.0/PLAN.md:516 — defined here
- `Security Model` — .agents/projects/v0.4.0/PLAN.md:624 — defined here

## Structure
- # v0.4.0 Milestone: Framework Extraction (awesome-ai) — .agents/projects/v0.4.0/PLAN.md:2
- ## Agent Quick Context — .agents/projects/v0.4.0/PLAN.md:15
- ### Goal — .agents/projects/v0.4.0/PLAN.md:19
- ### Why — .agents/projects/v0.4.0/PLAN.md:23
- ### Blocking Prerequisite — .agents/projects/v0.4.0/PLAN.md:30
- ### Phase Summary (30-40 sessions estimated) — .agents/projects/v0.4.0/PLAN.md:34
- ### Dependency Flowchart — .agents/projects/v0.4.0/PLAN.md:46
- ### Parallel Tracks — .agents/projects/v0.4.0/PLAN.md:118
- ## Design Decisions — .agents/projects/v0.4.0/PLAN.md:129
- ## Inventory Summary — .agents/projects/v0.4.0/PLAN.md:144
- ### Path Parameterization Scope (63 files) — .agents/projects/v0.4.0/PLAN.md:159
- ### Classification Criteria — .agents/projects/v0.4.0/PLAN.md:193
- ### Inventory Verification (Phase 0 deliverable) — .agents/projects/v0.4.0/PLAN.md:199
- ## Phase 0: Foundation (2-3 sessions) — .agents/projects/v0.4.0/PLAN.md:210
- ### Deliverables — .agents/projects/v0.4.0/PLAN.md:212
- ### Blocking Gate — .agents/projects/v0.4.0/PLAN.md:220
- ### awesome-ai Repository Structure — .agents/projects/v0.4.0/PLAN.md:228
- ### marketplace.json Schema — .agents/projects/v0.4.0/PLAN.md:271
- ### Path Abstraction Contract — .agents/projects/v0.4.0/PLAN.md:306
- ### Path Validation (Security) — .agents/projects/v0.4.0/PLAN.md:316
- ## Phase 1: Extract Core Agents Plugin (4-5 sessions) — .agents/projects/v0.4.0/PLAN.md:337
- ### What Moves — .agents/projects/v0.4.0/PLAN.md:339
- ### Template Path Parameterization (NEW, addresses P0-8) — .agents/projects/v0.4.0/PLAN.md:349
- ### Why This Is First — .agents/projects/v0.4.0/PLAN.md:364
- ### Verification — .agents/projects/v0.4.0/PLAN.md:370
- ## Phase 2: Extract Framework Skills Plugin (8-10 sessions) — .agents/projects/v0.4.0/PLAN.md:379
- ### Why More Sessions Than Originally Estimated — .agents/projects/v0.4.0/PLAN.md:381
- ### Low-Coupling Skills (first, ~15 skills) — .agents/projects/v0.4.0/PLAN.md:390
- ### Moderate-Coupling Skills (second, ~10 skills) — .agents/projects/v0.4.0/PLAN.md:412
- ### Path Parameterization Pattern — .agents/projects/v0.4.0/PLAN.md:429
- ### Verification — .agents/projects/v0.4.0/PLAN.md:439
- ## Phase 3: Extract Session Protocol + Quality Gates Plugins (6-8 sessions) — .agents/projects/v0.4.0/PLAN.md:447
- ### Why More Sessions Than Originally Estimated — .agents/projects/v0.4.0/PLAN.md:449
- ### Session Protocol Plugin — .agents/projects/v0.4.0/PLAN.md:458
- ### Quality Gates Plugin — .agents/projects/v0.4.0/PLAN.md:483
- ### Verification — .agents/projects/v0.4.0/PLAN.md:494
- ## Phase 4: Wire ai-agents as Consumer (6-8 sessions) — .agents/projects/v0.4.0/PLAN.md:503
- ### Why More Sessions Than Originally Estimated — .agents/projects/v0.4.0/PLAN.md:505
- ### Steps — .agents/projects/v0.4.0/PLAN.md:514
- ### Namespace Migration — .agents/projects/v0.4.0/PLAN.md:549
- ### Verification — .agents/projects/v0.4.0/PLAN.md:560
- ## Phase 5: Documentation + Copilot CLI (4-5 sessions) — .agents/projects/v0.4.0/PLAN.md:570
- ### Standalone Documentation — .agents/projects/v0.4.0/PLAN.md:572
- ### Copilot CLI Integration — .agents/projects/v0.4.0/PLAN.md:584
- ### ai-agents README Update — .agents/projects/v0.4.0/PLAN.md:591
- ### Verification — .agents/projects/v0.4.0/PLAN.md:599
- ## Critical Files Reference — .agents/projects/v0.4.0/PLAN.md:608
- ## Security Model — .agents/projects/v0.4.0/PLAN.md:624
- ### Supply Chain — .agents/projects/v0.4.0/PLAN.md:626
- ### Hook Execution — .agents/projects/v0.4.0/PLAN.md:633
- ### Path Security — .agents/projects/v0.4.0/PLAN.md:640
- ### Secret Handling — .agents/projects/v0.4.0/PLAN.md:647
- ## Risks — .agents/projects/v0.4.0/PLAN.md:655
- ## Success Metrics — .agents/projects/v0.4.0/PLAN.md:671
- ## Gantt Timeline — .agents/projects/v0.4.0/PLAN.md:688
- ## Session Estimate Breakdown — .agents/projects/v0.4.0/PLAN.md:732
- ## References — .agents/projects/v0.4.0/PLAN.md:755

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/projects/v0.4.0/PLAN.md:465 · references `.agents/SESSION-PROTOCOL.md` (also cited at line 618), which does not exist in the repository (deleted in PR #5179 per retrospective and ADR records).
- missing-path · .agents/projects/v0.4.0/PLAN.md:201 · references `scripts/verify-framework-inventory.py` as a Phase 0 tool, which does not exist on disk.
- missing-path · .agents/projects/v0.4.0/PLAN.md:616 · references `.claude/skills/github/modules/GitHubCore.psm1`, which does not exist in the repository following the Python migration.
- missing-path · .agents/projects/v0.4.0/PLAN.md:617 · references `.claude/hooks/Common/HookUtilities.psm1`, which does not exist in the repository following the Python migration.
- doc-drift · .agents/projects/v0.4.0/PLAN.md:157 · Inventory Summary cites 168 total files (18 Agent Templates, 41 Skills, 18 Hooks, 30 Workflows, 61 Scripts) based on the earlier adr-045-inventory-audit, but subsequent repository evolution, PowerShell retirement, and hook consolidation have changed file counts.

## Observations
- Gate dependency on v0.3.1: Explicit blocking prerequisite requiring complete retirement of Pester/PSScriptAnalyzer (v0.3.1 Phase 5) before extraction begins, avoiding dual migration of PowerShell files.
- Path traversal mitigation: Requires `get_safe_path()` wrapping all consumer-provided environment variable path resolutions (`os.path.realpath` + containment verification), fail-closed on violation (CVSS 7.8).
- Session budget recalibration: Revised estimates upwards from 15-22 sessions to 30-39 sessions (+77%) after discovering 14 agent template path parameterizations, hook translation complexity, and supply chain SHA pinning requirements.

## Context cost
29810 bytes, ~7,500 tokens. When invoked alongside primary referenced artifacts (ADR-045, claude-code-plugin-marketplaces.md, PowerShell-migration.md, adr-045-inventory-audit.md, adr-045-feasibility-analysis.md, ADR-045 security review), total reference corpus is ~129,000 bytes (~32,250 tokens).
