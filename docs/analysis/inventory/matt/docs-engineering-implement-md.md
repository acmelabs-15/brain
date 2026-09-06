---
package: matt
path: docs/engineering/implement.md
type: doc
bytes: 10259
unit: inv-matt-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/implement.md

## Purpose — required, verbatim
> "`implement` builds work that has already been decided. You point it at a [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), or the plan you just agreed in the conversation, and it writes the code, drives [tdd](https://aihero.dev/skills-tdd) at the seams, typechecks as it goes, runs [code-review](https://aihero.dev/skills-code-review) at the end, and commits to the current branch." — docs/engineering/implement.md:3

## Design intent — required
Documentation describing the execution model, rhythm, and constraints of the `implement` skill. It serves as the code construction step of the main build chain, consuming upstream specifications or tickets and translating them into commits via disciplined test-driven development at public seams without reopening settled architectural plans. It enforces a five-beat rhythm (read seams, drive TDD, typecheck/test single files, run full suite, code-review and commit). It operates with `disable-model-invocation: true`, strictly executing one vertical slice ticket per session and committing directly to the current branch.

## Phase — required
matt:main build chain

## Inputs — required
- Ticket reference (e.g. issue tracker `#42`), specification document, or in-thread agreed plan.
- Pre-agreed testing seams defined upstream in the spec.
- Existing codebase, tests, and tracker configuration (`setup-matt-pocock-skills`).

## Outputs — required
- Production code and tests committed directly to the current git branch.
- Automated code review run at close-out.

## Invokes — required
- skill tdd — docs/engineering/implement.md:3
- skill code-review — docs/engineering/implement.md:3
- skill ask-matt — docs/engineering/implement.md:9
- skill to-tickets — docs/engineering/implement.md:9
- skill grill-with-docs — docs/engineering/implement.md:19
- skill grill-me — docs/engineering/implement.md:19
- skill setup-matt-pocock-skills — docs/engineering/implement.md:29
- skill to-spec — docs/engineering/implement.md:90
- skill wayfinder — docs/engineering/implement.md:95

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ticket` — docs/engineering/implement.md:3 — used here
- `spec` — docs/engineering/implement.md:3 — used here
- `tdd` — docs/engineering/implement.md:3 — used here
- `seams` — docs/engineering/implement.md:3 — defined here
- `code-review` — docs/engineering/implement.md:3 — used here
- `agent` — docs/engineering/implement.md:5 — used here
- `disable-model-invocation` — docs/engineering/implement.md:9 — defined here
- `ask-matt` — docs/engineering/implement.md:9 — used here
- `to-tickets` — docs/engineering/implement.md:9 — used here
- `session` — docs/engineering/implement.md:15 — used here
- `clearing` — docs/engineering/implement.md:15 — used here
- `grill-with-docs` — docs/engineering/implement.md:19 — used here
- `grill-me` — docs/engineering/implement.md:19 — used here
- `model` — docs/engineering/implement.md:23 — used here
- `setup-matt-pocock-skills` — docs/engineering/implement.md:29 — used here
- `red-green slice` — docs/engineering/implement.md:36 — defined here
- `context window` — docs/engineering/implement.md:41 — used here
- `seam` — docs/engineering/implement.md:45 — defined here
- `pre-agreed` — docs/engineering/implement.md:47 — defined here
- `subagent` — docs/engineering/implement.md:57 — used here
- `fixed-point` — docs/engineering/implement.md:65 — used here
- `tokens` — docs/engineering/implement.md:71 — used here
- `effort` — docs/engineering/implement.md:71 — used here
- `vertical slice` — docs/engineering/implement.md:83 — defined here
- `main chain` — docs/engineering/implement.md:87 — defined here
- `to-spec` — docs/engineering/implement.md:90 — used here
- `wayfinder` — docs/engineering/implement.md:95 — used here

## Structure
- What it does
- When to reach for it
- Prerequisites
- What one run does
- Pre-agreed seams
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · docs/engineering/implement.md:47 · While the skill requires pre-agreed seams, it contains no mechanism to establish them, defaulting silently to "just write the code" if seams were not explicitly defined upstream.
- other · docs/engineering/implement.md:53 · Implement has no ticket completion step: it leaves issues open, acceptance criteria unchecked, and ignores code-review findings, blocking dependency chains in to-tickets.
- other · docs/engineering/implement.md:57 · Does not support parallel or batch execution; concurrent runs in a single checkout cause git index, HEAD, and stash collisions.
- internal-contradiction · docs/engineering/implement.md:65 · Runs code-review against git diff before committing, so changes are invisible to the diff unless an interim commit already exists.
- other · docs/engineering/implement.md:75 · Ticket reference resolution (#2) is not fail-closed, causing fresh sessions to bind mistakenly to unrelated numbered lists in the workspace.

## Observations
`implement` is strictly user-invoked via `disable-model-invocation: true`. It executes a single tracer-bullet vertical slice ticket per session and expects context clearing between runs. It trusts upstream planning completely and does not redesign work in flight.

## Context cost
10259 bytes, ~2400 tokens. When executed, internally drives `tdd` and `code-review`.
