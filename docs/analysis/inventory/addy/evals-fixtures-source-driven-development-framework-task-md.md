---
package: addy
path: evals/fixtures/source-driven-development/framework-task.md
type: doc
bytes: 535
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/source-driven-development/framework-task.md, sha256: c9d00f67065f6e9a35d2edfa3ea7207090a214da02163b8a751f5fc6e179309b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/source-driven-development/framework-task.md

## Purpose — required, verbatim
> "Implement server-side sessions for an Express 5 application. The project uses" — evals/fixtures/source-driven-development/framework-task.md:3
(no explicit purpose statement)

## Design intent — required
Provides a task specification fixture for evaluating the `source-driven-development` skill. It prompts the implementation of server-side sessions in Express 5 using `express-session`, requiring all claims and configurations (proxies, cookies, stores, secrets) to be grounded with citations to official documentation while actively prohibiting reliance on remembered obsolete defaults from Express 4 and requiring unverified assumptions to be flagged.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config source-driven-development — evals/cases/source-driven-development.json:35

## Concepts named — required, verbatim
- `Session implementation task` — evals/fixtures/source-driven-development/framework-task.md:1 — defined here
- `server-side sessions` — evals/fixtures/source-driven-development/framework-task.md:3 — used here
- `Express 5` — evals/fixtures/source-driven-development/framework-task.md:3 — used here
- `express-session` — evals/fixtures/source-driven-development/framework-task.md:4 — used here
- `secure cookies` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `session stores` — evals/fixtures/source-driven-development/framework-task.md:5 — used here

## Structure
- `# Session implementation task` — evals/fixtures/source-driven-development/framework-task.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Used by `evals/cases/source-driven-development.json:30-42` to evaluate expectations regarding documentation citations and avoidance of deprecated patterns.

## Context cost
535 bytes, ~134 tokens.
