---
package: rjm
path: src/claude/AGENTS.md
type: doc
bytes: 11687
unit: inv-rjm-311
in_scope_via: README.md
aliases:
  - .claude/agents/AGENTS.md
memo_inputs:
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# src/claude/AGENTS.md

## Purpose — required, verbatim
> "This document describes the 19 AI agents defined for Claude Code CLI and the critical workflow rules for maintaining them." — src/claude/AGENTS.md:3

## Design intent — required
Establishes the governance, architecture, and maintenance workflows for the hand-maintained Claude Code CLI agent suite (`src/claude/*.md`) and their synchronization with cross-platform shared templates (`templates/agents/*.shared.md`). It documents the two-source architecture (ADR-036 / ADR-052), cataloging the 19 core agents across coordination, analysis, implementation, strategic, and support tiers, and specifies the manual synchronization rules, naming patterns, frontmatter structure, and CI drift detection (80% similarity threshold) needed to keep Claude agents aligned with VS Code and Copilot CLI variants.

## Phase — required
rjm:orchestrator

## Inputs — required
- Hand-maintained agent definitions in `src/claude/*.md`
- Shared agent templates in `templates/agents/*.shared.md`
- Platform configurations in `templates/platforms/*.yaml`
- Installed runtime copies in `.claude/agents/*.md`

## Outputs — required
- Generated agent files in `src/vs-code-agents/*.agent.md` and `src/copilot-cli/agents/*.agent.md` (via `build/generate_agents.py`)
- CI drift reports and GitHub issues via `drift-detection.yml`

## Invokes — required
- doc docs/installation.md — src/claude/AGENTS.md:43
- script build/generate_agents.py — src/claude/AGENTS.md:67
- script build/scripts/detect_agent_drift.py — src/claude/AGENTS.md:316
- file drift-detection.yml — src/claude/AGENTS.md:86
- file validate-generated-agents.yml — src/claude/AGENTS.md:345
- file pytest.yml — src/claude/AGENTS.md:347

## Invoked by — required
- doc templates/AGENTS.md — templates/AGENTS.md:13
- doc templates/README.md — templates/README.md:249
- doc build/AGENTS.md — build/AGENTS.md:85
- script build/scripts/validate_agent_matrix_refs.py — build/scripts/validate_agent_matrix_refs.py:64

## Concepts named — required, verbatim
- `orchestrator` — src/claude/AGENTS.md:141 — used here
- `milestone-planner` — src/claude/AGENTS.md:142 — used here
- `task-decomposer` — src/claude/AGENTS.md:143 — used here
- `backlog-generator` — src/claude/AGENTS.md:144 — used here
- `analyst` — src/claude/AGENTS.md:150 — used here
- `architect` — src/claude/AGENTS.md:151 — used here
- `critic` — src/claude/AGENTS.md:152 — used here
- `implementer` — src/claude/AGENTS.md:158 — used here
- `qa` — src/claude/AGENTS.md:159 — used here
- `devops` — src/claude/AGENTS.md:160 — used here
- `security` — src/claude/AGENTS.md:161 — used here
- `merge-resolver` — src/claude/AGENTS.md:162 — used here
- `roadmap` — src/claude/AGENTS.md:168 — used here
- `high-level-advisor` — src/claude/AGENTS.md:169 — used here
- `independent-thinker` — src/claude/AGENTS.md:170 — used here
- `skillbook` — src/claude/AGENTS.md:176 — used here
- `retrospective` — src/claude/AGENTS.md:177 — used here
- `explainer` — src/claude/AGENTS.md:178 — used here
- `pr-comment-responder` — src/claude/AGENTS.md:179 — used here
- `Feature Development` — src/claude/AGENTS.md:227 — defined here
- `Quick Fix` — src/claude/AGENTS.md:230 — defined here
- `Strategic Decision` — src/claude/AGENTS.md:233 — defined here
- `PR Review` — src/claude/AGENTS.md:236 — defined here

