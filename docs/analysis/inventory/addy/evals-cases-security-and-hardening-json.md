---
package: addy
path: evals/cases/security-and-hardening.json
type: config
bytes: 1311
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/security-and-hardening.json

## Purpose — required, verbatim
> "skill_name": "security-and-hardening" — evals/cases/security-and-hardening.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and execution assertions for the `security-and-hardening` skill in the Addy eval harness. Specifies 3 positive trigger prompts covering vulnerability auditing, OWASP Top 10 defenses, and endpoint hardening (top_k=3), 2 negative prompts routing to `code-simplification` and `git-workflow-and-versioning`, and 1 execution evaluation testing threat-modeled SSRF defense (identifying trust boundaries, blocking private/reserved IP addresses, boundary input validation, and preventing secret exposure in logs/errors).

## Phase — required
none

## Inputs — required
User prompts requesting security reviews or endpoint hardening, and test fixture directory `evals/fixtures/security-and-hardening`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` (trigger ranking scores and threat modeling / SSRF mitigation assertions).

## Invokes — required
- skill security-and-hardening — evals/cases/security-and-hardening.json:2
- skill code-simplification — evals/cases/security-and-hardening.json:21
- skill git-workflow-and-versioning — evals/cases/security-and-hardening.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/security-and-hardening.json:2 — used here
- `security-and-hardening` — evals/cases/security-and-hardening.json:2 — used here
- `trigger` — evals/cases/security-and-hardening.json:3 — defined here
- `positive` — evals/cases/security-and-hardening.json:4 — defined here
- `top_k` — evals/cases/security-and-hardening.json:7 — defined here
- `negative` — evals/cases/security-and-hardening.json:18 — defined here
- `owner` — evals/cases/security-and-hardening.json:21 — defined here
- `evals` — evals/cases/security-and-hardening.json:29 — defined here
- `expected_output` — evals/cases/security-and-hardening.json:33 — defined here
- `expectations` — evals/cases/security-and-hardening.json:37 — defined here
- `OWASP top ten` — evals/cases/security-and-hardening.json:10 — used here
- `Threat-modeled hardening` — evals/cases/security-and-hardening.json:33 — used here
- `Trust boundaries` — evals/cases/security-and-hardening.json:38 — used here
- `SSRF` — evals/cases/security-and-hardening.json:39 — used here
- `Input validation` — evals/cases/security-and-hardening.json:40 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures trigger classification evals with 2 negative owner targets (`code-simplification` and `git-workflow-and-versioning`). The execution eval tests SSRF defenses on webhook endpoints, asserting four specific security behaviors: establishing trust boundaries prior to controls, checking for private/reserved IP ranges beyond simple URL scheme validation, validating inputs at the boundary, and ensuring no sensitive tokens or secrets leak into logs or error responses.

## Context cost
1,311 bytes (~330 tokens). Loads nothing directly.
