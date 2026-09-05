---
package: addy
path: evals/cases/git-workflow-and-versioning.json
type: config
bytes: 1272
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/git-workflow-and-versioning.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/git-workflow-and-versioning.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `git-workflow-and-versioning` skill. Without this file, changes across the skill catalog could allow versioning, conflict-resolution, and commit-splitting prompts to fail routing or drift into unrelated skills, and behavioral runs could silently omit the requirement for separate atomic commits and imperative messages.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/git-workflow-and-versioning/SKILL.md` and behavioral test fixtures located in `evals/fixtures/git-workflow-and-versioning/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `git-workflow-and-versioning` — evals/cases/git-workflow-and-versioning.json:2 — defined here
- `atomic commits` — evals/cases/git-workflow-and-versioning.json:6 — used here
- `merge conflict` — evals/cases/git-workflow-and-versioning.json:10 — used here
- `pull request` — evals/cases/git-workflow-and-versioning.json:18 — used here
- `test-driven-development` — evals/cases/git-workflow-and-versioning.json:28 — used here
- `refactor` — evals/cases/git-workflow-and-versioning.json:41 — used here
- `commit messages` — evals/cases/git-workflow-and-versioning.json:42 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifies 4 positive triggers with `top_k: 3`, 2 negative triggers (one owned by `test-driven-development`), and 1 execution eval backed by `evals/fixtures/git-workflow-and-versioning/` verifying that a mixed working tree is organized into independent atomic commits.

## Context cost
1272 bytes, ~318 tokens.
