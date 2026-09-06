---
package: addy
path: evals/cases/git-workflow-and-versioning.json
type: config
bytes: 1272
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/git-workflow-and-versioning.json

## Purpose — required, verbatim
> "skill_name": "git-workflow-and-versioning" — evals/cases/git-workflow-and-versioning.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral assertions for the `git-workflow-and-versioning` skill in the Addy eval harness. Specifies 4 positive trigger prompts for atomic commit splitting, merge conflict resolution, release tagging/versioning, and PR creation (tested with top_k=3), 2 negative prompts (one UI distractor and one routing to `test-driven-development`), and 1 execution evaluation verifying that a mixed working tree is split into separate, atomic, independently green commits with imperative commit messages.

## Phase — required
none

## Inputs — required
User prompts requesting git history management, branch merging, or commit organization, and test fixture directory `evals/fixtures/git-workflow-and-versioning`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` (trigger ranking scores and commit structure assertions).

## Invokes — required
- skill git-workflow-and-versioning — evals/cases/git-workflow-and-versioning.json:2
- skill test-driven-development — evals/cases/git-workflow-and-versioning.json:28

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/git-workflow-and-versioning.json:2 — used here
- `git-workflow-and-versioning` — evals/cases/git-workflow-and-versioning.json:2 — used here
- `trigger` — evals/cases/git-workflow-and-versioning.json:3 — defined here
- `positive` — evals/cases/git-workflow-and-versioning.json:4 — defined here
- `top_k` — evals/cases/git-workflow-and-versioning.json:7 — defined here
- `negative` — evals/cases/git-workflow-and-versioning.json:22 — defined here
- `owner` — evals/cases/git-workflow-and-versioning.json:28 — defined here
- `evals` — evals/cases/git-workflow-and-versioning.json:32 — defined here
- `expected_output` — evals/cases/git-workflow-and-versioning.json:36 — defined here
- `expectations` — evals/cases/git-workflow-and-versioning.json:40 — defined here
- `atomic commits` — evals/cases/git-workflow-and-versioning.json:6 — used here
- `merge conflict` — evals/cases/git-workflow-and-versioning.json:10 — used here
- `pull request` — evals/cases/git-workflow-and-versioning.json:18 — used here
- `clean history` — evals/cases/git-workflow-and-versioning.json:35 — used here
- `independently green` — evals/cases/git-workflow-and-versioning.json:36 — used here
- `imperative` — evals/cases/git-workflow-and-versioning.json:42 — used here

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
Configures trigger routing (4 positive, 2 negative with negative trigger owner `test-driven-development` at line 28) and 1 execution eval testing clean git history generation: decomposing mixed refactor/fix/feature changes into separate atomic commits, writing imperative standalone messages, and ensuring every intermediate commit compiles and tests green.

## Context cost
1,272 bytes (~320 tokens). Loads nothing directly.
