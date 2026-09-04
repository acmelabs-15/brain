---
package: addy
path: AGENTS.md
type: doc
bytes: 5386
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# AGENTS.md

## Purpose — required, verbatim
> "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository." — AGENTS.md:3

## Design intent — required
Repository-level developer guide establishing operational rules for AI coding agents working on the `agent-skills` repository. It mandates a skill-driven execution model (especially for OpenCode), maps user intents and lifecycle phases (DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP) to specific skills, counters agent anti-rationalizations that bypass workflows, articulates the 3-layer architecture (Skills, Personas, Slash Commands), defines composition rules (parallel fan-out with merge step in `/ship`, no router personas), and establishes contribution guidelines for creating new skills.

## Phase — required
cross-phase

## Inputs — required
- User requests and prompts across AI agent platforms (Claude Code, Cursor, Copilot, Antigravity, OpenCode)

## Outputs — required
- Skill invocations, multi-persona reviews, and structured software development workflow execution

## Invokes — required
- directory skills/ — AGENTS.md:5,13,18,74,90
- directory agents/ — AGENTS.md:75,84
- directory .claude/commands/ — AGENTS.md:76
- doc docs/agents.md — AGENTS.md:82
- reference references/orchestration-patterns.md — AGENTS.md:82
- doc CONTRIBUTING.md — AGENTS.md:88
- doc docs/skill-anatomy.md — AGENTS.md:88,92

## Invoked by — required
- README.md:156
- commands/code-simplify.toml:8
- commands/constraints.toml:24
- CONTRIBUTING.md:71
- docs/agents.md:97
- skills/context-engineering/SKILL.md:78
- skills/planning-and-task-breakdown/SKILL.md:162
- references/orchestration-patterns.md:296

## Concepts named — required, verbatim
- `AGENTS.md` — AGENTS.md:1 — defined here
- `Claude Code` — AGENTS.md:3,9,68,84 — used here
- `Cursor` — AGENTS.md:3 — used here
- `Copilot` — AGENTS.md:3 — used here
- `Antigravity` — AGENTS.md:3 — used here
- `OpenCode Integration` — AGENTS.md:11 — defined here
- `skill-driven execution model` — AGENTS.md:13 — defined here
- `Core Rules` — AGENTS.md:15 — defined here
- `Intent → Skill Mapping` — AGENTS.md:22 — defined here
- `spec-driven-development` — AGENTS.md:26,40 — used here
- `incremental-implementation` — AGENTS.md:26,42 — used here
- `test-driven-development` — AGENTS.md:26,42 — used here
- `planning-and-task-breakdown` — AGENTS.md:27,41 — used here
- `debugging-and-error-recovery` — AGENTS.md:28,43 — used here
- `code-review-and-quality` — AGENTS.md:29,44 — used here
- `code-simplification` — AGENTS.md:30 — used here
- `api-and-interface-design` — AGENTS.md:31 — used here
- `frontend-ui-engineering` — AGENTS.md:32 — used here
- `Lifecycle Mapping (Implicit Commands)` — AGENTS.md:34 — defined here
- `DEFINE` — AGENTS.md:40 — defined here
- `PLAN` — AGENTS.md:41 — defined here
- `BUILD` — AGENTS.md:42 — defined here
- `VERIFY` — AGENTS.md:43 — defined here
- `REVIEW` — AGENTS.md:44 — defined here
- `SHIP` — AGENTS.md:45 — defined here
- `shipping-and-launch` — AGENTS.md:45 — used here
- `Execution Model` — AGENTS.md:47 — defined here
- `Anti-Rationalization` — AGENTS.md:56 — defined here
- `Three composable layers` — AGENTS.md:72 — defined here
- `Skills` — AGENTS.md:74 — defined here
- `Personas` — AGENTS.md:75 — defined here
- `Slash commands` — AGENTS.md:76 — defined here
- `Composition rule` — AGENTS.md:78 — defined here
- `parallel fan-out with a merge step` — AGENTS.md:80 — defined here
- `code-reviewer` — AGENTS.md:80 — used here
- `security-auditor` — AGENTS.md:80 — used here
- `test-engineer` — AGENTS.md:80 — used here
- `Claude Code interop` — AGENTS.md:84 — defined here
- `Agent Teams` — AGENTS.md:84 — used here
- `Creating a New Skill` — AGENTS.md:86 — defined here
- `markdown-first` — AGENTS.md:90 — defined here
- `section anatomy` — AGENTS.md:90 — defined here
- `single source of truth` — AGENTS.md:88,92 — used here

## Structure
- # AGENTS.md
- ## Repository Overview
- ## OpenCode Integration
- ## Orchestration: Personas, Skills, and Commands
- ## Creating a New Skill

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clear scope warning: explicitly warns that AGENTS.md configures agents working on the repository itself and should not be copied into other projects (AGENTS.md:5).
- Reusable assets are in `skills/`, not `AGENTS.md`.

## Context cost
5386 bytes, ~1350 tokens.
