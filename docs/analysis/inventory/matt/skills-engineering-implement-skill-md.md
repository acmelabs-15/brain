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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/implement/SKILL.md

## Purpose — required, verbatim
> "Implement a piece of work based on a spec or set of tickets." — skills/engineering/implement/SKILL.md:3

## Design intent — required
The primary execution engine of matt's engineering build workflow. Orchestrates the construction of a feature or bugfix from an agreed specification or set of tracer-bullet tickets. Enforces professional software construction hygiene: driving test-driven development via `/tdd` at pre-agreed seams, running compiler typechecking and targeted single test files continuously to maintain fast feedback loops, executing the comprehensive test suite once construction is complete, running `/code-review`, and committing the verified changes directly to the current branch. Configured with `disable-model-invocation: true` to require explicit user dispatch.

## Phase — required
none

## Inputs — required
A specification, a set of tracer-bullet tickets, or an agreed conversation plan; pre-agreed architectural seams.

## Outputs — required
Implemented source code; new and updated automated tests; code review findings; git commit on the current branch.

## Invokes — required
- skill tdd — skills/engineering/implement/SKILL.md:9
- skill code-review — skills/engineering/implement/SKILL.md:13

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23
- doc README.md — skills/engineering/README.md:16

## Concepts named — required, verbatim
- `implement` — skills/engineering/implement/SKILL.md:2 — defined here
- `spec` — skills/engineering/implement/SKILL.md:3 — used here
- `tickets` — skills/engineering/implement/SKILL.md:3 — used here
- `disable-model-invocation` — skills/engineering/implement/SKILL.md:4 — used here
- `tdd` — skills/engineering/implement/SKILL.md:9 — used here
- `seams` — skills/engineering/implement/SKILL.md:9 — used here
- `typechecking` — skills/engineering/implement/SKILL.md:11 — used here
- `test suite` — skills/engineering/implement/SKILL.md:11 — used here
- `code-review` — skills/engineering/implement/SKILL.md:13 — used here

## Structure
(no headings; flat prompt)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · skills/engineering/implement/SKILL.md:13 · implement instructs running /code-review before committing to the current branch (line 15), but the code-review skill inspects git diffs against a fixed point and may fail to evaluate uncommitted changes.

## Observations
Concise 16-line dispatch prompt that establishes strict sequence invariants: pre-agreed seams with `/tdd`, tight build/test feedback loops, full suite verification, review pass, and final branch commit.

## Context cost
433 bytes, 16 lines, ~110 tokens. Dynamically invokes `/tdd` and `/code-review`.
