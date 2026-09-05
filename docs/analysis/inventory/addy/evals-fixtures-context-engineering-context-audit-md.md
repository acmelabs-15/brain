---
package: addy
path: evals/fixtures/context-engineering/context-audit.md
type: doc
bytes: 653
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/context-engineering/context-audit.md, sha256: 48130238edcf4ee51632c173de6b4bb53868ba935c4f70bceae7913490e7dd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/context-engineering/context-audit.md

## Purpose — required, verbatim
> "The repository is a TypeScript service. The current agent session loads the entire `docs/archive/` directory (1,800 files), generated API output, six old incident transcripts, and every ADR on startup. It does not load the active `CONTRIBUTING.md` or `docs/current-architecture.md`." — evals/fixtures/context-engineering/context-audit.md:3-6
(no explicit purpose statement)

## Design intent — required
Serves as an evaluation scenario fixture for the `context-engineering` skill. It describes an agent session suffering from context dilution, bloat, and stale reference loading (1,800 archived files, API output, incident transcripts, ADRs) while missing critical modern conventions (`CONTRIBUTING.md`, `docs/current-architecture.md`). This benchmark tests whether an agent can diagnose context pollution, identify causes of hallucination/drift (e.g. suggesting JavaScript instead of TypeScript, Jest instead of Vitest), and prescribe a minimal, task-scoped context strategy.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config context-engineering — evals/cases/context-engineering.json:35

## Concepts named — required, verbatim
- `Session context audit` — evals/fixtures/context-engineering/context-audit.md:1 — defined here
- `docs/archive/` — evals/fixtures/context-engineering/context-audit.md:4 — used here
- `CONTRIBUTING.md` — evals/fixtures/context-engineering/context-audit.md:6 — used here
- `docs/current-architecture.md` — evals/fixtures/context-engineering/context-audit.md:6 — used here

## Structure
- `# Session context audit` — evals/fixtures/context-engineering/context-audit.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Outlines 4 observed failure modes stemming from excessive context (1,800 files in `docs/archive/`): proposing JavaScript instead of TypeScript, proposing Jest instead of Vitest, forgetting repository architectural boundaries, and degraded answers after long tool traces.

## Context cost
653 bytes, ~163 tokens.
