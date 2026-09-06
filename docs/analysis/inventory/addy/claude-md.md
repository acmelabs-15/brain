---
package: addy
path: CLAUDE.md
type: doc
bytes: 4094
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CLAUDE.md

## Purpose — required, verbatim
> "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents." — CLAUDE.md:3

## Design intent — required
Claude Code workspace configuration document establishing project layout, skill classification across lifecycle phases, authoring conventions, contribution workflows, evaluation commands, PR submission guidelines, and core behavioral boundaries.

## Phase — required
cross-phase

## Inputs — required
Repository structure, authoring guidelines, eval runner commands, PR conventions.

## Outputs — required
Agent execution boundaries, skill categorization mappings, PR contribution workflows.

## Invokes — required
- doc evals/README.md — CLAUDE.md:15
- doc CONTRIBUTING.md — CLAUDE.md:39
- doc docs/skill-anatomy.md — CLAUDE.md:39
- script scripts/run-evals.js — CLAUDE.md:45

## Invoked by — required
- command commands/constraints.toml — commands/constraints.toml:24

## Concepts named — required, verbatim
- `Define` — CLAUDE.md:21 — defined here
- `Plan` — CLAUDE.md:22 — defined here
- `Build` — CLAUDE.md:23 — defined here
- `Verify` — CLAUDE.md:24 — defined here
- `Review` — CLAUDE.md:25 — defined here
- `Ship` — CLAUDE.md:26 — defined here

## Structure
- # agent-skills
- ## Project Structure
- ## Skills by Phase
- ## Conventions
- ## Contributing
- ## Commands
- ## Pull Requests
- ## Boundaries

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · CLAUDE.md:23 · Line 23 classifies `test-driven-development` under `Build` (matching `README.md:363`), directly contradicting `skills/using-agent-skills/SKILL.md:180` which places TDD under `Verify`.

## Observations
Line 43 states "`npm test` — Not applicable (this is a documentation project)", whereas the repository maintains an automated test suite executed in CI via Node `--test` validators.

## Context cost
4094 bytes (~1023 tokens).
