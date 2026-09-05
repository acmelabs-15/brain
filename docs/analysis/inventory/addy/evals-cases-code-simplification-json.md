---
package: addy
path: evals/cases/code-simplification.json
type: config
bytes: 1330
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/code-simplification.json, sha256: 42c97aefd638fc08eb275c393ef5bcfaac056ac12cb2767fbb1db9fc94b6c84c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/code-simplification.json

## Purpose — required, verbatim
> "code-simplification" — evals/cases/code-simplification.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines trigger routing benchmarks and behavioral evaluation expectations for the `code-simplification` skill within `scripts/run-evals.js`. It tests positive intent mapping (simplifying overly clever code, reducing complexity for junior maintainability, and cleaning hard-to-follow working code), negative boundary routing (routing build breakage diagnosis to `debugging-and-error-recovery`), and execution quality (preserving behavior with passing tests, reducing rather than relocating complexity, and forbidding feature additions during cleanup). Without this evaluation suite, skill degradation toward accidental functional alteration or feature creep during refactoring cannot be caught.

## Phase — required
addy:Review

## Inputs — required
Target skill definition `skills/code-simplification/SKILL.md`, test prompts, and test fixture `evals/fixtures/code-simplification/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and execution verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill code-simplification — evals/cases/code-simplification.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/code-simplification.json:2 — defined here
`trigger` — evals/cases/code-simplification.json:3 — defined here
`positive` — evals/cases/code-simplification.json:4 — defined here
`negative` — evals/cases/code-simplification.json:18 — defined here
`evals` — evals/cases/code-simplification.json:28 — defined here
`expected_output` — evals/cases/code-simplification.json:32 — defined here
`expectations` — evals/cases/code-simplification.json:36 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (id: 1, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Negative triggers route build break diagnosis to `debugging-and-error-recovery` (line 24). Behavioral expectations enforce that complexity must be genuinely reduced rather than merely relocated (line 38) and that no new features may be introduced during simplification (line 40).

## Context cost
1330 bytes, ~333 tokens. Loads no external files.
