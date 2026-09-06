---
package: matt
path: docs/engineering/ask-matt.md
type: doc
bytes: 10723
unit: inv-matt-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/ask-matt.md

## Purpose — required, verbatim
> "`ask-matt` is the router over the skills in this repo. You describe the situation you are in (an idea you cannot start, a pile of incoming bug reports, a [session](https://www.aihero.dev/ai-coding-dictionary/session) that has run long), and it names the skill or the sequence of skills that fits, plus where the human decisions in that sequence sit." — docs/engineering/ask-matt.md:3

## Design intent — required
Provides user-facing documentation and architectural rationale for `ask-matt`, the central interactive workflow router across the repository. Explains the core philosophy of thinking in multi-step "flows" rather than isolated skills, delineating the main build flow, on-ramps, standalones, and underlying vocabulary references. Documents the five-option decision tree for managing context at phase boundaries (`Continue`, `/clear`, `handoff`, `Subagent`, `/compact`), and addresses common operational failure modes such as false "not installed" warnings caused by `disable-model-invocation: true`, hallucinated skill summaries without opening underlying `SKILL.md` files, and router maintenance lag. Without this document, users and agents would lack guidance on choosing between overlapping skills, navigating phase boundaries, and diagnosing router inaccuracies.

## Phase — required
cross-phase

## Inputs — required
- Descriptions from the user about their situation, project context, confusion between skills, or session length.
- The hand-maintained routing table/map of skills in the repository.
- Interactive user queries via `/ask-matt`.

## Outputs — required
- Specific recommended skill or sequence of skills (flow) to invoke next.
- Explicit human decision points in the workflow sequence.
- Guidance on context management at phase boundaries (`Continue`, `/clear`, `handoff`, `Subagent`, `/compact`).

## Invokes — required
- skill triage — docs/engineering/ask-matt.md:14
- skill grill-me — docs/engineering/ask-matt.md:15
- skill grill-with-docs — docs/engineering/ask-matt.md:15
- skill wayfinder — docs/engineering/ask-matt.md:15
- skill to-spec — docs/engineering/ask-matt.md:23
- skill to-tickets — docs/engineering/ask-matt.md:23
- skill implement — docs/engineering/ask-matt.md:23
- skill setup-matt-pocock-skills — docs/engineering/ask-matt.md:23
- skill handoff — docs/engineering/ask-matt.md:42
- skill code-review — docs/engineering/ask-matt.md:52
- skill grilling — docs/engineering/ask-matt.md:52
- skill resolving-merge-conflicts — docs/engineering/ask-matt.md:52
- skill tdd — docs/engineering/ask-matt.md:56
- skill writing-for-agents — docs/engineering/ask-matt.md:76

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ask-matt` — docs/engineering/ask-matt.md:3 — defined here
- `session` — docs/engineering/ask-matt.md:3 — used here
- `spec` — docs/engineering/ask-matt.md:5 — used here
- `agent` — docs/engineering/ask-matt.md:9 — used here
- `main flow` — docs/engineering/ask-matt.md:13 — defined here
- `tickets` — docs/engineering/ask-matt.md:14 — used here
- `triage` — docs/engineering/ask-matt.md:14 — used here
- `context` — docs/engineering/ask-matt.md:16 — used here
- `phase boundary` — docs/engineering/ask-matt.md:16 — defined here
- `issue tracker` — docs/engineering/ask-matt.md:23 — used here
- `flow` — docs/engineering/ask-matt.md:27 — defined here
- `prototype` — docs/engineering/ask-matt.md:29 — used here
- `on-ramps` — docs/engineering/ask-matt.md:30 — defined here
- `standalones` — docs/engineering/ask-matt.md:31 — defined here
- `grilling` — docs/engineering/ask-matt.md:36 — used here
- `subagents` — docs/engineering/ask-matt.md:36 — used here
- `smart zone` — docs/engineering/ask-matt.md:40 — used here
- `primary source` — docs/engineering/ask-matt.md:40 — used here
- `/clear` — docs/engineering/ask-matt.md:41 — defined here
- `handoff` — docs/engineering/ask-matt.md:42 — used here
- `harness` — docs/engineering/ask-matt.md:42 — used here
- `away from the keyboard` — docs/engineering/ask-matt.md:43 — used here
- `/compact` — docs/engineering/ask-matt.md:44 — defined here
- `portability` — docs/engineering/ask-matt.md:46 — defined here
- `disable-model-invocation: true` — docs/engineering/ask-matt.md:56 — used here
- `plan mode` — docs/engineering/ask-matt.md:60 — used here
- `model` — docs/engineering/ask-matt.md:60 — used here
- `writing-for-agents` — docs/engineering/ask-matt.md:76 — used here
- `standalone router` — docs/engineering/ask-matt.md:88 — defined here
- `secondary source` — docs/engineering/ask-matt.md:90 — defined here

## Structure
- ## What it does — docs/engineering/ask-matt.md:1
- ## When to reach for it — docs/engineering/ask-matt.md:7
- ## Prerequisites — docs/engineering/ask-matt.md:19
- ## Flows, not skills — docs/engineering/ask-matt.md:25
- ## The phase boundary — docs/engineering/ask-matt.md:34
- ## Common questions — docs/engineering/ask-matt.md:48
- ## It's working if — docs/engineering/ask-matt.md:78
- ## Where it fits — docs/engineering/ask-matt.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/ask-matt.md:23 — Tracker-dependent routes (`triage`, `to-spec`, `to-tickets`, `implement`) are recommended even before `setup-matt-pocock-skills` has configured an issue tracker in the repository.
- doc-drift — docs/engineering/ask-matt.md:52 — Hand-maintained router map lags repository additions; skills `/grilling` and `/resolving-merge-conflicts` shipped long before the router named them.
- doc-drift — docs/engineering/ask-matt.md:56 — False "not installed" bug: 13 of 22 skills set `disable-model-invocation: true`, causing the harness to omit them from the context skill list so agents report them missing and fail to route through the spec-and-tickets flow.
- doc-drift — docs/engineering/ask-matt.md:60 — Model answers from internal one-line summaries rather than opening `SKILL.md`, hallucinating skill capabilities (such as skipping `to-spec` based on the gloss "turn the thread into a spec" without checking requirements).
- doc-drift — docs/engineering/ask-matt.md:72 — Router has instructed users to edit `SKILL.md` directly, which gets overwritten by `npx skills update` and fails on read-only plugin installs.

## Observations
Emphasizes that `ask-matt` is a pure recommender ("recommends and stops"), never executing skills or opening files automatically. Highlights the concept of thinking in end-to-end "flows" with branch points (such as the multi-session spec-and-tickets split or prototype detour) rather than keyword-matching isolated skills. Provides a rigorous five-option decision priority at phase boundaries (`Continue` > `/clear` > `handoff` > `Subagent` > `/compact`), explicitly noting that `/handoff` is specifically for portability and `/compact` is the fallback rather than the default first choice. Clarifies that the router is a secondary source over the authoritative `SKILL.md` files.

## Context cost
10723 bytes, approximately 2600 tokens.
