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
verified: 2026-09-04 quote-check+coverage
---

# CONTEXT.md

## Purpose — required, verbatim
> "A collection of agent skills (slash commands and behaviors) loaded by Claude Code. Skills are organized into buckets and consumed by per-repo configuration emitted by `/setup-matt-pocock-skills`." — CONTEXT.md:3

## Design intent — required
Establishes the canonical ubiquitous domain language, core entity relationships, and resolved lexical ambiguities across `mattpocock-skills`. Defines the precise boundaries for `Issue tracker`, `Issue`, `Decision ticket`, and `Triage role`, while explicitly forbidding confusing synonyms (`backlog`, `ticket` outside decision tickets, `backlog manager`) to ensure alignment across human prompts, agent workflows, and repository tracking backends.

## Phase — required
cross-phase

## Inputs — required
- Domain terminology ambiguities discovered in engineering and productivity workflows
- Target repository issue tracking systems (GitHub Issues, Linear, local `.scratch/` markdown)
- Decision and triage state machines defined in `wayfinder` and `triage`

## Outputs — required
- Canonical glossary definitions and explicit synonym avoidance rules (`_Avoid_`)
- Entity relationship model linking trackers, issues, triage roles, and decision tickets
- Disambiguation records resolving overloaded legacy terms (`backlog`, `backlog backend`)

## Invokes — required
- skill /setup-matt-pocock-skills — CONTEXT.md:3
- skill to-tickets — CONTEXT.md:8
- skill to-spec — CONTEXT.md:8
- skill triage — CONTEXT.md:8
- skill wayfinder — CONTEXT.md:16
- doc docs/agents/triage-labels.md — CONTEXT.md:19

## Invoked by — required
- skill skills/engineering/ask-matt/SKILL.md — skills/engineering/ask-matt/SKILL.md:17
- skill skills/engineering/setup-matt-pocock-skills/SKILL.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:25
- skill skills/engineering/domain-modeling/SKILL.md — skills/engineering/domain-modeling/SKILL.md:62
- skill skills/productivity/wait-what/SKILL.md — skills/productivity/wait-what/SKILL.md:7

## Concepts named — required, verbatim
- `Matt Pocock Skills` — CONTEXT.md:1 — defined here
- `/setup-matt-pocock-skills` — CONTEXT.md:3 — used here
- `Language` — CONTEXT.md:5 — defined here
- `Issue tracker` — CONTEXT.md:7 — defined here
- `to-tickets` — CONTEXT.md:8 — used here
- `to-spec` — CONTEXT.md:8 — used here
- `triage` — CONTEXT.md:8 — used here
- `.scratch/` — CONTEXT.md:8 — used here
- `backlog manager` — CONTEXT.md:9 — defined here
- `backlog backend` — CONTEXT.md:9 — defined here
- `issue host` — CONTEXT.md:9 — defined here
- `Issue` — CONTEXT.md:11 — defined here
- `ticket` — CONTEXT.md:13 — defined here
- `Decision ticket` — CONTEXT.md:15 — defined here
- `wayfinder` — CONTEXT.md:16 — used here
- `wayfinder:map` — CONTEXT.md:16 — used here
- `Triage role` — CONTEXT.md:18 — defined here
- `needs-triage` — CONTEXT.md:19 — defined here
- `ready-for-afk` — CONTEXT.md:19 — defined here
- `docs/agents/triage-labels.md` — CONTEXT.md:19 — used here
- `Relationships` — CONTEXT.md:21 — defined here
- `Flagged ambiguities` — CONTEXT.md:27 — defined here
- `backlog` — CONTEXT.md:29 — defined here

## Structure
Section headings and glossary definitions in order:
- `# Matt Pocock Skills`
- `## Language`
  - `Issue tracker`
  - `Issue`
  - `Decision ticket`
  - `Triage role`
- `## Relationships`
- `## Flagged ambiguities`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — CONTEXT.md:19: references docs/agents/triage-labels.md which does not exist in repo (actual template is at skills/engineering/setup-matt-pocock-skills/triage-labels.md).

## Observations
- Provides foundational domain model for the entire repository.
- Resolves the tension between generic "tickets" and `wayfinder`'s "decision tickets", clarifying that a decision ticket holds a question to decide rather than a build slice.
- Forbids "backlog" as a domain noun, standardizing on "Issue tracker" for the tool and "Issues" for units of work.

## Context cost
1768 bytes (~442 tokens). Read as the core domain glossary by multiple skills (`domain-modeling`, `setup-matt-pocock-skills`, `wait-what`).
