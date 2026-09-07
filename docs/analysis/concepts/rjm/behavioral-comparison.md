---
package: rjm
name: behavioral comparison
slug: behavioral-comparison
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# behavioral comparison

## Definition — verbatim
> "Run ADR-057 behavioral comparison via eval-prompt-change.py." — scripts/eval/eval-suite.py:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-suite.py | 272 | defined here | Function docstring defines the ADR-057 behavioral comparison technique executed via eval-prompt-change.py. |

## Consumes
Prompt path, benchmark scenarios path, base ref git state, and target evaluation model.

## Produces
Comparative pass/fail verdict, activation scores, and parsed JSON results from eval-prompt-change.py.

## When applied
Executed when prompt modifications are detected to evaluate behavioral regression against benchmark scenarios.

## Sub-concepts
none

## Part of
eval-suite

## Implementation status
defects: missing-path

## Design notes
An empirical testing technique governed by ADR-057 that compares model responses generated with modified prompts against responses generated from a base ref across standardized scenarios. By measuring quantitative behavioral differences, it ensures prompt revisions improve intended behaviors without causing behavioral regressions in agent execution.
