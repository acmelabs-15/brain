---
package: addy
path: evals/cases/security-and-hardening.json
type: config
bytes: 1311
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/security-and-hardening.json

## Purpose — required, verbatim
> "security-and-hardening" — evals/cases/security-and-hardening.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `security-and-hardening`. It tests positive trigger routing for file upload audits, OWASP top 10 compliance checks, and webhook URL hardening, routes code refactoring and git release queries away, and executes a behavioral eval hardening a webhook endpoint to verify trust boundary identification, robust SSRF controls against private/reserved IPs, and input validation.

## Phase — required
addy:Review

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `code-simplification` and `git-workflow-and-versioning`, and an execution behavioral eval referencing fixture `security-and-hardening`.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace security implementations and test suites.

## Invokes — required
- skill security-and-hardening — evals/cases/security-and-hardening.json:2
- skill code-simplification — evals/cases/security-and-hardening.json:21
- skill git-workflow-and-versioning — evals/cases/security-and-hardening.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `OWASP top ten` — evals/cases/security-and-hardening.json:10 — used here
- `Trust boundaries` — evals/cases/security-and-hardening.json:38 — used here
- `SSRF` — evals/cases/security-and-hardening.json:39 — used here
- `Input validation` — evals/cases/security-and-hardening.json:40 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing behavioral evaluation cases with `id`, `prompt`, `expected_output`, `files`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The behavioral expectations explicitly test defense-in-depth: identifying trust boundaries prior to proposing controls, enforcing SSRF validation covering private/reserved IP blocks rather than superficial scheme checks, and ensuring secrets are omitted from logs and errors. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1311 bytes (approx. 328 tokens). Standalone config file loaded only during evaluation passes.
