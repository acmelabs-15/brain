---
package: matt
path: skills/engineering/implement/SKILL.md
type: skill
bytes: 433
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/implement/SKILL.md

## Purpose — required, verbatim
> "Implement a piece of work based on a spec or set of tickets." — skills/engineering/implement/SKILL.md:3

## Design intent — required
Drives the core coding loop of the engineering lifecycle. Converts settled specifications or tickets into working code by instructing the agent to apply `/tdd` at agreed seams, enforce regular typechecking and incremental test runs, run the full test suite at completion, conduct a two-axis `/code-review`, and commit to the current branch. Treats upstream specifications as fixed contracts and disallows reopening design decisions.

## Phase — required
matt:implement

## Inputs — required
User specification or ticket description (`spec or tickets` — skills/engineering/implement/SKILL.md:7).

## Outputs — required
Working code changes and git commit on current branch (`Commit your work to the current branch.` — skills/engineering/implement/SKILL.md:15).

## Invokes — required
- skill tdd — skills/engineering/implement/SKILL.md:9
- skill code-review — skills/engineering/implement/SKILL.md:13

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23
- doc README.md — README.md:201
- doc skills/engineering/README.md — skills/engineering/README.md:16
- doc docs/engineering/implement.md — docs/engineering/implement.md:9
- doc docs/engineering/tdd.md — docs/engineering/tdd.md:67

## Concepts named — required, verbatim
- `implement` — skills/engineering/implement/SKILL.md:2 — defined here
- `spec` — skills/engineering/implement/SKILL.md:3 — used here
- `tickets` — skills/engineering/implement/SKILL.md:3 — used here
- `seams` — skills/engineering/implement/SKILL.md:9 — used here
- `tdd` — skills/engineering/implement/SKILL.md:9 — used here
- `typechecking` — skills/engineering/implement/SKILL.md:11 — used here
- `test suite` — skills/engineering/implement/SKILL.md:11 — used here
- `code-review` — skills/engineering/implement/SKILL.md:13 — used here

## Structure
- `name: implement` — skills/engineering/implement/SKILL.md:2
- `description: "Implement a piece of work based on a spec or set of tickets."` — skills/engineering/implement/SKILL.md:3
- `disable-model-invocation: true` — skills/engineering/implement/SKILL.md:4
- `Implement the work described by the user in the spec or tickets.` — skills/engineering/implement/SKILL.md:7
- `Use /tdd where possible, at pre-agreed seams.` — skills/engineering/implement/SKILL.md:9
- `Run typechecking regularly, single test files regularly, and the full test suite once at the end.` — skills/engineering/implement/SKILL.md:11
- `Once done, use /code-review to review the work.` — skills/engineering/implement/SKILL.md:13
- `Commit your work to the current branch.` — skills/engineering/implement/SKILL.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines a disciplined 5-beat execution cadence: (1) read requirements and identify pre-agreed seams, (2) drive TDD per seam, (3) frequent typechecking and single-test execution, (4) full test suite run before completion, and (5) code review evaluation prior to committing to the branch.

## Context cost
433 bytes (~108 tokens). When invoking `tdd` (SKILL.md 3,549 bytes) and `code-review` (SKILL.md 6,589 bytes), context expands by ~10,138 bytes (~2,534 tokens).
