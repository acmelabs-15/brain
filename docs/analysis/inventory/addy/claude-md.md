---
package: addy
path: CLAUDE.md
type: doc
bytes: 4094
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# CLAUDE.md

## Purpose — required, verbatim
> "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents." — CLAUDE.md:3

## Design intent — required
Developer and agent guidance for Claude Code working in the `addyosmani/agent-skills` repository. Maps out the 6-phase lifecycle taxonomy (Define, Plan, Build, Verify, Review, Ship), standardizes skill format and frontmatter conventions, references contributing workflows, specifies eval commands, and establishes guardrails against vague or duplicate skills.

## Phase — required
cross-phase

## Inputs — required
Developer instructions, pull requests, or tasks executed by Claude Code in this repository.

## Outputs — required
none

## Invokes — required
- doc CONTRIBUTING.md — CLAUDE.md:39
- doc docs/skill-anatomy.md — CLAUDE.md:39
- script scripts/run-evals.js — CLAUDE.md:45

## Invoked by — required
- command constraints — commands/constraints.toml:24

## Concepts named — required, verbatim
- `agent-skills` — CLAUDE.md:1 — defined here
- `Define` — CLAUDE.md:21 — defined here
- `Plan` — CLAUDE.md:22 — defined here
- `Build` — CLAUDE.md:23 — defined here
- `Verify` — CLAUDE.md:24 — defined here
- `Review` — CLAUDE.md:25 — defined here
- `Ship` — CLAUDE.md:26 — defined here

## Structure
- # agent-skills — CLAUDE.md:1
- ## Project Structure — CLAUDE.md:7
- ## Skills by Phase — CLAUDE.md:19
- ## Conventions — CLAUDE.md:28
- ## Contributing — CLAUDE.md:37
- ## Commands — CLAUDE.md:41
- ## Pull Requests — CLAUDE.md:47
- ## Boundaries — CLAUDE.md:54

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lists the 6 lifecycle phases and groups all 24 skills cleanly under their primary lifecycle phase (CLAUDE.md:21-26). Dictates that supporting files should only be created when skill content exceeds 100 lines (CLAUDE.md:35).

## Context cost
4094 bytes, ~1000 tokens.
