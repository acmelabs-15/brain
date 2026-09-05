---
package: addy
path: evals/cases/using-agent-skills.json
type: config
bytes: 1218
unit: inv-addy-8
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/using-agent-skills.json

## Purpose — required, verbatim
> "\"skill_name\": \"using-agent-skills\"," — evals/cases/using-agent-skills.json:2
(no explicit purpose statement)

## Design intent — required
Defines trigger benchmarks and evaluation criteria for the `using-agent-skills` meta-skill. It evaluates whether routing queries correctly activate the skill router while negative cases are dispatched to specific skills, and validates that an agent selects the correct workflow by following the meta-skill decision tree and explicitly surfacing assumptions rather than guessing.

## Phase — required
none

## Inputs — required
Trigger test prompts and evaluation specification:
- Positive triggers: prompts asking which skill applies or requesting task routing: `"Which skill should I use for this task?"` — evals/cases/using-agent-skills.json:6, `"How do I decide which workflow applies to this piece of work?"` — evals/cases/using-agent-skills.json:10, and `"Route this request to the right skill in the pack"` — evals/cases/using-agent-skills.json:14
- Negative triggers for `debugging-and-error-recovery` — evals/cases/using-agent-skills.json:21 and an accessibility prompt
- Eval prompt: `"A user asks: 'the login page is broken after yesterday's deploy'. Decide which skill applies and why."` — evals/cases/using-agent-skills.json:31

## Outputs — required
none

## Invokes — required
- skill using-agent-skills — evals/cases/using-agent-skills.json:2
- skill debugging-and-error-recovery — evals/cases/using-agent-skills.json:21

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `using-agent-skills` — evals/cases/using-agent-skills.json:2 — used here
- `debugging-and-error-recovery` — evals/cases/using-agent-skills.json:21 — used here
- `decision tree` — evals/cases/using-agent-skills.json:32 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The single evaluation case tests bug triaging: when presented with a regression prompt (`"the login page is broken after yesterday's deploy"`), the agent must arrive at `"Correct routing through the decision tree with the chosen skill and rationale"` (evals/cases/using-agent-skills.json:32), matching expectations that `"The chosen skill matches the decision tree in the meta-skill"` (evals/cases/using-agent-skills.json:37) and `"Core operating behaviors (assumptions surfaced) are respected"` (evals/cases/using-agent-skills.json:39).

## Context cost
1218 bytes, ~305 tokens.
