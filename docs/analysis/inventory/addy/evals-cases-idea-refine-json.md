---
package: addy
path: evals/cases/idea-refine.json
type: config
bytes: 1269
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/idea-refine.json

## Purpose — required, verbatim
> "skill_name": "idea-refine" — evals/cases/idea-refine.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and conversational evaluation criteria for the `idea-refine` skill in the Addy eval harness. Specifies 3 positive trigger prompts for ideation and plan stress-testing (top_k=3), 2 negative prompts routing to `ci-cd-and-automation` and `security-and-hardening`, and 1 dialogue-kind evaluation testing interactive sharpening questions, surfacing hidden assumptions, generating a one-pager with MVP scope, defining a "Not Doing" list, and constructively pushing back on weak ideas.

## Phase — required
none

## Inputs — required
User prompts containing vague ideas or requests to refine product concepts.

## Outputs — required
Dialogue evaluation transcripts and rubric checks produced by `scripts/run-evals.js` (including simulated one-pager and Not Doing list).

## Invokes — required
- skill idea-refine — evals/cases/idea-refine.json:2
- skill ci-cd-and-automation — evals/cases/idea-refine.json:21
- skill security-and-hardening — evals/cases/idea-refine.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/idea-refine.json:2 — used here
- `idea-refine` — evals/cases/idea-refine.json:2 — used here
- `trigger` — evals/cases/idea-refine.json:3 — defined here
- `positive` — evals/cases/idea-refine.json:4 — defined here
- `top_k` — evals/cases/idea-refine.json:7 — defined here
- `negative` — evals/cases/idea-refine.json:18 — defined here
- `owner` — evals/cases/idea-refine.json:21 — defined here
- `evals` — evals/cases/idea-refine.json:29 — defined here
- `kind` — evals/cases/idea-refine.json:32 — defined here
- `dialogue` — evals/cases/idea-refine.json:32 — defined here
- `expected_output` — evals/cases/idea-refine.json:34 — defined here
- `expectations` — evals/cases/idea-refine.json:35 — defined here
- `one-pager` — evals/cases/idea-refine.json:34 — used here
- `MVP scope` — evals/cases/idea-refine.json:34 — used here
- `Not Doing list` — evals/cases/idea-refine.json:34 — used here
- `Sharpening questions` — evals/cases/idea-refine.json:36 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, kind, prompt, expected_output, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures a conversational (`kind: dialogue`, line 32) evaluation case that omits file fixtures. Evaluates whether the agent refrains from premature convergence by asking sharpening questions first, surfacing hidden assumptions, producing a one-pager with an explicit MVP scope and Not Doing list, and pushing back against weak proposals instead of defaulting to sycophantic agreement.

## Context cost
1,269 bytes (~320 tokens). Loads nothing directly.
