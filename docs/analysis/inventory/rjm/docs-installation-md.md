---
package: rjm
path: docs/installation.md
type: doc
bytes: 7112
unit: inv-rjm-192
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/installation.md, sha256: 35b5fb5bea8f2d9a438755cc8cf9c551b487e6b875e554b646638f78a4608729}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/installation.md

## Purpose — required, verbatim
> "This guide covers native marketplace installation for the AI Agents system." — docs/installation.md:3

## Design intent — required
Documents setup and installation procedures across multiple supported AI coding environments (Claude Code CLI, GitHub Copilot CLI, VS Code with Copilot Chat, and Visual Studio 2022/2026), providing marketplace registration commands, component-level install options, filesystem locations, verification steps, and troubleshooting.

## Phase — required
none

## Inputs — required
- "Claude Code CLI" — docs/installation.md:9
- "GitHub Copilot CLI" — docs/installation.md:10
- "VS Code with GitHub Copilot Chat" — docs/installation.md:11
- "Visual Studio 2022/2026 with GitHub Copilot Chat" — docs/installation.md:12
- ".claude-plugin/marketplace.json" — docs/installation.md:28
- ".github/plugin/marketplace.json" — docs/installation.md:46
- ".agents/steering/claude-skills.md" — docs/installation.md:113

## Outputs — required
- ".claude/agents/" — docs/installation.md:94
- "CLAUDE.md" — docs/installation.md:94
- ".github/agents/" — docs/installation.md:95
- ".github/copilot-instructions.md" — docs/installation.md:95
- ".claude/skills/" — docs/installation.md:113

## Invokes — required
- doc CONTRIBUTING.md — docs/installation.md:14
- script validate_skill_installation.py — docs/installation.md:128
- script install_semgrep.py — docs/installation.md:211

## Invoked by — required
- doc README.md — README.md:217
- doc project-structure.md — docs/project-structure.md:23
- doc getting-started.md — docs/getting-started.md:63

## Concepts named — required, verbatim
`marketplace` — docs/installation.md:3 — used here
`Claude Code CLI` — docs/installation.md:9 — used here
`GitHub Copilot CLI` — docs/installation.md:10 — used here
`project-toolkit` — docs/installation.md:74 — defined here
`claude-agents` — docs/installation.md:73 — defined here
`optional skill packs` — docs/installation.md:132 — defined here
`Worktrunk` — docs/installation.md:226 — used here

## Structure
# Installation Guide — docs/installation.md:1
## Prerequisites — docs/installation.md:5
## Fastest Start — docs/installation.md:16
### Claude Code — docs/installation.md:20
### GitHub Copilot CLI — docs/installation.md:30
### VS Code and Visual Studio — docs/installation.md:48
## Component-Level Installation — docs/installation.md:59
### Claude Code — docs/installation.md:63
### GitHub Copilot CLI — docs/installation.md:76
## Installation Paths — docs/installation.md:88
### Repository Installation Paths — docs/installation.md:90
### Visual Studio 2022/2026 Notes — docs/installation.md:99
## Skills — docs/installation.md:109
### Optional skill packs — docs/installation.md:132
## Uninstallation — docs/installation.md:148
### Claude Code — docs/installation.md:152
### GitHub Copilot CLI — docs/installation.md:159
## Troubleshooting — docs/installation.md:165
### Claude Code — docs/installation.md:167
### GitHub Copilot CLI — docs/installation.md:172
### VS Code / Visual Studio — docs/installation.md:178
### Verify Installation — docs/installation.md:183
### Security Scanning (Recommended for contributors) — docs/installation.md:206
### Worktrunk Setup (Optional) — docs/installation.md:224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents dual-platform support spanning Claude Code (`.claude/agents/`, `CLAUDE.md`, `.claude/skills/`) and GitHub Copilot / VS Code (`.github/agents/`, `.github/copilot-instructions.md`).
- Explains selective installation via marketplace packaging, offering `project-toolkit@ai-agents` (full suite including agents, commands, hooks, and skills) or `claude-agents@ai-agents` (agent definitions only).
- Documents optional skill packs (e.g. `--pack business` installing `business-strategy`) and Worktrunk worktree automation hooks (`.config/wt.toml`).

## Context cost
7112 bytes, ~1800 tokens. Standalone guide.
