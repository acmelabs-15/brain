---
package: matt
path: external/ask-matt.md
type: external-doc
bytes: 355633
unit: inv-matt-10
deprecated: false
aliases: []
memo_inputs:
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/ask-matt.md

## Purpose — required, verbatim
> "Find out which skill to use for the situation you are in." — external/ask-matt.md:2

## Design intent — required
Serves as the public web documentation and discovery guide for the `/ask-matt` router skill on the AI Hero website (`aihero.dev/skills-ask-matt`). It addresses the problem of cognitive overhead across a growing catalog of AI engineering skills by helping developers determine which workflow or skill sequence to invoke based on their current situation (e.g. an unstarted idea, incoming bug reports, or an overflowing context window). The page explains the core concept of thinking in "flows" rather than isolated skills, provides an ordered decision tree for managing context at "phase boundaries", documents common questions and failure modes (including router lag and harness skill-visibility flags), and acts as a central hub pointing developers into the main lifecycle and on-ramp workflows. Without this page, developers exploring the public catalog would lack a top-level narrative guide mapping situations to skills and explaining the lifecycle transitions between them.

## Phase — required
cross-phase

## Inputs — required
- User situation description: "You describe the situation you are in" — external/ask-matt.md:25
- User invocation command: "You invoke this by typing" — external/ask-matt.md:28
- Prior repository configuration: "has already configured an issue tracker in the repo." — external/ask-matt.md:32
- User boundary decision: "where a human decision is expected" — external/ask-matt.md:53
- Installed skill catalog: "Everything it points at has to be installed for the recommendation to be actionable, and it only knows the promoted skills in this repo." — external/ask-matt.md:31

## Outputs — required
- Recommended command: "what you get back is the next thing to type, and you type it." — external/ask-matt.md:26
- Skill sequence and decision points: "names the skill or the sequence of skills that fits, plus where the human decisions in that sequence sit." — external/ask-matt.md:25
- Phase boundary guidance: "The ordered tree over the five options at a phase boundary" — external/ask-matt.md:29
- Produced files on disk: none

## Invokes — required
- skill grill-with-docs — external/ask-matt.md:29
- skill triage — external/ask-matt.md:29
- skill wayfinder — external/ask-matt.md:29
- skill grill-me — external/ask-matt.md:29
- skill setup-matt-pocock-skills — external/ask-matt.md:32
- skill to-spec — external/ask-matt.md:32
- skill to-tickets — external/ask-matt.md:32
- skill implement — external/ask-matt.md:32
- skill handoff — external/ask-matt.md:43
- skill code-review — external/ask-matt.md:47
- command /clear — external/ask-matt.md:43
- command /compact — external/ask-matt.md:43
- command /handoff — external/ask-matt.md:44
- doc SKILL.md — external/ask-matt.md:51

## Invoked by — required
- doc ask-matt — docs/engineering/research.md:73
- doc ask-matt — docs/engineering/improve-codebase-architecture.md:101
- doc ask-matt — docs/engineering/code-review.md:94
- doc ask-matt — docs/engineering/codebase-design.md:88
- doc ask-matt — docs/engineering/wayfinder.md:103
- doc ask-matt — docs/productivity/grill-me.md:76
- doc ask-matt — docs/productivity/wait-what.md:36
- doc ask-matt — docs/productivity/writing-for-agents.md:70
- doc ask-matt — docs/productivity/grilling.md:87
- doc ask-matt — docs/productivity/handoff.md:20
- doc ask-matt — docs/productivity/handoff.md:76
- doc ask-matt — docs/productivity/teach.md:97
- doc ask-matt — docs/productivity/to-questionnaire.md:78

