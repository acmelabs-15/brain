---
package: addy
path: evals/fixtures/using-agent-skills/incident.md
type: doc
bytes: 321
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/using-agent-skills/incident.md, sha256: e0fa777f873d7616cd6bafa9ff3c9c35b70124ab8a8c05608f785bcab760111c}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/using-agent-skills/incident.md

## Purpose — required, verbatim
> "The login page began returning HTTP 500 after yesterday's deployment. The" — evals/fixtures/using-agent-skills/incident.md:3 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides an incident report scenario fixture for evaluating the meta-skill `using-agent-skills` (eval id: 1). It describes a production deployment regression where an authentication callback fails with HTTP 500, explicitly stating that the user needs immediate triage and error recovery rather than a redesign, testing whether the agent correctly routes to `debugging-and-error-recovery` based on structured decision criteria.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by eval execution harness for eval `id: 1` in `evals/cases/using-agent-skills.json:30-41`.

## Outputs — required
- none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Login regression report` — evals/fixtures/using-agent-skills/incident.md:1 — used here
- `HTTP 500` — evals/fixtures/using-agent-skills/incident.md:3 — used here
- `authentication callback` — evals/fixtures/using-agent-skills/incident.md:4 — used here
- `session cookie` — evals/fixtures/using-agent-skills/incident.md:4 — used here
- `root cause` — evals/fixtures/using-agent-skills/incident.md:5 — used here

## Structure
- `# Login regression report` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The report emphasizes that the user requested help fixing an existing regression without redesigning the system, which serves as an explicit discriminant in routing evaluations to ensure the meta-skill selects `debugging-and-error-recovery` over architectural or design skills.

## Context cost
321 bytes (~80 tokens) file size. Loaded as part of `evals/fixtures/using-agent-skills/` directory (321 bytes total).
