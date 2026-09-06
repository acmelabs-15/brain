---
package: addy
path: evals/cases/using-agent-skills.json
type: config
bytes: 1218
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/using-agent-skills.json

## Purpose — required, verbatim
> "skill_name": "using-agent-skills" — evals/cases/using-agent-skills.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger evaluation prompts and a dialogue-shaped behavioral test case for the `using-agent-skills` meta-skill in Addy's eval harness. Tests whether an agent appropriately navigates the meta-skill's decision tree to route ambiguous user tasks (such as a broken login page after deployment) to the correct domain skill (`debugging-and-error-recovery`) rather than guessing, while adhering to core operating principles (surfacing unverified assumptions).

## Phase — required
none

## Inputs — required
Prompts requesting skill selection, workflow routing, and incident response routing at evals/cases/using-agent-skills.json:6, 10, 14, 31.

## Outputs — required
Evaluation verdicts and ranking metrics produced by `scripts/run-evals.js` against expectations at evals/cases/using-agent-skills.json:36-40.

## Invokes — required
- skill using-agent-skills — evals/cases/using-agent-skills.json:2
- skill debugging-and-error-recovery — evals/cases/using-agent-skills.json:21

## Invoked by — required
"using-agent-skills" — evals/cases/test-driven-development.json:25

## Concepts named — required, verbatim
- `skill_name` — evals/cases/using-agent-skills.json:2 — used here
- `using-agent-skills` — evals/cases/using-agent-skills.json:2 — used here
- `trigger` — evals/cases/using-agent-skills.json:3 — defined here
- `positive` — evals/cases/using-agent-skills.json:4 — defined here
- `top_k` — evals/cases/using-agent-skills.json:7 — defined here
- `negative` — evals/cases/using-agent-skills.json:18 — defined here
- `owner` — evals/cases/using-agent-skills.json:21 — defined here
- `evals` — evals/cases/using-agent-skills.json:28 — defined here
- `files` — evals/cases/using-agent-skills.json:33 — defined here
- `expectations` — evals/cases/using-agent-skills.json:36 — defined here

## Structure
JSON top-level keys:
- skill_name — evals/cases/using-agent-skills.json:2
- trigger (positive, negative) — evals/cases/using-agent-skills.json:3-27
- evals (id, prompt, expected_output, files, expectations) — evals/cases/using-agent-skills.json:28-42

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · line 24: negative trigger entry `{"prompt": "Make the modal accessible for keyboard users"}` omits the `"owner"` property present on line 21, though `scripts/run-evals.js` permits negative triggers without an explicit owner.

## Observations
Targets fixture directory `using-agent-skills` at line 34 (which contains `incident.md`). Focuses on meta-level routing verification: ensuring the agent identifies the appropriate domain skill using documented routing criteria instead of arbitrary heuristic selection.

## Context cost
1218 bytes, ~300 tokens. Loads `evals/fixtures/using-agent-skills/incident.md` (321 bytes) during behavioral eval execution.