## Structure
- # Claude Code Agents — src/claude/AGENTS.md:1
- ## Overview — src/claude/AGENTS.md:5
- ## Source vs Installation Relationship — src/claude/AGENTS.md:17
- ## Critical Workflow Rules — src/claude/AGENTS.md:47
- ### Rule 1: Bidirectional Synchronization (CRITICAL - ADR-036) — src/claude/AGENTS.md:49
- ### Rule 2: Drift Detection — src/claude/AGENTS.md:84
- ### Rule 3: File Naming — src/claude/AGENTS.md:92
- ## Architecture — src/claude/AGENTS.md:103
- ## Agent Catalog — src/claude/AGENTS.md:135
- ### Coordination Agents — src/claude/AGENTS.md:137
- ### Analysis Agents — src/claude/AGENTS.md:146
- ### Implementation Agents — src/claude/AGENTS.md:154
- ### Strategic Agents — src/claude/AGENTS.md:164
- ### Support Agents — src/claude/AGENTS.md:172
- ## Agent File Structure — src/claude/AGENTS.md:183
- ### Frontmatter — src/claude/AGENTS.md:187
- ### Required Sections — src/claude/AGENTS.md:198
- ## Invocation — src/claude/AGENTS.md:214
- ### Via Task Tool — src/claude/AGENTS.md:216
- ### Standard Workflows — src/claude/AGENTS.md:224
- ## Claude-Specific Features — src/claude/AGENTS.md:242
- ### Tool Syntax — src/claude/AGENTS.md:244
- ### GitHub Skill Integration — src/claude/AGENTS.md:264
- ## Maintenance Procedures — src/claude/AGENTS.md:280
- ### Adding a New Agent — src/claude/AGENTS.md:282
- ### Modifying an Existing Agent — src/claude/AGENTS.md:291
- ### Validating Changes — src/claude/AGENTS.md:309
- ## Error Handling — src/claude/AGENTS.md:324
- ## Security Considerations — src/claude/AGENTS.md:332
- ## Monitoring — src/claude/AGENTS.md:341
- ## Related Documentation — src/claude/AGENTS.md:351

## Scripts — required if type is script or the skill ships scripts
- path: `build/generate_agents.py`, Python, 305 lines
- documented invocation:
  > "3. Run: uv run python build/generate_agents.py" — src/claude/AGENTS.md:67
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python build/generate_agents.py --validate`
  Stdout: `VALIDATION PASSED: All generated files match committed files`
  Actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented: none in docstring.
  Actual exit paths: exits 0 when generated files match disk, exits 1 on validation mismatches or template syntax errors.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits 1 on drift or syntax failure; passes (exit 0) on current repository default branch.
- does the output match what the documentation claims?
  Yes; validates all 31 agents across 3 platform configurations (VS Code, Copilot CLI, Visual Studio).

## Defects — required
- `doc-drift` · src/claude/AGENTS.md:3 · States there are "19 AI agents defined for Claude Code CLI", but the repository defines 31 agents in shared templates (`templates/agents/`) and `build/scripts/detect_agent_drift.py` tracks 31 distinct agents.
- `missing-path` · src/claude/AGENTS.md:361 · References `.serena/memories/usage-mandatory.md`, but no `.serena/` directory exists in the repository.

## Observations
- `src/claude/AGENTS.md` is satisfied as an EXACT duplicate of `.claude/agents/AGENTS.md` (duplication ledger group 4), with 11,687 bytes and SHA-256 `a7373badc34caabb`.
- Documents the two-source architecture where Claude Code agents are hand-maintained in `src/claude/`, while VS Code and Copilot CLI variants are generated from `templates/agents/*.shared.md`. Direct modifications made to runtime `.claude/agents/` must be manually backported to `src/claude/`.

## Context cost
11687 bytes (~2922 tokens).
