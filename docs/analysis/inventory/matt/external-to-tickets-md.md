---
package: matt
path: external/to-tickets.md
type: external-doc
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
verified: 2026-09-05 quote-check+coverage
---

# external/to-tickets.md

## Purpose — required, verbatim
> "Split a spec into small tickets an agent can build." — external/to-tickets.md:24

## Design intent — required
Decomposes a multi-session spec, plan, or planning conversation into vertically sliced tracer-bullet tickets on an issue tracker, each sized to fit within a single fresh context window. Enforces dependency-ordered execution through explicit blocking edges, exposing a frontier of unblocked tickets that can be executed independently. Prevents horizontal layer-by-layer slicing failure modes by ensuring every ticket represents an end-to-end demonstrable behavior. Documents the expand-migrate-contract sequence as the explicit exception for wide refactors with large blast radiuses. Without this documentation, developers and agents would lack the public architectural rationale, operational boundaries, and troubleshooting guidance for vertical task decomposition, leading to excessive rework loops and context exhaustion across multi-session builds.

## Phase — required
matt:The Main Flow

## Inputs — required
- A plan, spec, or ongoing conversation: "takes a plan, a" — external/to-tickets.md:25 or "or the conversation you are in" — external/to-tickets.md:25 (where "reads the thread directly, no spec needed" — external/to-tickets.md:29)
- Issue tracker configuration: "publishes into a tracker, so" — external/to-tickets.md:32 "must have configured one for this repo" — external/to-tickets.md:32
- Interactive quiz responses: "presents the breakdown as a numbered list and quizzes you on it" — external/to-tickets.md:36 to validate granularity and blocking edges before publishing

## Outputs — required
- Numbered tickets on issue tracker: "breaks it into a set of" — external/to-tickets.md:25 "tickets" — external/to-tickets.md:25 "on your issue tracker" — external/to-tickets.md:25
- Explicit blocking dependencies: "Each ticket declares its" — external/to-tickets.md:25 "blocking edges" — external/to-tickets.md:25
- Prefactoring ordered first: "looks for prefactoring" — external/to-tickets.md:36 "and orders that work first" — external/to-tickets.md:36
- Local markdown issue files: "numbered blockers-first" — external/to-tickets.md:39 where "Local mode now writes one file per ticket under" — external/to-tickets.md:60 `.scratch/<feature-slug>/issues/<NN>-<slug>.md`

