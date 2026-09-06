---
package: rjm
path: README.md
type: doc
bytes: 29662
unit: inv-rjm-195
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# README.md

## Purpose — required, verbatim
> "AI Agents is a coordinated multi-agent system for software development. It provides specialized AI agents that handle different phases of the development lifecycle, from research and planning through implementation and quality assurance." — README.md:120

## Design intent — required
Repository root documentation and primary entry point for the `rjmurillo/ai-agents` multi-agent framework across Claude Code, GitHub Copilot CLI, and VS Code. Outlines the project's governance-oriented architecture, native marketplace installation commands, agent catalog, and the canonical six-stage lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`). Establishes how specialized agents collaborate through explicit handoffs and quality gates, enabling structured transitions from feature conception through testing to production delivery. Without this file, users and contributors would lack a unified roadmap explaining how the repository's plugins, commands, skills, and agents connect into a coherent development lifecycle.

## Phase — required
cross-phase

## Inputs — required
- User task descriptions and prompt directives (e.g. `Task(subagent_type="analyst", prompt="Hello, are you available?")`, `@orchestrator`, slash commands) — README.md:192, 206, 328
- Platform marketplace manifests (`.claude-plugin/marketplace.json`, `.github/plugin/marketplace.json`) — README.md:21
- Existing codebase source files, PRDs, and specs (e.g. `@src/auth/login-handler.ts`, `@.agents/specs/webhook-retry.md`) — README.md:233, 271
- Environment variables and credentials (`.env`) — README.md:505

## Outputs — required
- Installed plugins across Claude Code and Copilot CLI (`claude-agents@ai-agents`, `project-toolkit@ai-agents`) — README.md:170, 171, 181
- Functional specifications, user stories, and acceptance criteria — README.md:122, 316
- Milestones, atomic work packages, dependency graphs, and risk registers — README.md:317, 400
- Production code, test suites, and atomic git commits — README.md:318, 401
- Quality gate verdicts across 6 verification axes — README.md:319, 402, 403
- 5-axis code review verdicts (APPROVE / REJECT) — README.md:233, 320
- Pull requests and ship reports — README.md:321

## Invokes — required
- config .claude-plugin/marketplace.json — README.md:21
- config .github/plugin/marketplace.json — README.md:21
- doc docs/installation.md — README.md:217
- doc docs/workflow-commands.md — README.md:344
- doc AGENTS.md — README.md:421
- doc CONTRIBUTING.md — README.md:487
- doc docs/getting-started.md — README.md:532
- doc docs/agent-catalog.md — README.md:533
- doc docs/skill-reference.md — README.md:534
- doc docs/architecture.md — README.md:535
- doc docs/customization.md — README.md:536
- doc docs/project-structure.md — README.md:538
- doc CLAUDE.md — README.md:541
- doc .github/copilot-instructions.md — README.md:542
- doc docs/workflow-commands.md — README.md:543
- doc docs/when-to-use.md — README.md:544
- doc docs/ideation-workflow.md — README.md:545
- doc docs/markdown-linting.md — README.md:546

## Invoked by — required
entry-point

## Concepts named — required, verbatim
- `Agent` — README.md:142 — defined here
- `Orchestrator` — README.md:143 — defined here
- `Handoff` — README.md:144 — defined here
- `Skill` — README.md:145 — defined here
- `Memory` — README.md:146 — defined here
- `ADR` — README.md:147 — defined here
- `Quality Gate` — README.md:148 — defined here
- `Session protocol` — README.md:3 — used here
- `Multi-Agent Impact Analysis Framework` — README.md:130 — used here
- `Lifecycle Commands` — README.md:301 — used here
- `/spec` — README.md:311 — used here
- `/plan` — README.md:311 — used here
- `/build` — README.md:311 — used here
- `/test` — README.md:311 — used here
- `/review` — README.md:311 — used here
- `/ship` — README.md:311 — used here
- `CVA analysis` — README.md:316 — used here
- `TDD slices` — README.md:318 — used here
- `RICE` — README.md:295 — used here
- `KANO` — README.md:295 — used here
- `RADAR protocol` — README.md:418 — used here
- `Agent Catalog` — README.md:391 — used here

## Structure
- `# AI Agent System` — README.md:1
- `## Fastest Start` — README.md:19
- `### What You Get` — README.md:46
- `### Troubleshooting` — README.md:59
- `## Where to Start` — README.md:70
- `## Table of Contents` — README.md:82
- `## Purpose and Scope` — README.md:116
- `### What is AI Agents?` — README.md:118
- `### Core Capabilities` — README.md:126
- `### Key Concepts` — README.md:138
- `## Alternative: Full Installation` — README.md:152
- `### Quick Install (CLI marketplace)` — README.md:158
- `### Verify Installation` — README.md:185
- `### Supported Platforms` — README.md:209
- `## Quick Start` — README.md:221
- `### Examples` — README.md:225
- `#### Simple Scenarios` — README.md:229
- `#### Advanced Scenarios` — README.md:267
- `## Lifecycle Commands` — README.md:301
- `## System Architecture` — README.md:348
- `### How Agents Work Together` — README.md:350
- `### Agent Catalog` — README.md:391
- `### Directory Structure` — README.md:423
- `## Additional Troubleshooting` — README.md:444
- `## Contributing` — README.md:485
- `### Developer Setup` — README.md:489
- `### Agent Development` — README.md:516
- `## Documentation` — README.md:528
- `## License` — README.md:550

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · README.md:15 · Image link points to an unrecorded placeholder URL `https://github.com/rjmurillo/ai-agents/assets/TODO-record-gif-before-v0.2`.
- doc-drift · README.md:320 · Describes `/review` as a "5-axis review (architecture, security, quality, tests, standards)" contradicting `.claude/skills/review/SKILL.md:29`, which defines a Stage-1 spec-compliance gate plus 11 Stage-2 canonical axes (12 total canonical axes) and 3 local skill axes (15 total in deep review).
- doc-drift · README.md:468 · States that development requires Python 3.14.x pinned in `.python-version` as 3.14.4, but tests run on Python 3.14.7 in local virtual environment.

## Observations
Provides an exceptionally clean overview of the dual-marketplace model (`.claude-plugin/marketplace.json` for Claude Code and `.github/plugin/marketplace.json` for GitHub Copilot CLI), allowing single-command installation across both major AI developer tooling ecosystems. Summarizes both the full project-toolkit plugin and the lighter-weight claude-agents bundle.

## Context cost
29,662 bytes (~7,400 tokens) standalone. Loads no runtime files automatically upon view.
