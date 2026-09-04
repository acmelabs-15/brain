---
package: addy
path: evals/cases/security-and-hardening.json
type: config
bytes: 1311
unit: inv-addy-6
memo_inputs:
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/security-and-hardening.json

## Purpose — required, verbatim
> "Harden an endpoint that accepts a user-supplied webhook URL and fetches it server-side." — evals/cases/security-and-hardening.json:32 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubric expectations for the `security-and-hardening` skill in the evaluation test harness. Solves the problem of ensuring engineering agents conduct systematic threat modeling and boundary hardening by testing whether requests for vulnerability audits, OWASP Top 10 compliance, and webhook endpoint hardening trigger the skill (top_k <= 3) while code variable renaming and release tagging route away to their respective owners. Evaluates responses on identifying trust boundaries prior to proposing controls, enforcing comprehensive SSRF mitigations that block private and reserved IP ranges (not just scheme checks), validating input at boundaries, and preventing secret leaks in logs and error responses.

## Phase — required
none

## Inputs — required
- Evaluation fixture directory `security-and-hardening` referenced in `files` list (evals/cases/security-and-hardening.json:35)
- Positive trigger prompts for audit, OWASP top ten, and webhook hardening (evals/cases/security-and-hardening.json:6, 10, 14)
- Negative trigger prompts routing to `code-simplification` and `git-workflow-and-versioning` (evals/cases/security-and-hardening.json:20, 24)
- Behavioral evaluation prompt on hardening an endpoint (evals/cases/security-and-hardening.json:32)

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading result evaluated by `scripts/run-evals.js` against expectations (evals/cases/security-and-hardening.json:38-41)

## Invokes — required
- skill code-simplification — evals/cases/security-and-hardening.json:21
- skill git-workflow-and-versioning — evals/cases/security-and-hardening.json:25
- file security-and-hardening — evals/cases/security-and-hardening.json:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `security-and-hardening` — evals/cases/security-and-hardening.json:2 — used here
- `top_k` — evals/cases/security-and-hardening.json:7 — used here
- `OWASP top ten` — evals/cases/security-and-hardening.json:10 — used here
- `code-simplification` — evals/cases/security-and-hardening.json:21 — used here
- `git-workflow-and-versioning` — evals/cases/security-and-hardening.json:25 — used here
- `threat-modeled hardening` — evals/cases/security-and-hardening.json:33 — used here
- `trust boundaries` — evals/cases/security-and-hardening.json:38 — used here
- `SSRF protections` — evals/cases/security-and-hardening.json:39 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-45)
  - `evals[0].id` (line 31)
  - `evals[0].prompt` (line 32)
  - `evals[0].expected_output` (line 33)
  - `evals[0].files` (lines 34-36)
  - `evals[0].expectations` (lines 37-42)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard execution evaluation case requiring fixture `evals/fixtures/security-and-hardening`. Enforces deep defense-in-depth requirements, such as requiring SSRF protection to validate resolved IP addresses against private and reserved address blocks.

## Context cost
1311 bytes (~328 tokens).
