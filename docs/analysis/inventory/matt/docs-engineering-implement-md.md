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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/implement.md

## Purpose — required, verbatim
> "`implement` builds work that has already been decided. You point it at a [ticket](https://www.aihero.dev/ai-coding-dictionary/ticket), a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), or the plan you just agreed in the conversation, and it writes the code, drives [tdd](https://aihero.dev/skills-tdd) at the seams, typechecks as it goes, runs [code-review](https://aihero.dev/skills-code-review) at the end, and commits to the current branch." — docs/engineering/implement.md:3

## Design intent — required
Human-facing documentation and execution manual for the `implement` skill, the dedicated execution engine of the matt build chain. It describes the non-interactive, five-beat build discipline (explore/seams, TDD at seams, frequent typecheck/single tests, full suite, code review, commit) and warns against anti-patterns like parallel multi-session execution on shared git state or expecting automated ticket closing. Without this guide, developers would expect `implement` to negotiate requirements, handle multi-ticket queues, or manage pull requests and tracker synchronization.

## Phase — required
none

## Inputs — required
A single ticket (#id), a specification, or an agreed conversation plan. Consumes tracker configuration established by `setup-matt-pocock-skills`.

## Outputs — required
Committed implementation code on the current branch, co-located tests, and code review feedback before final commit. (Leaves tickets open and criteria unchecked).

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
- `seams` — docs/engineering/implement.md:3 — defined here
- `agent` — docs/engineering/implement.md:5 — used here
- `disable-model-invocation: true` — docs/engineering/implement.md:9 — used here
- `session` — docs/engineering/implement.md:15 — used here
- `clearing` — docs/engineering/implement.md:15 — used here
- `tracer-bullet` — docs/engineering/implement.md:41 — defined here
- `vertical slices` — docs/engineering/implement.md:41 — defined here
- `context window` — docs/engineering/implement.md:41 — used here
- `pre-agreed seams` — docs/engineering/implement.md:43 — defined here
- `seam` — docs/engineering/implement.md:45 — defined here
- `acceptance criteria` — docs/engineering/implement.md:51 — used here
- `frontier` — docs/engineering/implement.md:53 — defined here
- `subagent` — docs/engineering/implement.md:57 — used here
- `worktrees` — docs/engineering/implement.md:57 — used here
- `tokens` — docs/engineering/implement.md:71 — used here
- `effort` — docs/engineering/implement.md:71 — used here
- `main chain` — docs/engineering/implement.md:87 — defined here

## Structure
- What it does — docs/engineering/implement.md:1
- When to reach for it — docs/engineering/implement.md:7
- Prerequisites — docs/engineering/implement.md:25
- What one run does — docs/engineering/implement.md:31
- Pre-agreed seams — docs/engineering/implement.md:43
- Common questions — docs/engineering/implement.md:49
- It's working if — docs/engineering/implement.md:77
- Where it fits — docs/engineering/implement.md:85

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · docs/engineering/implement.md:65 · implement runs code-review before committing (line 39), but code-review inspects git diff <fixed-point>...HEAD, finding no changes unless an interim commit exists.

## Observations
The skill strictly enforces one ticket per context window; batch execution and automated subagent fan-out across a ticket queue are explicitly unsupported. It details severe hazards of running parallel `/implement` sessions in a single repository checkout (colliding amends, branch pollution, and lost stashes across shared `refs/stash`). Pre-agreed seams are essential to prevent the run from degrading into unstructured code dumping, but `implement` relies entirely on upstream specifications or `tdd` prompts to establish them.

## Context cost
10259 bytes, ~2400 tokens.
