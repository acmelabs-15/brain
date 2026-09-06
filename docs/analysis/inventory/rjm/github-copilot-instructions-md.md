---
package: rjm
path: .github/copilot-instructions.md
type: doc
bytes: 4707
unit: inv-rjm-182
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/copilot-instructions.md

## Purpose — required, verbatim
> "**IMPORTANT**: File minimal. Cut context bloat. Detail in AGENTS.md." — .github/copilot-instructions.md:3

## Design intent — required
Entry-point instruction manifest specifically tuned for GitHub Copilot (VS Code extension and Copilot CLI) sessions interacting with the repository. It establishes an ultra-lean context budget by delegating detailed reference documentation to root `AGENTS.md` and `.agents/AGENT-SYSTEM.md`, while enforcing non-negotiable operational gates: mandatory Serena MCP initialization, subagent delegation patterns via `#runSubagent`, session start/end protocols, and awareness of recurring development gotchas (`.agents/governance/GOTCHAS.md`). Without it, Copilot sessions would either suffer context window exhaustion from loading redundant repository rules or fail to observe required pre-flight checks and delegation boundaries.

## Phase — required
cross-phase

## Inputs — required
- Global behavioral steering from `~/.copilot/copilot-instructions.md` (local) or GitHub dotfiles repo (.github/copilot-instructions.md:7-12)
- Session start inputs: branch status via `git branch --show-current`, per-issue handoffs, Serena memory, and optional JSON session log (.github/copilot-instructions.md:87-93)
- Reference artifacts: `AGENTS.md`, `.agents/governance/PROJECT-CONSTRAINTS.md`, `.agents/AGENT-SYSTEM.md`, and `.agents/governance/GOTCHAS.md` (.github/copilot-instructions.md:116-120)

## Outputs — required
- `#runSubagent` delegation calls for complex tasks (.github/copilot-instructions.md:35-37)
- Session end artifacts: updated per-issue handoffs, updated Serena memory, scoped markdownlint validation, validated JSON session log (.github/copilot-instructions.md:95-101)

## Invokes — required
- doc AGENTS.md — .github/copilot-instructions.md:116
- doc .claude/rules/session-logs.md — .github/copilot-instructions.md:117
- doc .agents/governance/PROJECT-CONSTRAINTS.md — .github/copilot-instructions.md:118
- doc .agents/AGENT-SYSTEM.md — .github/copilot-instructions.md:119
- doc .agents/governance/GOTCHAS.md — .github/copilot-instructions.md:108
- template templates/agents/implementer.shared.md — .github/copilot-instructions.md:80

## Invoked by — required
- doc README.md — README.md:437
- doc docs/installation.md — docs/installation.md:50
- doc docs/customization.md — docs/customization.md:195
- script scripts/validate_workspace_budget.py — scripts/validate_workspace_budget.py:39

## Concepts named — required, verbatim
- `Global Behavioral Steering` — .github/copilot-instructions.md:5 — defined here
- `Agent Delegation for Complex Tasks` — .github/copilot-instructions.md:14 — defined here
- `#runSubagent` — .github/copilot-instructions.md:16 — used here
- `orchestrator` — .github/copilot-instructions.md:20 — used here
- `analyst` — .github/copilot-instructions.md:21 — used here
- `architect` — .github/copilot-instructions.md:22 — used here
- `implementer` — .github/copilot-instructions.md:23 — used here
- `critic` — .github/copilot-instructions.md:24 — used here
- `security` — .github/copilot-instructions.md:25 — used here
- `Serena MCP Initialization` — .github/copilot-instructions.md:60 — defined here
- `Critical Constraints` — .github/copilot-instructions.md:71 — defined here
- `Session Protocol` — .github/copilot-instructions.md:83 — defined here
- `Gotchas` — .github/copilot-instructions.md:102 — defined here

## Structure
- # GitHub Copilot Instructions — .github/copilot-instructions.md:1
- ## Global Behavioral Steering — .github/copilot-instructions.md:5
- ## Agent Delegation for Complex Tasks — .github/copilot-instructions.md:14
- ## Primary Reference — .github/copilot-instructions.md:41
- ## Serena MCP Initialization (BLOCKING) — .github/copilot-instructions.md:60
- ## Critical Constraints (Quick Reference) — .github/copilot-instructions.md:71
- ## Session Protocol (Quick Reference) — .github/copilot-instructions.md:83
- ## Gotchas (non-obvious, save cycles) — .github/copilot-instructions.md:102
- ## Key Documents — .github/copilot-instructions.md:114

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .github/copilot-instructions.md:90 · references root file `HANDOFF.md` ("Read HANDOFF.md (read-only dashboard)") which does not exist at repo root (historical handoffs live in `.agents/archive/` and templates in `.agents/templates/`).

## Observations
- Deliberately concise (4707 bytes) pursuant to the explicit banner: "File minimal. Cut context bloat. Detail in AGENTS.md."
- Injected automatically into every Copilot workspace turn, with byte budget monitored and capped by `scripts/validate_workspace_budget.py` (budget ceiling: 6351 bytes).

## Context cost
4707 bytes (~1176 tokens). Self-contained prompt instruction file.
