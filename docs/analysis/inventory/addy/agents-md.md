---
package: addy
path: AGENTS.md
type: doc
bytes: 5386
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# AGENTS.md

## Purpose — required, verbatim
> "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository." — AGENTS.md:3

## Design intent — required
Repository-level agent configuration governing AI coding agents working on the addyosmani/agent-skills repository itself. Defines the OpenCode skill-driven execution model with intent mapping, an implicit 6-stage lifecycle mapping for tools lacking slash commands, anti-rationalization rules, a 3-layer architecture (Skills, Personas, Commands), strict composition rules (flat parallel fan-out only, no persona-to-persona delegation), and guidelines for creating new skills.

## Phase — required
cross-phase

## Inputs — required
User prompts, intent expressions, and agent environment capabilities.

## Outputs — required
Mapped skill invocations, spawned persona subagents, and new skill contributions conforming to repository anatomy.

## Invokes — required
- doc docs/agents.md — AGENTS.md:82
- reference references/orchestration-patterns.md — AGENTS.md:82
- doc CONTRIBUTING.md — AGENTS.md:88
- doc docs/skill-anatomy.md — AGENTS.md:88
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

## Invoked by — required
- command commands/code-simplify.toml — commands/code-simplify.toml:8
- command commands/constraints.toml — commands/constraints.toml:24

## Concepts named — required, verbatim
- `skill-driven execution model` — AGENTS.md:13 — defined here
- `Intent → Skill Mapping` — AGENTS.md:22 — defined here
- `Lifecycle Mapping` — AGENTS.md:34 — defined here
- `Anti-Rationalization` — AGENTS.md:56 — defined here
- `parallel fan-out with a merge step` — AGENTS.md:80 — defined here
- `Skills` — AGENTS.md:74 — defined here
- `Personas` — AGENTS.md:75 — defined here
- `Slash commands` — AGENTS.md:76 — defined here
- `DEFINE` — AGENTS.md:40 — used here
- `PLAN` — AGENTS.md:41 — used here
- `BUILD` — AGENTS.md:42 — used here
- `VERIFY` — AGENTS.md:43 — used here
- `REVIEW` — AGENTS.md:44 — used here
- `SHIP` — AGENTS.md:45 — used here

## Structure
- Scope note — AGENTS.md:5
- Repository Overview — AGENTS.md:7
- OpenCode Integration — AGENTS.md:11
  - Core Rules — AGENTS.md:15
  - Intent → Skill Mapping — AGENTS.md:22
  - Lifecycle Mapping (Implicit Commands) — AGENTS.md:34
  - Execution Model — AGENTS.md:47
  - Anti-Rationalization — AGENTS.md:56
- Orchestration: Personas, Skills, and Commands — AGENTS.md:70
- Creating a New Skill — AGENTS.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- OpenCode symlink reference (§1.1): The repository provides `.opencode/skills` as a symlink pointing to `../skills/`, directly powering the "skill-driven execution model" — AGENTS.md:13 described in this file.
- Composition rule: "the user (or a slash command) is the orchestrator. Personas do not invoke other personas." — AGENTS.md:78.
- Orchestration pattern: endorses "parallel fan-out with a merge step" — AGENTS.md:80 used by `/ship`.

## Context cost
5386 bytes, ~1250 tokens. Loads docs/agents.md, references/orchestration-patterns.md, and CONTRIBUTING.md when following linked references.
