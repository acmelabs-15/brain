---
package: addy
name: positive triggers
slug: positive-triggers
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

# positive triggers

## Definition — verbatim
> "at least 3 positive triggers, 2 negative triggers (with `owner` where possible), and 1 behavioral eval." — CONTRIBUTING.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 42 | defines | Evaluates that test prompts intended for a skill rank within the top_k routing candidates in CI. |

## Consumes
User prompts representing intended use cases for a skill.

## Produces
Benchmark test cases asserting that skill auto-discovery retrieves the correct skill.

## When applied
When defining the trigger evaluation test cases in `evals/cases/<skill>.json`.

## Sub-concepts
none

## Part of
eval-case, trigger-evals

## Implementation status
clean

## Design notes
Positive triggers are benchmark evaluation prompts that represent canonical tasks intended to activate a specific skill. Tier 2 CI evals score these prompts against all skill descriptions in the repository and assert that the target skill is ranked in the top 3 (top_k), guaranteeing reliable automatic routing.
