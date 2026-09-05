---
package: rjm
path: .claude/agents/quality-auditor.md
type: agent
bytes: 3892
unit: inv-rjm-70
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/quality-auditor.md

## Purpose — required, verbatim
> "Periodically scans and grades product domains across architectural layers (agents, skills, scripts, tests, docs, workflows). Produces quality reports with gap tracking and trend analysis. Use when you need a systematic quality audit across the entire repository or specific domains. Use for repo-wide A-F domain grading and trend tracking. For the skill form use quality-grades. Do NOT use for single-file maintainability scoring (use code-qualities-assessment) or a pre-merge review (use review)." — .claude/agents/quality-auditor.md:3

## Design intent — required
Periodic repository-wide architectural quality auditor that systematically assesses product domains across six architectural layers (agents, skills, scripts, tests, docs, and workflows). Without it, engineering teams would lack objective, multi-layered quality visibility and longitudinal trend tracking, leaving architectural drift, domain gaps, and test or documentation deficits undetected until manual code reviews or production regressions occur.

## Phase — required
none

## Inputs — required
- Domain names to audit via argument hint (`argument-hint: Provide domain names to audit, or omit for full scan` — .claude/agents/quality-auditor.md:6)
- Repository structure and file contents via Read/Search tools (.claude/agents/quality-auditor.md:41)
- Domain grading execution outputs from `grade_domains.py` (.claude/agents/quality-auditor.md:42, 59, 65)
- Cross-session memory and context via Memory Router (`search_memory.py`) (.claude/agents/quality-auditor.md:44-46)
- Previous audit reports and JSON run artifacts for longitudinal trend tracking (.claude/agents/quality-auditor.md:73, 99)

## Outputs — required
- JSON grading data via `grade_domains.py --format json --output` (.claude/agents/quality-auditor.md:65)
- Markdown domain quality audit reports containing layer scores, file counts, and identified gaps (.claude/agents/quality-auditor.md:71, 81-92)
- Memory entries in `.serena/memories/` via Serena write tools (`serena/write_memory`, `serena/edit_memory`) (.claude/agents/quality-auditor.md:47-50)

## Invokes — required
- script grade_domains.py — .claude/agents/quality-auditor.md:42
- script search_memory.py — .claude/agents/quality-auditor.md:45
- skill quality-grades — .claude/agents/quality-auditor.md:3
- skill memory — .claude/agents/quality-auditor.md:45

## Invoked by — required
- doc quality-auditor — docs/agent-catalog.md:39
- doc quality-auditor — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:316

## Concepts named — required, verbatim
- `Quality Auditor` — .claude/agents/quality-auditor.md:12 — defined here
- `architectural layers` — .claude/agents/quality-auditor.md:12 — defined here
- `status indicators` — .claude/agents/quality-auditor.md:28 — defined here
- `Memory Router` — .claude/agents/quality-auditor.md:44 — used here
- `ADR-037` — .claude/agents/quality-auditor.md:44 — used here
- `six layers` — .claude/agents/quality-auditor.md:53 — defined here
- `Discovery` — .claude/agents/quality-auditor.md:57 — defined here
- `Grading` — .claude/agents/quality-auditor.md:63 — defined here
- `Reporting` — .claude/agents/quality-auditor.md:69 — defined here
- `trend analysis` — .claude/agents/quality-auditor.md:73 — defined here
- `Recommendations` — .claude/agents/quality-auditor.md:75 — defined here

## Structure
- # Quality Auditor Agent — .claude/agents/quality-auditor.md:8
- ## Core Identity — .claude/agents/quality-auditor.md:10
- ## Activation Profile — .claude/agents/quality-auditor.md:14
- ## Style Guide Compliance — .claude/agents/quality-auditor.md:20
- ## Tools — .claude/agents/quality-auditor.md:37
- ## Core Mission — .claude/agents/quality-auditor.md:51
- ## Process — .claude/agents/quality-auditor.md:55
- ### Phase 1: Discovery — .claude/agents/quality-auditor.md:57
- ### Phase 2: Grading — .claude/agents/quality-auditor.md:63
- ### Phase 3: Reporting — .claude/agents/quality-auditor.md:69
- ### Phase 4: Recommendations — .claude/agents/quality-auditor.md:75
- ## Output Format — .claude/agents/quality-auditor.md:81
- ## Boundaries — .claude/agents/quality-auditor.md:94

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/quality-auditor.md:42 · `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/quality-grades/scripts/grade_domains.py` resolves in Claude Code runtime to `.claude/skills/quality-grades/scripts/grade_domains.py`, which does not exist (the skill and script exist only in `src/copilot-cli/skills/quality-grades/`).
- `missing-path` · .claude/agents/quality-auditor.md:3 · The agent prompt directs users to "For the skill form use quality-grades", but no such skill exists under `.claude/skills/`.

## Observations
- Linked to variant `templates/agents/quality-auditor.shared.md` under ledger pair V10 (93% shared lines).
- Configured with `role: support` and `model: sonnet`.
- Defines an explicit 4-phase audit workflow (Discovery, Grading, Reporting, Recommendations) and a 6-layer assessment schema (agents, skills, scripts, tests, docs, workflows).

## Context cost
3,892 bytes (~950 tokens). Including invoked scripts `grade_domains.py` (~15KB) and `search_memory.py` (~12KB), invocation footprint is approximately 31,000 bytes (~7,800 tokens).
