---
package: addy
path: evals/fixtures/using-agent-skills/incident.md
type: doc
bytes: 321
unit: inv-addy-2
---

# evals/fixtures/using-agent-skills/incident.md

## Purpose — required, verbatim
> "The login page began returning HTTP 500 after yesterday's deployment. The\nrequest reaches the authentication callback, then fails before a session cookie\nis written. There is no confirmed root cause yet. The user asked for help\ngetting login working again, not for a new authentication design." — evals/fixtures/using-agent-skills/incident.md:3-6 (no explicit purpose statement)

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
- config `evals/cases/using-agent-skills.json` — evals/cases/using-agent-skills.json:33-35
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

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
