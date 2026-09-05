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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/implement.md

## Purpose — required, verbatim
> "`implement` builds work that has already been decided. You point it at a [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), or the plan you just agreed in the conversation, and it writes the code, drives [tdd](https://aihero.dev/skills-tdd) at the seams, typechecks as it goes, runs [code-review](https://aihero.dev/skills-code-review) at the end, and commits to the current branch." — docs/engineering/implement.md:3

## Design intent — required
Translates settled specifications or tickets into code changes and git commits following an exacting five-beat execution cadence (read requirements and identify seams, drive TDD per seam, frequent typechecks and test runs, full test suite pass, and code review prior to commit). It deliberately disables plan reopening and design second-guessing during execution, treating upstream specifications as binding contracts.

## Phase — required
matt:implement

## Inputs — required
Issue tracker tickets (`#42`), specification documents, or implementation agreements established within the conversational thread.

## Outputs — required
Git commits on the active branch comprising completed implementation slices, automated test coverage, passing typechecks, and review evaluations.

## Invokes — required
- skill tdd — docs/engineering/implement.md:3
- skill code-review — docs/engineering/implement.md:3
- skill ask-matt — docs/engineering/implement.md:9
- skill to-tickets — docs/engineering/implement.md:9
- skill grill-with-docs — docs/engineering/implement.md:19
- skill grill-me — docs/engineering/implement.md:19
- skill setup-matt-pocock-skills — docs/engineering/implement.md:29
- skill to-spec — docs/engineering/implement.md:95
- skill wayfinder — docs/engineering/implement.md:95

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ticket` — docs/engineering/implement.md:3 — used here
- `spec` — docs/engineering/implement.md:3 — used here
- `agent` — docs/engineering/implement.md:5 — used here
- `disable-model-invocation` — docs/engineering/implement.md:9 — used here
- `session` — docs/engineering/implement.md:15 — used here
- `clearing` — docs/engineering/implement.md:15 — used here
- `model` — docs/engineering/implement.md:23 — used here
- `context window` — docs/engineering/implement.md:41 — used here
- `seam` — docs/engineering/implement.md:45 — defined here
- `subagent` — docs/engineering/implement.md:57 — used here
- `tokens` — docs/engineering/implement.md:71 — used here
- `effort` — docs/engineering/implement.md:71 — used here
- `main chain` — docs/engineering/implement.md:87 — defined here

## Structure
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## What one run does
- ## Pre-agreed seams
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/implement.md:53 Completes implementation commits without updating tracker item state or checking off acceptance criteria checkboxes.
- `other` · docs/engineering/implement.md:65 Invokes `code-review` prior to commit, causing review to miss unstaged working tree changes.
- `other` · docs/engineering/implement.md:75 Ticket ID resolution in fresh contexts resolves against local todo lists rather than issue trackers without fail-closed validation.

## Observations
Enforces a single-ticket-per-session execution workflow with mandatory context clearing between tickets to prevent context degradation. Emphasizes that durable testing requires pre-agreeing seams in upstream specs before code generation begins.

## Context cost
10,259 bytes (~2,565 tokens). Documentation page for `implement` skill.
