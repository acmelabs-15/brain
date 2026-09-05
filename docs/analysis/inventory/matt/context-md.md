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
verified: 2026-09-05 quote-check+coverage
---

# CONTEXT.md

## Purpose — required, verbatim
> "A collection of agent skills (slash commands and behaviors) loaded by Claude Code. Skills are organized into buckets and consumed by per-repo configuration emitted by `/setup-matt-pocock-skills`." — CONTEXT.md:3
(first substantive paragraph; no explicit purpose statement)

## Design intent — required
Establishes the authoritative ubiquitous domain language and vocabulary constraints for the `mattpocock-skills` repository and its agent interactions. Standardizes terms governing issue tracking (`Issue tracker`, `Issue`, `Decision ticket`, `Triage role`), codifies entity relationships, and explicitly flags and deprecates ambiguous synonyms (`backlog`, `backlog backend`, `backlog manager`). Without this document, agents and skills would conflate domain terminology (e.g., confusing the issue tracking platform with the body of work, or treating a question ticket as an implementation slice).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill setup-matt-pocock-skills — CONTEXT.md:3
- skill to-tickets — CONTEXT.md:8
- skill to-spec — CONTEXT.md:8
- skill triage — CONTEXT.md:8
- skill wayfinder — CONTEXT.md:16
- doc docs/agents/triage-labels.md — CONTEXT.md:19

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:76
- doc CHANGELOG.md — CHANGELOG.md:84
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:17
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:62
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:13
- skill wait-what — skills/productivity/wait-what/SKILL.md:7
- skill diagnosing-bugs — skills/engineering/diagnosing-bugs/SKILL.md:10
- skill tdd — skills/engineering/tdd/SKILL.md:10
- skill triage — skills/engineering/triage/SKILL.md:76
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:25

## Concepts named — required, verbatim
- `Issue tracker` — CONTEXT.md:7 — defined here
- `Issue` — CONTEXT.md:11 — defined here
- `Decision ticket` — CONTEXT.md:15 — defined here
- `wayfinder` — CONTEXT.md:16 — used here
- `wayfinder:map` — CONTEXT.md:16 — used here
- `Triage role` — CONTEXT.md:18 — defined here
- `needs-triage` — CONTEXT.md:19 — used here
- `ready-for-afk` — CONTEXT.md:19 — used here
- `backlog` — CONTEXT.md:29 — used here
- `backlog backend` — CONTEXT.md:30 — used here
- `backlog manager` — CONTEXT.md:30 — used here

## Structure
- Language — CONTEXT.md:5
- Relationships — CONTEXT.md:21
- Flagged ambiguities — CONTEXT.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — CONTEXT.md:19: references `docs/agents/triage-labels.md` which does not exist in this repository (it is a template path emitted into consumer repositories by `setup-matt-pocock-skills`).

## Observations
Authoritative repository domain glossary implementing Domain-Driven Design ubiquitous language. Maintained actively by `/domain-modeling` and scaffolded into consumer repositories by `/setup-matt-pocock-skills`. Serves as the primary vocabulary contract referenced by prompt engineering corrections like `/wait-what`.

## Context cost
1768 bytes, 31 lines, approximately 380 tokens.
