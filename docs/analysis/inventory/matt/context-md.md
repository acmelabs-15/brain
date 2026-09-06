---
package: matt
path: CONTEXT.md
type: doc
bytes: 1768
unit: inv-matt-3
deprecated: false
aliases: []
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CONTEXT.md

## Purpose — required, verbatim
> "A collection of agent skills (slash commands and behaviors) loaded by Claude Code. Skills are organized into buckets and consumed by per-repo configuration emitted by `/setup-matt-pocock-skills`." — CONTEXT.md:3

## Design intent — required
Defines the core ubiquitous language and conceptual schema for the `mattpocock-skills` repository. Provides disambiguation between repository-level entities and external tools, establishing canonical definitions for `Issue tracker`, `Issue`, `Decision ticket`, and `Triage role`. Explicitly identifies deprecated or confusing synonyms to avoid (`backlog manager`, `backlog backend`, `issue host`, and generic `ticket` when referring to implementation slices), while carving out an exception for `wayfinder`'s `Decision ticket` construct. Serves as standing context for agents to ensure consistent terminology across planning, triage, and specification skills.

## Phase — required
cross-phase

## Inputs — required
Domain concepts, workflow entities, and synonym ambiguities across skills and issue tracking workflows.

## Outputs — required
Ubiquitous language dictionary, entity relationships, and ambiguity resolution rules.

## Invokes — required
- skill setup-matt-pocock-skills — CONTEXT.md:3
- skill to-tickets — CONTEXT.md:8
- skill to-spec — CONTEXT.md:8
- skill triage — CONTEXT.md:8
- skill wayfinder — CONTEXT.md:16
- doc docs/agents/triage-labels.md — CONTEXT.md:19

## Invoked by — required
- doc README.md — README.md:122
- doc CHANGELOG.md — CHANGELOG.md:76
- skill wait-what — skills/productivity/wait-what/SKILL.md:7
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:13
- skill tdd — skills/engineering/tdd/SKILL.md:10
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:17
- doc docs/engineering/domain-modeling.md — docs/engineering/domain-modeling.md:5
- doc docs/productivity/wait-what.md — docs/productivity/wait-what.md:3
- doc docs/engineering/improve-codebase-architecture.md — docs/engineering/improve-codebase-architecture.md:30
- doc docs/engineering/to-spec.md — docs/engineering/to-spec.md:5
- doc docs/productivity/grilling.md — docs/productivity/grilling.md:16
- doc docs/productivity/grill-me.md — docs/productivity/grill-me.md:16
- doc docs/productivity/writing-for-agents.md — docs/productivity/writing-for-agents.md:70

## Concepts named — required, verbatim
- `Matt Pocock Skills` — CONTEXT.md:1 — defined here
- `agent skills` — CONTEXT.md:3 — defined here
- `slash commands` — CONTEXT.md:3 — defined here
- `buckets` — CONTEXT.md:3 — used here
- `/setup-matt-pocock-skills` — CONTEXT.md:3 — used here
- `Language` — CONTEXT.md:5 — defined here
- `Issue tracker` — CONTEXT.md:7 — defined here
- `GitHub Issues` — CONTEXT.md:8 — used here
- `Linear` — CONTEXT.md:8 — used here
- `.scratch/` — CONTEXT.md:8 — used here
- `to-tickets` — CONTEXT.md:8 — used here
- `to-spec` — CONTEXT.md:8 — used here
- `triage` — CONTEXT.md:8 — used here
- `backlog manager` — CONTEXT.md:9 — defined here
- `backlog backend` — CONTEXT.md:9 — defined here
- `issue host` — CONTEXT.md:9 — defined here
- `Issue` — CONTEXT.md:11 — defined here
- `bug` — CONTEXT.md:12 — used here
- `task` — CONTEXT.md:12 — used here
- `spec` — CONTEXT.md:12 — used here
- `slice` — CONTEXT.md:12 — used here
- `ticket` — CONTEXT.md:13 — defined here
- `Decision ticket` — CONTEXT.md:15 — defined here
- `wayfinder` — CONTEXT.md:16 — used here
- `wayfinder:map` — CONTEXT.md:16 — defined here
- `decision` — CONTEXT.md:16 — defined here
- `implementation ticket` — CONTEXT.md:16 — used here
- `Triage role` — CONTEXT.md:18 — defined here
- `needs-triage` — CONTEXT.md:19 — used here
- `ready-for-afk` — CONTEXT.md:19 — used here
- `triage-labels.md` — CONTEXT.md:19 — used here
- `Relationships` — CONTEXT.md:21 — defined here
- `Flagged ambiguities` — CONTEXT.md:27 — defined here
- `backlog` — CONTEXT.md:29 — defined here

## Structure
- `# Matt Pocock Skills` — CONTEXT.md:1
- `## Language` — CONTEXT.md:5
- `## Relationships` — CONTEXT.md:21
- `## Flagged ambiguities` — CONTEXT.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — CONTEXT.md:19 — cites docs/agents/triage-labels.md which does not exist in this repository (it is a template emitted by setup-matt-pocock-skills into target consumer repositories).
- other — CONTEXT.md:1 — Runaway artifact bloat where models treat CONTEXT.md write permission as a license to write running specs and absorb implementation detail instead of maintaining a lean ubiquitous language glossary (documented in docs/engineering/domain-modeling.md:44-45, 55).

## Observations
Implements ubiquitous language guidance modeled after Domain-Driven Design (Evans) and serves as the exemplar domain model for the repository itself. Remediates Phase 1V omissions by identifying all terms (`issue host` at line 9, `ticket` at line 13, `implementation ticket` at line 16, `GitHub Issues` and `Linear` at line 8) and documents the known risk of models inflating `CONTEXT.md` beyond its intended glossary boundaries into running specifications (`docs/engineering/domain-modeling.md:44-45, 55`).

## Context cost
1768 bytes, 31 lines, approximately 350 tokens.
