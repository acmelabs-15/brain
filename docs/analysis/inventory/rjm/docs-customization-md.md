---
package: rjm
path: docs/customization.md
type: doc
bytes: 9493
unit: inv-rjm-191
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/customization.md

## Purpose — required, verbatim
> "This guide explains how to extend and customize the AI Agents system for your project." — docs/customization.md:3

## Design intent — required
Defines the architectural and practical model for customizing and extending the AI Agents framework across three platforms (Claude Code, GitHub Copilot CLI, and VS Code). It introduces the three-tier persistence philosophy (`SOUL.md` for cornerstone identity, `AGENTS.md`/`CLAUDE.md` for operating context, and `SKILL.md` for procedural memory) grounded in the assumption that sessions are ephemeral and agents must be reconstructed from a durable substrate. It explains how to author shared templates in `templates/agents/*.shared.md`, compile them into platform outputs via `build/generate_agents.py`, create reusable skills via `SkillForge`, configure orchestrator complexity routing, and attach hook guardrails. Without this document, contributors and users would lack instructions for extending agent capabilities and would risk editing generated platform files or incorrectly persisting ephemeral session state into identity layers.

## Phase — required
rjm:cross-phase

## Inputs — required
- Substrate files `SOUL.md`, `AGENTS.md`, `CLAUDE.md`, and `.claude/skills/<name>/SKILL.md` ("This shapes three layers, in order of stability:" — docs/customization.md:9)
- Agent templates in `templates/agents/<agent-name>.shared.md` ("Create a new file in `templates/agents/<agent-name>.shared.md`:" — docs/customization.md:40)
- Project constraint rules in `.agents/governance/PROJECT-CONSTRAINTS.md` ("modify `.agents/governance/PROJECT-CONSTRAINTS.md`." — docs/customization.md:150)
- Hook event data in JSON via stdin ("input_data = json.load(sys.stdin)" — docs/customization.md:179)

## Outputs — required
- Generated platform-specific agent files in `src/vs-code-agents/` and `src/copilot-cli/` ("This creates agent files in `src/vs-code-agents/` and `src/copilot-cli/`." — docs/customization.md:78)
- Claude Code agent markdown files at `src/claude/<agent-name>.md` ("For Claude Code, create a plain markdown file at `src/claude/<agent-name>.md` without YAML frontmatter." — docs/customization.md:82)
- Skill directories at `.claude/skills/<name>/` with `SKILL.md` and optional `scripts/` ("Skills are reusable workflow components stored in `.claude/skills/`." — docs/customization.md:96)
- PreToolUse / PostToolUse hook guardrails in `.claude/hooks/` ("Hooks live in `.claude/hooks/`." — docs/customization.md:160)
- Memory files in `.serena/memories/` ("1. Create a memory file in `.serena/memories/`" — docs/customization.md:203)

## Invokes — required
- file templates/agents/implementer.shared.md — docs/customization.md:34
- script build/generate_agents.py — docs/customization.md:75
- file .agents/governance/PROJECT-CONSTRAINTS.md — docs/customization.md:150
- file CLAUDE.md — docs/customization.md:191
- file .github/copilot-instructions.md — docs/customization.md:195
- doc CONTRIBUTING.md — docs/customization.md:214
- doc AGENTS.md — docs/customization.md:214

## Invoked by — required
- doc README.md — README.md:536
- doc docs/getting-started.md — docs/getting-started.md:199

## Concepts named — required, verbatim
- `reconstruction target` — docs/customization.md:7 — defined here
- `SOUL.md` — docs/customization.md:13 — used here
- `AGENTS.md` — docs/customization.md:14 — used here
- `CLAUDE.md` — docs/customization.md:14 — used here
- `SKILL.md` — docs/customization.md:15 — used here
- `The Bicameral Bet` — docs/customization.md:33 — used here
- `SkillForge` — docs/customization.md:120 — used here
- `Orchestrator routing` — docs/customization.md:132 — defined here
- `Critic review` — docs/customization.md:154 — used here
- `QA validation` — docs/customization.md:155 — used here
- `Security scan` — docs/customization.md:156 — used here
- `PreToolUse` — docs/customization.md:166 — used here
- `PostToolUse` — docs/customization.md:167 — used here
- `UserPromptSubmit` — docs/customization.md:168 — used here
- `copilot-instructions.md` — docs/customization.md:193 — used here
- `Memory system` — docs/customization.md:197 — used here
- `User docs` — docs/customization.md:213 — defined here
- `Contributor docs` — docs/customization.md:214 — defined here
- `Installation Artifacts` — docs/customization.md:218 — used here

## Structure
- ## Why the SOUL / AGENTS / SKILL split exists — docs/customization.md:5
- ### Operational implications — docs/customization.md:23
- ### Further reading — docs/customization.md:31
- ## Adding a New Agent — docs/customization.md:36
- ### Step 1: Create the template — docs/customization.md:38
- ### Step 2: Generate platform files — docs/customization.md:70
- ### Step 3: Add Claude Code agent (if needed) — docs/customization.md:80
- ### Step 4: Register in marketplace — docs/customization.md:84
- ## Modifying Existing Agents — docs/customization.md:88
- ## Creating Skills — docs/customization.md:94
- ### Skill structure — docs/customization.md:98
- ### SKILL.md format — docs/customization.md:107
- ### Using SkillForge — docs/customization.md:120
- ## Customizing Workflows — docs/customization.md:130
- ### Orchestrator routing — docs/customization.md:132
- ### Quality gate configuration — docs/customization.md:148
- ## Adding Hooks — docs/customization.md:158
- ### Hook types — docs/customization.md:162
- ### Example hook — docs/customization.md:170
- ## Project-Level Overrides — docs/customization.md:187
- ### CLAUDE.md — docs/customization.md:189
- ### copilot-instructions.md — docs/customization.md:193
- ### Memory system — docs/customization.md:197
- ### User docs vs. contributor docs — docs/customization.md:207
- ## Platform-Specific Customization — docs/customization.md:220
- ### Claude Code only — docs/customization.md:222
- ### VS Code and Copilot CLI — docs/customization.md:230

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: "SOUL.md" — docs/customization.md:13 — referenced as cornerstone identity layer at lines 13, 21, and 25 does not exist in repository root.

## Observations
- Emphasizes the "reconstruction target" theory of LLM agents, arguing that agents do not survive sessions and that identity must be reconstructed at session start from durable markdown files rather than pickled context dumps.
- Distinguishes strictly between user-facing documentation (`src/`) and contributor-facing documentation (repo root), prohibiting mixing audiences in documents referenced by `InstructionsFile`.
- References the excluded `.serena/memories/` subsystem (METHOD.md §1.2).

## Context cost
9,493 bytes. Approximately 2,370 tokens.
