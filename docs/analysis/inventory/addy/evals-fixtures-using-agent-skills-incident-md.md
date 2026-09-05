---
package: addy
path: evals/fixtures/using-agent-skills/incident.md
type: doc
bytes: 321
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/using-agent-skills/incident.md, sha256: e0fa777f873d7616cd6bafa9ff3c9c35b70124ab8a8c05608f785bcab760111c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/using-agent-skills/incident.md

## Purpose — required, verbatim
> "The login page began returning HTTP 500 after yesterday's deployment." — evals/fixtures/using-agent-skills/incident.md:3

## Design intent — required
An incident report fixture designed for behavioral evaluation of the `using-agent-skills` meta-skill. It presents a realistic troubleshooting scenario: a production HTTP 500 regression in the authentication callback where the user explicitly requests an emergency fix rather than architectural redesign. Without this fixture, the eval harness would lack a concrete, constraint-loaded incident prompt to test whether an agent selects and applies the appropriate operational skills (e.g., systematic debugging or root-cause analysis) under incident pressure while respecting scope boundaries.

## Phase — required
addy:Debug

## Inputs — required
Describes an incident scenario: HTTP 500 error in login callback after deployment, failure prior to session cookie generation, no confirmed root cause.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config using-agent-skills — evals/cases/using-agent-skills.json:34

## Concepts named — required, verbatim
- `Login regression report` — evals/fixtures/using-agent-skills/incident.md:1 — defined here
- `HTTP 500` — evals/fixtures/using-agent-skills/incident.md:3 — used here
- `authentication callback` — evals/fixtures/using-agent-skills/incident.md:4 — used here
- `session cookie` — evals/fixtures/using-agent-skills/incident.md:4 — used here
- `root cause` — evals/fixtures/using-agent-skills/incident.md:5 — used here

## Structure
- `# Login regression report` — evals/fixtures/using-agent-skills/incident.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
This fixture tests agent discipline when responding to production regressions under pressure: specifically, the prompt notes that "The user asked for help getting login working again, not for a new authentication design" (line 5-6), constraining the agent to tactical debugging/triage rather than unrequested architectural redesign.

## Context cost
321 bytes. Approximately 75 tokens.
