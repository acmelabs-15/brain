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
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# AGENTS.md

## Purpose — required, verbatim
> "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository." — AGENTS.md:3

## Design intent — required
Configures AI coding agents operating on the `addyosmani/agent-skills` repository. Establishes a skill-driven execution model, maps developer intents and OpenCode lifecycles to specific skills, provides anti-rationalization rules against bypassing skills, sets multi-persona composition boundaries (prohibiting persona-to-persona invocation and restricting multi-agent orchestration to parallel fan-out with merge), and specifies procedures for adding new skills.

## Phase — required
cross-phase

## Inputs — required
User development requests, tasks, and bug reports within the `addyosmani/agent-skills` repository.

## Outputs — required
none

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
- doc references/orchestration-patterns.md — AGENTS.md:82
- doc CONTRIBUTING.md — AGENTS.md:88
- doc docs/skill-anatomy.md — AGENTS.md:88

## Invoked by — required
- command commands/code-simplify.toml — commands/code-simplify.toml:8
- command commands/constraints.toml — commands/constraints.toml:24

## Concepts named — required, verbatim
- `skill-driven execution model` — AGENTS.md:13 — defined here
- `DEFINE` — AGENTS.md:40 — defined here
- `PLAN` — AGENTS.md:41 — defined here
- `BUILD` — AGENTS.md:42 — defined here
- `VERIFY` — AGENTS.md:43 — defined here
- `REVIEW` — AGENTS.md:44 — defined here
- `SHIP` — AGENTS.md:45 — defined here
- `Anti-Rationalization` — AGENTS.md:56 — defined here
- `parallel fan-out with a merge step` — AGENTS.md:80 — defined here

## Structure
- # AGENTS.md — AGENTS.md:1
- ## Repository Overview — AGENTS.md:7
- ## OpenCode Integration — AGENTS.md:11
- ### Core Rules — AGENTS.md:15
- ### Intent → Skill Mapping — AGENTS.md:22
- ### Lifecycle Mapping (Implicit Commands) — AGENTS.md:34
- ### Execution Model — AGENTS.md:47
- ### Anti-Rationalization — AGENTS.md:56
- ## Orchestration: Personas, Skills, and Commands — AGENTS.md:70
- ## Creating a New Skill — AGENTS.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines the three composable architecture layers of the package: Skills (how), Personas (who), and Slash commands (when / orchestration). Formulates the six lifecycle phases (DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP) for agents lacking explicit slash commands (AGENTS.md:34-46).

## Context cost
5386 bytes, ~1300 tokens.
