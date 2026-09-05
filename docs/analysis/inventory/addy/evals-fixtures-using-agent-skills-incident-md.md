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
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/using-agent-skills/incident.md

## Purpose — required, verbatim
> "The login page began returning HTTP 500 after yesterday's deployment. The request reaches the authentication callback, then fails before a session cookie is written." — evals/fixtures/using-agent-skills/incident.md:3-5
(no explicit purpose statement)

## Design intent — required
Provides an incident description fixture for evaluating agent routing in the `using-agent-skills` meta-skill. It outlines an operational production regression (HTTP 500 after deploy during auth callback before session cookie creation) where the user asks for immediate debugging and restoration rather than architectural redesign. In behavioral testing, it provides the scenario to verify that the agent routes correctly through the decision tree to debugging/error recovery while respecting core operating constraints.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Login regression report` — evals/fixtures/using-agent-skills/incident.md:1 — defined here
- `HTTP 500` — evals/fixtures/using-agent-skills/incident.md:3 — used here
- `authentication callback` — evals/fixtures/using-agent-skills/incident.md:4 — used here

## Structure
- # Login regression report — evals/fixtures/using-agent-skills/incident.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · evals/fixtures/using-agent-skills/incident.md:1: Fixture file exists under `evals/fixtures/using-agent-skills/` but is not referenced by file path in `evals/cases/using-agent-skills.json` (`files` contains `"using-agent-skills"` without an explicit file path).

## Observations
Concise incident scenario illustrating a real-world debugging context where the user explicitly requests troubleshooting rather than a redesign: `"The user asked for help getting login working again, not for a new authentication design."` (evals/fixtures/using-agent-skills/incident.md:5-6).

## Context cost
321 bytes, ~80 tokens.
