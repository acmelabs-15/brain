---
package: addy
path: evals/fixtures/using-agent-skills/incident.md
type: doc
bytes: 321
unit: inv-addy-12
aliases: []
memo_inputs:
  - {path: evals/fixtures/using-agent-skills/incident.md, sha256: e0fa777f873d7616cd6bafa9ff3c9c35b70124ab8a8c05608f785bcab760111c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/using-agent-skills/incident.md

## Purpose — required, verbatim
> "The login page began returning HTTP 500 after yesterday's deployment. The" — evals/fixtures/using-agent-skills/incident.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation scenario fixture for `using-agent-skills` evaluation case 1 (`evals/cases/using-agent-skills.json`). Provides context for an incident report where a login endpoint returns HTTP 500 post-deployment without a diagnosed root cause. Specifically notes that the user requested assistance restoring working login rather than an architectural redesign. Tests whether an agent following `using-agent-skills` consults the routing decision tree to choose `debugging-and-error-recovery` (reproduce -> localize -> fix -> guard) rather than jumping prematurely to `api-and-interface-design` or `spec-driven-development`.

## Phase — required
none

## Inputs — required
Read by eval runners and agents during evaluation of `using-agent-skills`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Login regression report` — evals/fixtures/using-agent-skills/incident.md:1 — defined here
- `HTTP 500` — evals/fixtures/using-agent-skills/incident.md:3 — used here
- `authentication callback` — evals/fixtures/using-agent-skills/incident.md:4 — used here
- `session cookie` — evals/fixtures/using-agent-skills/incident.md:4 — used here

## Structure
- `# Login regression report` — evals/fixtures/using-agent-skills/incident.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Constrains agent scope to reproduction and repair rather than re-architecture: "The user asked for help" — evals/fixtures/using-agent-skills/incident.md:5.

## Context cost
321 bytes, ~70 tokens.
