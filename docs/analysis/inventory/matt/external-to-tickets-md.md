---
package: matt
path: external/to-tickets.md
type: doc
bytes: 368020
unit: inv-matt-29
deprecated: false
aliases: []
memo_inputs:
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/to-tickets.md

## Purpose — required, verbatim
> "Split a spec into small tickets an agent can build." — external/to-tickets.md:24

## Design intent — required
Decomposes a specification, architectural plan, or settled conversation into discrete, dependency-linked implementation tickets sized for a single fresh context window. Strictly enforces vertical slicing (tracer bullets) spanning database schema through UI so every ticket delivers a demonstrable behavior, forbidding horizontal layer-by-layer partitioning. Handles wide, high-blast-radius refactors via an expand-migrate-contract sequence to preserve continuous test suite passability. Emphasizes explicit blocking edges so independent tickets can be dispatched in parallel while dependent work is properly sequenced.

## Phase — required
matt:The Main Flow

## Inputs — required
A specification issue (`/to-tickets #<spec_issue>`), a cleared wayfinder map, active conversation context, and tracker integration settings from `setup-matt-pocock-skills`.

## Outputs — required
Published implementation tickets on an issue tracker (GitHub, Linear) with native dependency links and parent issue associations, or discrete per-ticket markdown files under `.scratch/<feature-slug>/issues/<NN>-<slug>.md` ordered blockers-first.

## Invokes — required
- skill implement — external/to-tickets.md:29
- skill grill-with-docs — external/to-tickets.md:29
- skill to-spec — external/to-tickets.md:29
- skill wayfinder — external/to-tickets.md:29
- skill triage — external/to-tickets.md:30
- skill setup-matt-pocock-skills — external/to-tickets.md:32
- skill tdd — external/to-tickets.md:79
- skill code-review — external/to-tickets.md:78
- skill ask-matt — external/to-tickets.md:79

## Invoked by — required
none

## Concepts named — required, verbatim
- `to-tickets` — external/to-tickets.md:25 — defined here
- `spec` — external/to-tickets.md:25 — used here
- `tickets` — external/to-tickets.md:25 — defined here
- `blocking edges` — external/to-tickets.md:25 — defined here
- `tracer bullet` — external/to-tickets.md:26 — defined here
- `session` — external/to-tickets.md:26 — used here
- `agent` — external/to-tickets.md:28 — used here
- `horizontal` — external/to-tickets.md:34 — defined here
- `vertical` — external/to-tickets.md:34 — defined here
- `wide refactor` — external/to-tickets.md:42 — defined here
- `expand–contract` — external/to-tickets.md:43 — defined here
- `Expand` — external/to-tickets.md:45 — defined here
- `Migrate` — external/to-tickets.md:46 — defined here
- `Contract` — external/to-tickets.md:47 — defined here
- `integration branch` — external/to-tickets.md:49 — defined here
- `acceptance criteria` — external/to-tickets.md:63 — used here
- `prefactoring` — external/to-tickets.md:74 — defined here

## Structure
- # The /to-tickets Skill — external/to-tickets.md:24
- ## What it does — external/to-tickets.md:24
- ## When to reach for it — external/to-tickets.md:27
- ## Prerequisites — external/to-tickets.md:31
- ## Tracer bullets, not layers — external/to-tickets.md:33
- ## Blocking edges — external/to-tickets.md:37
- ## The wide-refactor exception — external/to-tickets.md:41
- ## Common questions — external/to-tickets.md:50
- ## It's working if — external/to-tickets.md:67
- ## Where it fits — external/to-tickets.md:76
- ## Install the skills — external/to-tickets.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · external/to-tickets.md:52: Over-decomposition is a common failure mode where small 3-line changes are split into twelve micro-tickets.
- `other` · external/to-tickets.md:54: Models frequently violate the vertical-slice mandate and generate tickets layered horizontally by architectural tier (schema, routes, UI).
- `doc-drift` · external/to-tickets.md:56: Open issue #383 where GitHub issues are not created as native sub-issues of the parent spec tracking issue.
- `doc-drift` · external/to-tickets.md:58: Open issue #513 where "Blocked by" relationships are written as plain prose in the issue body rather than using the tracker's native dependency fields.
- `doc-drift` · external/to-tickets.md:60: Local ticket output previously targeted a single monolithic file causing parallel agent write races; now fixed to discrete per-ticket files under `.scratch/<feature-slug>/issues/`.
- `other` · external/to-tickets.md:64: Ticket template prompts for acceptance criteria without instructing the model to ensure they can fail, producing unfalsifiable or self-satisfying criteria.
- `other` · external/to-tickets.md:66: Skill stops at artifact production and has no automated dispatch mechanism to feed tickets into downstream agent runs.

## Observations
Represents the web documentation snapshot of `/to-tickets` from `aihero.dev/skills-to-tickets`. Emphasizes that "tracer bullets, not layers" is the core invariant of manageable agent execution. Notes the expand-migrate-contract exception for wide refactors and warns that acceptance criteria must be falsifiable to prevent self-fulfilling agent validations.

## Context cost
368020 bytes, ~74000 tokens (HTML snapshot including full inline hydration payload).
