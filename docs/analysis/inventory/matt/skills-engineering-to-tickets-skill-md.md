---
package: matt
path: skills/engineering/to-tickets/SKILL.md
type: skill
bytes: 5671
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/to-tickets/SKILL.md

## Purpose — required, verbatim
> "Break a plan, spec, or conversation into a set of **tickets**: tracer-bullet vertical slices, each declaring the tickets that **block** it." — skills/engineering/to-tickets/SKILL.md:9

## Design intent — required
Deconstructs a plan, specification, or conversation into independent, agent-sized work units ("tracer bullet" vertical slice tickets) published to an issue tracker. Each ticket cuts vertically through all layers (schema, API, UI, tests), is sized to fit within a single fresh context window, and explicitly declares its blocking dependencies. Handles wide refactors with large blast radii via an expand-contract sequencing pattern instead of vertical slicing. Quizzes the user to confirm ticket granularity and dependency edges before publishing to local markdown files or native tracker issues tagged `ready-for-agent`.

## Phase — required
matt:engineering

## Inputs — required
Plan, spec, or conversation context; optional user reference arguments (spec path, issue number, URL); tracker configuration from `setup-matt-pocock-skills`; user answers to the breakdown quiz.

## Outputs — required
Published tickets with explicit blocking edges: either local files under `.scratch/<feature-slug>/issues/<NN>-<slug>.md` or issues on a remote tracker (GitHub, Linear) marked `ready-for-agent`.

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/to-tickets/SKILL.md:11

## Invoked by — required
- doc README.md — README.md:200
- doc skills/engineering/README.md — skills/engineering/README.md:15
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:30

## Concepts named — required, verbatim
- `to-tickets` — skills/engineering/to-tickets/SKILL.md:2 — defined here
- `tickets` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `tracer-bullet` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `vertical slices` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `issue tracker` — skills/engineering/to-tickets/SKILL.md:11 — used here
- `triage label` — skills/engineering/to-tickets/SKILL.md:11 — used here
- `prefactor` — skills/engineering/to-tickets/SKILL.md:23 — defined here
- `vertical-slice-rules` — skills/engineering/to-tickets/SKILL.md:29 — defined here
- `blocking edges` — skills/engineering/to-tickets/SKILL.md:38 — defined here
- `Wide refactors` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `wide refactor` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `blast radius` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `expand–contract` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `frontier` — skills/engineering/to-tickets/SKILL.md:65 — defined here
- `local-ticket-template` — skills/engineering/to-tickets/SKILL.md:69 — defined here
- `issue-template` — skills/engineering/to-tickets/SKILL.md:84 — defined here

## Structure
- `# To Tickets` — skills/engineering/to-tickets/SKILL.md:7
- `## Process` — skills/engineering/to-tickets/SKILL.md:13
- `### 1. Gather context` — skills/engineering/to-tickets/SKILL.md:15
- `### 2. Explore the codebase (optional)` — skills/engineering/to-tickets/SKILL.md:19
- `### 3. Draft vertical slices` — skills/engineering/to-tickets/SKILL.md:25
- `### 4. Quiz the user` — skills/engineering/to-tickets/SKILL.md:42
- `### 5. Publish the tickets to the configured tracker` — skills/engineering/to-tickets/SKILL.md:58
- `## Parent` — skills/engineering/to-tickets/SKILL.md:86
- `## What to build` — skills/engineering/to-tickets/SKILL.md:90
- `## Acceptance criteria` — skills/engineering/to-tickets/SKILL.md:94
- `## Blocked by` — skills/engineering/to-tickets/SKILL.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Formulates the "expand-contract" pattern specifically for wide refactors where vertical slices cannot maintain green builds (line 40).
- Defines the concept of "frontier" (line 65) enabling multi-agent or parallel execution on unblocked tickets.
- Instructs explicitly: "Do NOT close or modify any parent issue" (line 67).

## Context cost
5671 bytes (~1418 tokens). Direct specification file.
