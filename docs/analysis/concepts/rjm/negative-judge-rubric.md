---
package: rjm
name: negative judge rubric
slug: negative-judge-rubric
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# negative judge rubric

## Definition — verbatim
(used, not defined)

> "it selects the negative judge rubric, where a high score means the rule correctly stayed silent," — scripts/eval/examples/example-scenarios.json:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-scenarios.json | 38 | used here | Explains that negative scenario evaluation selects the negative judge rubric to score rule silence. |

## Consumes
Unrelated or negative test prompt scenarios and agent evaluation responses.

## Produces
Evaluation scores where high marks reflect proper agent and rule silence.

## When applied
Selected when evaluating scenarios with expected_gate set to skip-rule-not-applicable.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The negative judge rubric inverts scoring so that high marks are awarded when a rule or prompt appropriately stays silent on unrelated tasks, ensuring judges do not reward false-positive activations.
