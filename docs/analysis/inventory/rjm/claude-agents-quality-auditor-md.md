---
package: rjm
path: .claude/agents/quality-auditor.md
type: agent
bytes: 3892
unit: inv-rjm-70
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/agents/quality-auditor.md

## Purpose — required, verbatim
> "Periodically scans and grades product domains across architectural layers (agents, skills, scripts, tests, docs, workflows). Produces quality reports with gap tracking and trend analysis. Use when you need a systematic quality audit across the entire repository or specific domains. Use for repo-wide A-F domain grading and trend tracking. For the skill form use quality-grades. Do NOT use for single-file maintainability scoring (use code-qualities-assessment) or a pre-merge review (use review)." — .claude/agents/quality-auditor.md:3

## Design intent — required
A support agent designed to provide systematic, repo-wide, objective quality assessment across six architectural layers (agents, skills, scripts, tests, docs, workflows). By computing letter grades (A–F) and numeric scores (0–100) per domain and tracking trends across audit runs, it surfaces technical debt, documentation gaps, and test deficiencies before they compound into systemic decay. It enforces strict separation between broad domain-level health audits and single-file maintainability checks (delegated to `code-qualities-assessment`) or pre-merge gate validation (delegated to `review`).

## Phase — required
rjm:support

## Inputs — required
- Domain names to audit (or omitted for full scan) via argument prompt (`argument-hint: Provide domain names to audit, or omit for full scan` — .claude/agents/quality-auditor.md:6)
- Repository structure and file contents via Read/Search tools ("Scan repository structure and file contents" — .claude/agents/quality-auditor.md:41)
- Past audit memories and context via Memory Router (`search_memory.py` — .claude/agents/quality-auditor.md:45)
- Prior audit execution data for trend comparison ("Compare against previous run for trend analysis" — .claude/agents/quality-auditor.md:73)

## Outputs — required
- Persisted JSON grading data generated via `--format json --output` ("Run the grading script with `--format json --output` for persistence" — .claude/agents/quality-auditor.md:65)
- Human-readable markdown audit report ("Generate markdown report for human consumption" — .claude/agents/quality-auditor.md:71) structured by domain with layer grades, scores, file counts, and gaps (.claude/agents/quality-auditor.md:85-92)
- Actionable recommendations prioritizing D/F domains and critical/significant gaps (.claude/agents/quality-auditor.md:77-79)
- Persisted memories in `.serena/memories/` via Serena write tools (`serena/write_memory` — .claude/agents/quality-auditor.md:48; `serena/edit_memory` — .claude/agents/quality-auditor.md:49)

## Invokes — required
- script grade_domains.py — .claude/agents/quality-auditor.md:42
- script search_memory.py — .claude/agents/quality-auditor.md:45
- skill quality-grades — .claude/agents/quality-auditor.md:3
- skill code-qualities-assessment — .claude/agents/quality-auditor.md:3
- skill review — .claude/agents/quality-auditor.md:3

## Invoked by — required
- agent quality-auditor — .claude/agents/orchestrator.md:97
- doc quality-auditor — docs/agent-catalog.md:39
- script quality-auditor — .claude/skills/quality-grades/scripts/grade_domains.py:432

## Concepts named — required, verbatim
- `quality-auditor` — .claude/agents/quality-auditor.md:2 — defined here
- `quality-grades` — .claude/agents/quality-auditor.md:3 — used here
- `code-qualities-assessment` — .claude/agents/quality-auditor.md:3 — used here
- `review` — .claude/agents/quality-auditor.md:3 — used here
- `architectural layers` — .claude/agents/quality-auditor.md:3 — used here
- `gap tracking` — .claude/agents/quality-auditor.md:3 — used here
- `trend analysis` — .claude/agents/quality-auditor.md:3 — used here
- `A-F domain grading` — .claude/agents/quality-auditor.md:3 — used here
- `role: support` — .claude/agents/quality-auditor.md:5 — defined here
- `argument-hint` — .claude/agents/quality-auditor.md:6 — defined here
- `Memory Router` — .claude/agents/quality-auditor.md:44 — used here
- `ADR-037` — .claude/agents/quality-auditor.md:44 — used here
- `Serena` — .claude/agents/quality-auditor.md:44 — used here
- `Forgetful` — .claude/agents/quality-auditor.md:44 — used here
- `serena/write_memory` — .claude/agents/quality-auditor.md:48 — used here
- `serena/edit_memory` — .claude/agents/quality-auditor.md:49 — used here
- `Discovery` — .claude/agents/quality-auditor.md:57 — defined here
- `Grading` — .claude/agents/quality-auditor.md:63 — defined here
- `Reporting` — .claude/agents/quality-auditor.md:69 — defined here
- `Recommendations` — .claude/agents/quality-auditor.md:75 — defined here

## Structure
- - # Quality Auditor Agent — .claude/agents/quality-auditor.md:8
- - ## Core Identity — .claude/agents/quality-auditor.md:10
- - ## Activation Profile — .claude/agents/quality-auditor.md:14
- - ## Style Guide Compliance — .claude/agents/quality-auditor.md:20
- - ## Tools — .claude/agents/quality-auditor.md:37
- - ## Core Mission — .claude/agents/quality-auditor.md:51
- - ## Process — .claude/agents/quality-auditor.md:55
- - ### Phase 1: Discovery — .claude/agents/quality-auditor.md:57
- - ### Phase 2: Grading — .claude/agents/quality-auditor.md:63
- - ### Phase 3: Reporting — .claude/agents/quality-auditor.md:69
- - ### Phase 4: Recommendations — .claude/agents/quality-auditor.md:75
- - ## Output Format — .claude/agents/quality-auditor.md:81
- - ## Boundaries — .claude/agents/quality-auditor.md:94

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/agents/quality-auditor.md:48-49 · References MCP tools `serena/write_memory` and `serena/edit_memory` with forward slash syntax whereas standard Claude Code Serena tools in `qa.md` and elsewhere use `mcp__serena__write_memory` and `mcp__serena__edit_memory`.

## Observations
- Multi-target template divergence V10: `.claude/agents/quality-auditor.md` differs from `templates/agents/quality-auditor.shared.md` (93% shared ratio, 1 hunk) where canonical specifies Claude Code frontmatter (`model: sonnet`, `name: quality-auditor`) while the shared template specifies `model_tier: sonnet` and multi-harness toolsets (`tools_vscode`, `tools_copilot`). Documented in divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-quality-auditor-md--templates-agents-quality-auditor-shared-md.md`.
- Assesses six distinct architectural layers: agents, skills, scripts, tests, docs, and workflows (.claude/agents/quality-auditor.md:53).
- Uses environment variable expansion `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` to support dual plugin environments.

## Context cost
3892 bytes, 100 lines, approx. 950 tokens. Loads `grade_domains.py` (16,908 bytes) and `search_memory.py` (14,860 bytes) on execution.