## Invokes — required
- skill implement — external/to-tickets.md:29
- skill grill-with-docs — external/to-tickets.md:29
- skill to-spec — external/to-tickets.md:29
- skill wayfinder — external/to-tickets.md:29
- skill triage — external/to-tickets.md:30
- skill setup-matt-pocock-skills — external/to-tickets.md:32
- skill code-review — external/to-tickets.md:78
- skill tdd — external/to-tickets.md:79
- skill ask-matt — external/to-tickets.md:79
- skill prototype — external/to-tickets.md:79

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /to-tickets Skill` — external/to-tickets.md:24 — defined here
- `spec` — external/to-tickets.md:25 — used here
- `tickets` — external/to-tickets.md:25 — defined here
- `blocking edges` — external/to-tickets.md:25 — defined here
- `tracer bullet` — external/to-tickets.md:26 — defined here
- `context window` — external/to-tickets.md:26 — used here
- `session` — external/to-tickets.md:26 — used here
- `/to-tickets` — external/to-tickets.md:28 — defined here
- `agent` — external/to-tickets.md:28 — used here
- `agent-ready` — external/to-tickets.md:30 — defined here
- `triage-label` — external/to-tickets.md:32 — used here
- `horizontal` — external/to-tickets.md:34 — defined here
- `vertical` — external/to-tickets.md:34 — defined here
- `acceptance criteria` — external/to-tickets.md:34 — used here
- `prefactoring` — external/to-tickets.md:36 — defined here
- `frontier` — external/to-tickets.md:39 — defined here
- `wide refactor` — external/to-tickets.md:42 — defined here
- `blast radius` — external/to-tickets.md:42 — defined here
- `expand–contract` — external/to-tickets.md:43 — defined here
- `Expand` — external/to-tickets.md:45 — defined here
- `Migrate` — external/to-tickets.md:46 — defined here
- `Contract` — external/to-tickets.md:47 — defined here
- `integration branch` — external/to-tickets.md:49 — defined here
- `model` — external/to-tickets.md:52 — used here
- `demo path` — external/to-tickets.md:54 — defined here
- `sub-issues` — external/to-tickets.md:55 — used here
- `tool calls` — external/to-tickets.md:62 — used here
- `clear` — external/to-tickets.md:62 — used here
- `compact` — external/to-tickets.md:62 — used here
- `main build chain` — external/to-tickets.md:77 — used here
- `The Main Flow` — external/to-tickets.md:79 — used here
- `Shaping` — external/to-tickets.md:79 — used here
- `Upkeep` — external/to-tickets.md:79 — used here
- `Productivity Skills` — external/to-tickets.md:79 — used here
- `Reference Skills` — external/to-tickets.md:79 — used here
- `Getting Started` — external/to-tickets.md:79 — used here

## Structure
- # The /to-tickets Skill
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## Tracer bullets, not layers
- ## Blocking edges
- ## The wide-refactor exception
- ## Common questions
- ## It's working if
- ## Where it fits
- ### You have the skill. Now build the workflow around it.
- ## Install the skills
- ## Related reading
- ### Learn
- ### Cohorts
- ### Account
- ### Agents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/to-tickets.md:1 — External documentation page snapshot is an orphan not referenced or linked by any in-scope file in sources/matt/.
- other — external/to-tickets.md:52 — Models tend toward over-decomposition into excessive atomic tickets for small changes, losing conceptual grouping.
- other — external/to-tickets.md:54 — Models periodically revert to horizontal slicing (one ticket per architectural layer) instead of vertical tracer bullets unless steered during the quiz step.
- doc-drift — external/to-tickets.md:56 — GitHub integration fails to create tickets as native sub-issues of the parent spec issue despite gh CLI v2.94+ support (issue #554).
- doc-drift — external/to-tickets.md:58 — Blocking dependencies are written into issue body text rather than using native GitHub blocking relationships via gh issue create --blocked-by (issue #513).
- doc-drift — external/to-tickets.md:60 — Prior v1.1 implementation wrote tickets to a single shared tickets.md causing write races; fixed to individual files under .scratch/<feature-slug>/issues/<NN>-<slug>.md.
- other — external/to-tickets.md:62 — Large spec issues cause truncation during re-fetching if the context window was cleared or compacted between /to-spec and /to-tickets.
- doc-drift — external/to-tickets.md:64 — Acceptance criteria template lacks a falsifiability check, frequently generating criteria that are already green at the base commit or dependent on other tickets.
- doc-drift — external/to-tickets.md:66 — No automated ticket dispatch exists, and /implement does not reliably close or check off completed tickets on GitHub or local markdown.

## Observations
- Public web snapshot of "https://aihero.dev/skills-to-tickets" — external/to-tickets.md:1 fetched for the offline synthesis.
- Emphasizes the tracer bullet rule: "Every ticket is a" — external/to-tickets.md:26 "tracer bullet" — external/to-tickets.md:26 slicing through every layer so each can be demoed on its own, avoiding the failure of horizontal slicing where 26 tickets produced 20 agent runs per closed ticket (three quarters rework).
- Mandates the pre-publication quiz step where the agent "looks for prefactoring" — external/to-tickets.md:36 based on "make the change easy, then make the easy change" — external/to-tickets.md:36 and presents a numbered list to challenge granularity and blocking relationships.
- Identifies the wide-refactor exception: "One shape breaks the tracer-bullet rule." — external/to-tickets.md:42 where changes with large blast radius fan out across the codebase, requiring expand-migrate-contract sequencing.
- Clarifies operational boundaries: "The edges live in the ticket either way." — external/to-tickets.md:40 and running the tickets is the developer or fleet job, not the skill.
- Clarifies dispatch model: "The skill stops at the artifact, and there is no auto-dispatch mode." — external/to-tickets.md:66.
- Notes context management: advises operators not to clear or compact between /to-spec and /to-tickets so large specs do not need to be re-fetched over tool calls.

## Context cost
368020 bytes, approximately 92,000 tokens (full HTML snapshot including Next.js script bundles, stylesheets, and hydration state). 0 loaded runtime dependencies.
