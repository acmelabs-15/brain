---
package: addy
path: evals/cases/idea-refine.json
type: config
bytes: 1269
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/idea-refine.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/idea-refine.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 dialogue evaluation assertions for the `idea-refine` skill. Without this file, fuzzy brainstorm and product-idea prompts could misroute to hardening or automation skills, and behavioral evaluations would lack criteria checking that the agent asks sharpening questions before converging, surfaces hidden assumptions, and constructs a concrete one-pager with an explicit Not Doing list.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/idea-refine/SKILL.md`. Does not consume file fixtures because it is configured with `kind: "dialogue"`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `idea-refine` — evals/cases/idea-refine.json:2 — defined here
- `ci-cd-and-automation` — evals/cases/idea-refine.json:21 — used here
- `security-and-hardening` — evals/cases/idea-refine.json:25 — used here
- `dialogue` — evals/cases/idea-refine.json:32 — used here
- `one-pager` — evals/cases/idea-refine.json:34 — used here
- `MVP scope` — evals/cases/idea-refine.json:34 — used here
- `Not Doing list` — evals/cases/idea-refine.json:34 — used here
- `sharpening questions` — evals/cases/idea-refine.json:36 — used here
- `hidden assumptions` — evals/cases/idea-refine.json:37 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configured as `kind: "dialogue"` where the conversation transcript itself is evaluated as the artifact, dispensing with fixture directories under `evals/fixtures/`. Contains 3 positive triggers with `top_k: 3` and 2 negative triggers owned by `ci-cd-and-automation` and `security-and-hardening`.

## Context cost
1269 bytes, ~317 tokens.
