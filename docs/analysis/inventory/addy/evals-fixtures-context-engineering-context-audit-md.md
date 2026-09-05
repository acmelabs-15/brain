---
package: addy
path: evals/fixtures/context-engineering/context-audit.md
type: doc
bytes: 653
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/context-engineering/context-audit.md, sha256: 48130238edcf4ee51632c173de6b4bb53868ba935c4f70bceae7913490e7dd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/context-engineering/context-audit.md

## Purpose — required, verbatim
> "The repository is a TypeScript service. The current agent session loads the" — evals/fixtures/context-engineering/context-audit.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture describing a degraded agent session caused by pathological context contamination (loading 1,800 archived files, stale incident transcripts, and all ADRs, while omitting active project guides like CONTRIBUTING.md). It lists specific downstream failure modes including recommending the wrong programming language, wrong test framework, wrong architectural layering, and generic model answers. Without it, the `context-engineering` eval would lack a realistic audit scenario to test whether an agent can diagnose context pollution, propose context eviction, and formulate task-scoped context packing strategies.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Session context audit` — evals/fixtures/context-engineering/context-audit.md:1 — defined here
- `TypeScript` — evals/fixtures/context-engineering/context-audit.md:3 — used here
- `Observed failures` — evals/fixtures/context-engineering/context-audit.md:8 — defined here
- `Vitest` — evals/fixtures/context-engineering/context-audit.md:11 — used here
- `Jest` — evals/fixtures/context-engineering/context-audit.md:11 — used here
- `Current task` — evals/fixtures/context-engineering/context-audit.md:15 — defined here

## Structure
- `# Session context audit` — evals/fixtures/context-engineering/context-audit.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
A concise 16-line diagnostic brief exemplifying context stuffing pitfalls: 1,800 archival files and stale transcripts cause model attention drift and convention amnesia.

## Context cost
653 bytes, ~140 tokens.
