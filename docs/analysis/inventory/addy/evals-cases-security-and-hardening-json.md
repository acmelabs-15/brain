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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/security-and-hardening.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/security-and-hardening.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `security-and-hardening` skill. Without this file, security review and hardening requests could misroute to simplification or versioning workflows, and behavioral runs could fail to enforce rigorous trust-boundary definition, private-IP SSRF protection, boundary input validation, and credential leak prevention.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/security-and-hardening/SKILL.md` and behavioral test fixtures located in `evals/fixtures/security-and-hardening/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `security-and-hardening` — evals/cases/security-and-hardening.json:2 — defined here
- `OWASP top ten` — evals/cases/security-and-hardening.json:10 — used here
- `webhook` — evals/cases/security-and-hardening.json:14 — used here
- `code-simplification` — evals/cases/security-and-hardening.json:21 — used here
- `git-workflow-and-versioning` — evals/cases/security-and-hardening.json:25 — used here
- `threat-modeled` — evals/cases/security-and-hardening.json:33 — used here
- `allowlisting` — evals/cases/security-and-hardening.json:33 — used here
- `private-IP blocking` — evals/cases/security-and-hardening.json:33 — used here
- `trust boundaries` — evals/cases/security-and-hardening.json:38 — used here
- `SSRF` — evals/cases/security-and-hardening.json:39 — used here
- `input validation` — evals/cases/security-and-hardening.json:40 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains 3 positive triggers with `top_k: 3`, 2 negative triggers owned by `code-simplification` and `git-workflow-and-versioning`, and 1 execution eval backed by `evals/fixtures/security-and-hardening/` testing server-side webhook URL fetching hardening against SSRF and private-network abuse.

## Context cost
1311 bytes, ~328 tokens.
