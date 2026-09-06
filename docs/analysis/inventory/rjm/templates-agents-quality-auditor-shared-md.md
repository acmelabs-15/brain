---
package: rjm
path: templates/agents/quality-auditor.shared.md
type: agent
bytes: 3994
unit: inv-rjm-320
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/quality-auditor.shared.md

## Purpose — required, verbatim
> "Periodically scans and grades product domains across architectural layers (agents, skills, scripts, tests, docs, workflows). Produces quality reports with gap tracking and trend analysis. Use when you need a systematic quality audit across the entire repository or specific domains. Use for repo-wide A-F domain grading and trend tracking. For the skill form use quality-grades. Do NOT use for single-file maintainability scoring (use code-qualities-assessment) or a pre-merge review (use review)." — templates/agents/quality-auditor.shared.md:4

## Design intent — required
Periodic repository-wide architectural quality auditor that systematically assesses product domains across six architectural layers (agents, skills, scripts, tests, docs, and workflows). Without it, engineering teams would lack objective, multi-layered quality visibility and longitudinal trend tracking, leaving architectural drift, domain gaps, and test or documentation deficits undetected until manual code reviews or production regressions occur.

## Phase — required
none

## Inputs — required
- Domain names to audit via argument hint (`argument-hint: Provide domain names to audit, or omit for full scan` — templates/agents/quality-auditor.shared.md:5)
- Repository structure and file contents via Read/Search tools (templates/agents/quality-auditor.shared.md:46)
- Domain grading execution outputs from `grade_domains.py` (templates/agents/quality-auditor.shared.md:47, 64, 70)
- Unified search across Serena + Forgetful via Memory Router (ADR-037) `search_memory.py --query "topic"` (templates/agents/quality-auditor.shared.md:49-51)
- Previous audit reports and JSON run artifacts for longitudinal trend tracking (templates/agents/quality-auditor.shared.md:78, 104)

## Outputs — required
- JSON grading data via `grade_domains.py --format json --output` (templates/agents/quality-auditor.shared.md:70)
- Markdown domain quality audit reports containing layer scores, file counts, identified gaps, and recommendations (templates/agents/quality-auditor.shared.md:48, 76-79, 88-97)
- Memory entries in `.serena/memories/` via Serena write tools (`serena/write_memory`, `serena/edit_memory`) (templates/agents/quality-auditor.shared.md:52-54)

## Invokes — required
- script grade_domains.py — templates/agents/quality-auditor.shared.md:47
- script search_memory.py — templates/agents/quality-auditor.shared.md:50
- tool serena/write_memory — templates/agents/quality-auditor.shared.md:53
- tool serena/edit_memory — templates/agents/quality-auditor.shared.md:54
- skill quality-grades — templates/agents/quality-auditor.shared.md:4
- skill code-qualities-assessment — templates/agents/quality-auditor.shared.md:4
- skill review — templates/agents/quality-auditor.shared.md:4

## Invoked by — required
- `docs/agent-catalog.md:39`
- `src/copilot-cli/skills/ai-agents-generation-and-release/SKILL.md:62`
- `tests/test_quality_auditor_agent_reachability.py:13`

## Concepts named — required, verbatim
- `Quality Auditor` — templates/agents/quality-auditor.shared.md:17 — defined here
- `Memory Router` — templates/agents/quality-auditor.shared.md:49 — used here
- `ADR-037` — templates/agents/quality-auditor.shared.md:49 — used here
- `Serena` — templates/agents/quality-auditor.shared.md:49 — used here
- `Forgetful` — templates/agents/quality-auditor.shared.md:49 — used here
- `Phase 1: Discovery` — templates/agents/quality-auditor.shared.md:62 — defined here
- `Phase 2: Grading` — templates/agents/quality-auditor.shared.md:68 — defined here
- `Phase 3: Reporting` — templates/agents/quality-auditor.shared.md:74 — defined here
- `Phase 4: Recommendations` — templates/agents/quality-auditor.shared.md:80 — defined here
- `grade_domains.py` — templates/agents/quality-auditor.shared.md:47 — used here
- `search_memory.py` — templates/agents/quality-auditor.shared.md:50 — used here
- `quality-grades` — templates/agents/quality-auditor.shared.md:4 — used here
- `code-qualities-assessment` — templates/agents/quality-auditor.shared.md:4 — used here
- `review` — templates/agents/quality-auditor.shared.md:4 — used here
- `serena/write_memory` — templates/agents/quality-auditor.shared.md:53 — used here
- `serena/edit_memory` — templates/agents/quality-auditor.shared.md:54 — used here

## Structure
- # Quality Auditor Agent — templates/agents/quality-auditor.shared.md:13
- ## Core Identity — templates/agents/quality-auditor.shared.md:15
- ## Activation Profile — templates/agents/quality-auditor.shared.md:19
- ## Style Guide Compliance — templates/agents/quality-auditor.shared.md:25
- ## Tools — templates/agents/quality-auditor.shared.md:42
- ## Core Mission — templates/agents/quality-auditor.shared.md:56
- ## Process — templates/agents/quality-auditor.shared.md:60
- ### Phase 1: Discovery — templates/agents/quality-auditor.shared.md:62
- ### Phase 2: Grading — templates/agents/quality-auditor.shared.md:68
- ### Phase 3: Reporting — templates/agents/quality-auditor.shared.md:74
- ### Phase 4: Recommendations — templates/agents/quality-auditor.shared.md:80
- ## Output Format — templates/agents/quality-auditor.shared.md:86
- ## Boundaries — templates/agents/quality-auditor.shared.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · templates/agents/quality-auditor.shared.md:47 · Path `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/quality-grades/scripts/grade_domains.py` resolves to non-existent file under default fallback `.claude/skills/quality-grades/scripts/grade_domains.py`.
- `missing-path` · templates/agents/quality-auditor.shared.md:50 · Path `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/memory/scripts/search_memory.py` resolves to non-existent file under default fallback `.claude/skills/memory/scripts/search_memory.py`.

## Observations
- Cross-platform template architecture: Serves as the cross-harness template source defining toolsets for VS Code and GitHub Copilot (`tools_vscode`, `tools_copilot`), intended for multi-platform distribution.
- Divergence with `.claude/agents/quality-auditor.md`: Documented in ledger VARIANT V10 (`claude-agents-quality-auditor-md--templates-agents-quality-auditor-shared-md.md`). Differences are restricted to frontmatter harness metadata (`model_tier: sonnet` vs `model: sonnet` and explicit tool declarations).
- Periodic support agent: Operates outside the sequential SDLC commands (`/spec`, `/plan`, `/build`, `/test`, `/ship`), focusing on longitudinal health monitoring across 6 domain layers.

## Context cost
File size is 3,994 bytes (~1,000 tokens). Loaded context includes repository structure and invoked scripts (`grade_domains.py` ~45 KB), leading to an execution context cost of ~50 KB (~12,500 tokens).
