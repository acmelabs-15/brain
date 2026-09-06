---
package: addy
name: behavioral eval
slug: behavioral-eval
kind: technique
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# behavioral eval

## Definition — verbatim
> "at least 3 positive triggers, 2 negative triggers (with `owner` where possible), and 1 behavioral eval." — CONTRIBUTING.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 42 | defines | Defines the required behavioral evaluation component in every skill eval case, testing real execution or dialogue turns. |

## Consumes
Realistic user scenario prompt, test fixtures, and explicit grading rubrics.

## Produces
Evaluated execution traces scoring how well the agent adheres to workflow steps, tools, and constraints.

## When applied
During Tier 3 opt-in evaluation runs via `node scripts/run-evals.js --behavioral <skill>`.

## Sub-concepts
execution-evals, dialogue-evals

## Part of
eval-case, three-tier-eval-framework

## Implementation status
clean

## Design notes
Behavioral evals verify that an AI agent genuinely executes the prescribed methodology of a skill rather than just knowing when to load it. By running the agent in a sandboxed headless session and grading the resulting actions and artifacts against explicit criteria, behavioral evals ensure high process adherence.