## Concepts named — required, verbatim
- `ask-matt` — external/ask-matt.md:25 — defined here
- `router` — external/ask-matt.md:25 — defined here
- `session` — external/ask-matt.md:25 — used here
- `spec` — external/ask-matt.md:26 — used here
- `triage` — external/ask-matt.md:29 — used here
- `ticket` — external/ask-matt.md:29 — used here
- `context` — external/ask-matt.md:29 — used here
- `grill-me` — external/ask-matt.md:29 — used here
- `grill-with-docs` — external/ask-matt.md:29 — used here
- `wayfinder` — external/ask-matt.md:29 — used here
- `setup-matt-pocock-skills` — external/ask-matt.md:32 — used here
- `to-spec` — external/ask-matt.md:32 — used here
- `to-tickets` — external/ask-matt.md:32 — used here
- `implement` — external/ask-matt.md:32 — used here
- `flow` — external/ask-matt.md:34 — defined here
- `main flow` — external/ask-matt.md:36 — defined here
- `prototype` — external/ask-matt.md:36 — used here
- `spec-and-tickets split` — external/ask-matt.md:36 — defined here
- `on-ramps` — external/ask-matt.md:37 — defined here
- `standalones` — external/ask-matt.md:38 — defined here
- `vocabulary layer` — external/ask-matt.md:39 — defined here
- `phase boundary` — external/ask-matt.md:42 — defined here
- `phase` — external/ask-matt.md:42 — defined here
- `grilling` — external/ask-matt.md:42 — used here
- `subagents` — external/ask-matt.md:42 — used here
- `continue` — external/ask-matt.md:43 — defined here
- `smart zone` — external/ask-matt.md:43 — used here
- `primary source` — external/ask-matt.md:43 — used here
- `/clear` — external/ask-matt.md:43 — used here
- `handoff` — external/ask-matt.md:43 — used here
- `harness` — external/ask-matt.md:43 — used here
- `subagent` — external/ask-matt.md:43 — used here
- `away from the keyboard` — external/ask-matt.md:43 — used here
- `/compact` — external/ask-matt.md:43 — used here
- `code-review` — external/ask-matt.md:47 — used here
- `resolving-merge-conflicts` — external/ask-matt.md:47 — used here
- `disable-model-invocation: true` — external/ask-matt.md:49 — used here
- `tdd` — external/ask-matt.md:49 — used here
- `plan mode` — external/ask-matt.md:51 — used here
- `model` — external/ask-matt.md:51 — used here
- `writing-for-agents` — external/ask-matt.md:59 — used here
- `writing-great-skills` — external/ask-matt.md:59 — used here
- `to-prd` — external/ask-matt.md:59 — used here
- `pathfinder` — external/ask-matt.md:59 — used here
- `ubiquitous-language` — external/ask-matt.md:59 — used here
- `design-an-interface` — external/ask-matt.md:59 — used here
- `qa` — external/ask-matt.md:59 — used here
- `request-refactor-plan` — external/ask-matt.md:59 — used here
- `secondary source` — external/ask-matt.md:70 — used here

## Structure
- # The /ask-matt Skill
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## Flows, not skills
- ## The phase boundary
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/ask-matt.md:47 — The router documentation explicitly notes that it is hand-maintained and lags the repository, with `/grilling` and `/resolving-merge-conflicts` having shipped long before being incorporated into the router.
- other — external/ask-matt.md:49 — Documents a known bug where 13 of the plugin's 22 skills set `disable-model-invocation: true`, causing Claude Code harness to omit them from the context skill list and leading the agent to incorrectly report them as uninstalled.
- doc-drift — external/ask-matt.md:51 — The router provides recommendations from its own condensed one-line glosses rather than opening each skill's `SKILL.md`, leading to inaccurate guidance (such as recommending skipping `to-spec`).
- doc-drift — external/ask-matt.md:32 — The router recommends tracker-dependent routes (`triage`, `to-spec`, `to-tickets`, `implement`) before verifying whether `setup-matt-pocock-skills` has actually configured an issue tracker in the repository.
- doc-drift — external/ask-matt.md:70 — The documentation explicitly notes it is a secondary source that drifts from skill implementations, stating that where the router and a `SKILL.md` disagree, the `SKILL.md` is authoritative.

## Observations
- The page defines an explicit 5-option decision tree for context management at "phase boundaries" (`Continue`, `/clear`, `handoff`, `Subagent`, `/compact`), ordering them by context cost and precision rather than treating `/compact` as the default first reach.
- Identifies the distinction between "flows" and "skills", organizing routes into four archetypes: the main flow (idea to ship), on-ramps (triage, bug diagnosis, wayfinder), standalones (prototype, questionnaire, merge conflicts), and the underlying vocabulary layer (`domain-modeling`, `codebase-design`).
- Explains the architectural rationale behind `/ask-matt` as a pure navigation aid: "what you get back is the next thing to type, and you type it." — external/ask-matt.md:26.
- Cites historical lineage and renames of skills in the repo: `writing-great-skills` -> `writing-for-agents`, `to-prd` -> `to-spec`, `pathfinder` -> `wayfinder`, and retired skills (`ubiquitous-language`, `design-an-interface`, `qa`, `request-refactor-plan`).
- This HTML page is snapshotted from `https://aihero.dev/skills-ask-matt` and contains Next.js page shell layout, SVG icons, JSON-LD metadata, and hydration scripts.

## Context cost
355633 bytes (~88908 tokens if treated as raw HTML). Static web documentation snapshot rendered with Next.js. Not intended for direct agent execution context; zero dependencies loaded into runtime context when invoking `/ask-matt` (the skill definition itself in `sources/matt/skills/engineering/ask-matt/SKILL.md` is 11417 bytes).
