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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/to-tickets/SKILL.md

## Purpose — required, verbatim
> "Break a plan, spec, or conversation into a set of **tickets**: tracer-bullet vertical slices, each declaring the tickets that **block** it." — skills/engineering/to-tickets/SKILL.md:9

## Design intent — required
Deconstructs a plan, specification, or conversational consensus into an executable dependency graph of tracer-bullet tickets. Each ticket represents an end-to-end vertical slice (spanning schema, API, UI, and tests) sized to fit within a single fresh context window, explicitly declaring its blocking edges. Quizzes the user on ticket granularity and dependencies before publishing either as individual markdown files under `.scratch/<feature-slug>/issues/` or as native tracker issues (GitHub, Linear) labeled `ready-for-agent`. Formulates wide refactors as an expand-contract sequence rather than forcing them into artificial tracer bullets.

## Phase — required
cross-phase

## Inputs — required
Conversation context, spec document or issue reference, project domain glossary vocabulary (`CONTEXT.md`), ADRs, and issue tracker configuration from `/setup-matt-pocock-skills`.

## Outputs — required
Set of published tracer-bullet tickets with explicit blocking edges, published to local `.scratch/<feature-slug>/issues/<NN>-<slug>.md` or remote issue tracker with `ready-for-agent` label.

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/to-tickets/SKILL.md:11

## Invoked by — required
- doc README.md — README.md:200
- doc skills/engineering/README.md — skills/engineering/README.md:15
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23
- doc docs/engineering/to-tickets.md — docs/engineering/to-tickets.md:3
- doc docs/engineering/to-spec.md — docs/engineering/to-spec.md:17
- doc docs/engineering/implement.md — docs/engineering/implement.md:93
- doc docs/engineering/code-review.md — docs/engineering/code-review.md:91

## Concepts named — required, verbatim
- `tickets` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `block` — skills/engineering/to-tickets/SKILL.md:9 — defined here
- `issue tracker` — skills/engineering/to-tickets/SKILL.md:11 — used here
- `triage label` — skills/engineering/to-tickets/SKILL.md:11 — used here
- `domain glossary` — skills/engineering/to-tickets/SKILL.md:21 — used here
- `ADRs` — skills/engineering/to-tickets/SKILL.md:21 — used here
- `prefactor` — skills/engineering/to-tickets/SKILL.md:23 — defined here
- `tracer bullet` — skills/engineering/to-tickets/SKILL.md:27 — defined here
- `vertical-slice-rules` — skills/engineering/to-tickets/SKILL.md:29 — defined here
- `blocking edges` — skills/engineering/to-tickets/SKILL.md:38 — defined here
- `wide refactors` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `blast radius` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `expand–contract` — skills/engineering/to-tickets/SKILL.md:40 — defined here
- `ready-for-agent` — skills/engineering/to-tickets/SKILL.md:63 — used here
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

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — skills/engineering/to-tickets/SKILL.md:11: Instructs user to run `/setup-matt-pocock-skills` if tracker configuration is missing, but no command exists at `commands/setup-matt-pocock-skills.md` (it is a skill at `skills/engineering/setup-matt-pocock-skills/`).

## Observations
Defines "frontier" execution (working tickets whose blockers are all cleared) and the expand-contract pattern for high blast-radius changes across codebases. Explicitly forbids combining multiple tickets into a single file locally.

## Context cost
5671 bytes, 106 lines, approximately 1350 tokens.
