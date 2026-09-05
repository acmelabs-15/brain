---
package: addy
path: CLAUDE.md
type: doc
bytes: 4094
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# CLAUDE.md

## Purpose — required, verbatim
> "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents." — CLAUDE.md:3

## Design intent — required
Project-level configuration file providing Claude Code with structural guidelines, skill taxonomy across six lifecycle phases, conventions for authoring skills and references, validation commands, PR workflow rules, and hard development boundaries.

## Phase — required
cross-phase

## Inputs — required
Claude Code developer prompts and repository source files.

## Outputs — required
Enforced project conventions, lifecycle phase assignments, and skill contributions complying with repository standards.

## Invokes — required
- doc CONTRIBUTING.md — CLAUDE.md:39
- doc docs/skill-anatomy.md — CLAUDE.md:39
- script scripts/run-evals.js — CLAUDE.md:45

## Invoked by — required
- command commands/constraints.toml — commands/constraints.toml:24

## Concepts named — required, verbatim
- `agent-skills` — CLAUDE.md:1 — defined here
- `Project Structure` — CLAUDE.md:7 — defined here
- `Skills by Phase` — CLAUDE.md:19 — defined here
- `Define` — CLAUDE.md:21 — defined here
- `Plan` — CLAUDE.md:22 — defined here
- `Build` — CLAUDE.md:23 — defined here
- `Verify` — CLAUDE.md:24 — defined here
- `Review` — CLAUDE.md:25 — defined here
- `Ship` — CLAUDE.md:26 — defined here
- `SKILL.md` — CLAUDE.md:30 — used here

## Structure
- Project Title and Introduction — CLAUDE.md:1-3
- Scope note — CLAUDE.md:5
- Project Structure — CLAUDE.md:7-17
- Skills by Phase (Define, Plan, Build, Verify, Review, Ship) — CLAUDE.md:19-27
- Conventions — CLAUDE.md:28-36
- Contributing — CLAUDE.md:37-40
- Commands — CLAUDE.md:41-46
- Pull Requests — CLAUDE.md:47-53
- Boundaries — CLAUDE.md:54-61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · CLAUDE.md:43 states "`npm test` — Not applicable (this is a documentation project)" while package.json configures test scripts and CI workflows run automated unit tests.

## Observations
- Canonical phase partitioning: explicitly partitions all 24 skills across six sequential lifecycle phases: Define, Plan, Build, Verify, Review, Ship.
- Reference threshold rule: "Supporting files only created when content exceeds 100 lines" — CLAUDE.md:35.

## Context cost
4094 bytes, ~950 tokens. References CONTRIBUTING.md, docs/skill-anatomy.md, and scripts/run-evals.js.
