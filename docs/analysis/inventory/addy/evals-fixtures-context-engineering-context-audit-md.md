---
package: addy
path: evals/fixtures/context-engineering/context-audit.md
type: doc
bytes: 653
unit: inv-addy-2
---

# evals/fixtures/context-engineering/context-audit.md

## Purpose — required, verbatim
> "The repository is a TypeScript service. The current agent session loads the entire `docs/archive/` directory (1,800 files), generated API output, six old incident transcripts, and every ADR on startup." — evals/fixtures/context-engineering/context-audit.md:3-5 (no explicit purpose statement)

## Design intent — required
Describes an agent session suffering from context pollution and degradation: loading 1,800 archived files, outdated transcripts, and bulk documentation while missing core guidelines (`CONTRIBUTING.md`, `current-architecture.md`), causing hallucinations (recommending JS instead of TS, Jest instead of Vitest, forgetting architectural patterns, becoming generic after long tool traces). Solves the problem of evaluating whether an engineering agent can audit context failure root causes and formulate a task-scoped context packing strategy rather than blaming the LLM.

## Phase — required
none

## Inputs — required
- Lists loaded archive assets and missing configuration files — `evals/fixtures/context-engineering/context-audit.md:3-6`
- Lists observed agent behavioral failures — `evals/fixtures/context-engineering/context-audit.md:8-13`
- Current task description — `evals/fixtures/context-engineering/context-audit.md:15`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/context-engineering.json` — evals/cases/context-engineering.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `Session context audit` — evals/fixtures/context-engineering/context-audit.md:1 — used here
- `TypeScript` — evals/fixtures/context-engineering/context-audit.md:3 — used here
- `ADR` — evals/fixtures/context-engineering/context-audit.md:5 — used here
- `CONTRIBUTING.md` — evals/fixtures/context-engineering/context-audit.md:6 — used here
- `Vitest` — evals/fixtures/context-engineering/context-audit.md:11 — used here
- `Jest` — evals/fixtures/context-engineering/context-audit.md:11 — used here
- `repositories` — evals/fixtures/context-engineering/context-audit.md:12 — used here

## Structure
- `# Session context audit` (line 1)
- Repository context state (lines 3-6)
- `Observed failures:` (lines 8-13)
- `Current task: add validation to one existing HTTP handler.` (line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Presents a classic context bloat failure case with clear symptoms (tool trace pollution, conflicting obsolete context, wrong tooling recommendations) to evaluate context engineering triage and pruning.

## Context cost
653 bytes (approx. 163 tokens).
