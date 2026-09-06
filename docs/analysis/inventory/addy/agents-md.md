---
package: addy
path: AGENTS.md
type: doc
bytes: 5386
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# AGENTS.md

## Purpose — required, verbatim
> "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository." — AGENTS.md:3

## Design intent — required
Agent configuration instructions defining repository conventions for AI coding agents. Establishes the skill-driven execution model for OpenCode, maps intents and lifecycle phases to core skills, codifies orchestration boundaries between personas, skills, and slash commands, and details rules for creating and contributing new skills.

## Phase — required
cross-phase

## Inputs — required
Agent execution requests, task intents, repository files, user prompts.

## Outputs — required
Agent behavioral constraints, skill tool invocations, lifecycle execution sequence.

## Invokes — required
- skill spec-driven-development — AGENTS.md:26
- skill incremental-implementation — AGENTS.md:26
- skill test-driven-development — AGENTS.md:26
- skill planning-and-task-breakdown — AGENTS.md:27
- skill debugging-and-error-recovery — AGENTS.md:28
- skill code-review-and-quality — AGENTS.md:29
- skill code-simplification — AGENTS.md:30
- skill api-and-interface-design — AGENTS.md:31
- skill frontend-ui-engineering — AGENTS.md:32
- skill shipping-and-launch — AGENTS.md:45
- agent code-reviewer — AGENTS.md:80
- agent security-auditor — AGENTS.md:80
- agent test-engineer — AGENTS.md:80
- doc docs/agents.md — AGENTS.md:82
- reference references/orchestration-patterns.md — AGENTS.md:82
- doc CONTRIBUTING.md — AGENTS.md:88
- doc docs/skill-anatomy.md — AGENTS.md:88

## Invoked by — required
- command commands/code-simplify.toml — commands/code-simplify.toml:8
- command commands/constraints.toml — commands/constraints.toml:24

## Concepts named — required, verbatim
- `skill-driven execution model` — AGENTS.md:13 — defined here
- `Intent → Skill Mapping` — AGENTS.md:22 — defined here
- `Lifecycle Mapping (Implicit Commands)` — AGENTS.md:34 — defined here
- `DEFINE` — AGENTS.md:40 — defined here
- `PLAN` — AGENTS.md:41 — defined here
- `BUILD` — AGENTS.md:42 — defined here
- `VERIFY` — AGENTS.md:43 — defined here
- `REVIEW` — AGENTS.md:44 — defined here
- `SHIP` — AGENTS.md:45 — defined here
- `Execution Model` — AGENTS.md:47 — defined here
- `Anti-Rationalization` — AGENTS.md:56 — defined here
- `Personas` — AGENTS.md:70 — defined here
- `Skills` — AGENTS.md:74 — defined here
- `Slash commands` — AGENTS.md:76 — defined here
- `parallel fan-out with a merge step` — AGENTS.md:80 — defined here
- `Claude Code interop` — AGENTS.md:84 — defined here
- `Creating a New Skill` — AGENTS.md:86 — defined here

## Structure
- # AGENTS.md
- ## Repository Overview
- ## OpenCode Integration
- ### Core Rules
- ### Intent → Skill Mapping
- ### Lifecycle Mapping (Implicit Commands)
- ### Execution Model
- ### Anti-Rationalization
- ## Orchestration: Personas, Skills, and Commands
- ## Creating a New Skill

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly establishes the architectural boundary: "the user (or a slash command) is the orchestrator. Personas do not invoke other personas" (line 78). Parallel fan-out with merge step is the only multi-persona pattern endorsed.

## Context cost
5386 bytes (~1346 tokens).
