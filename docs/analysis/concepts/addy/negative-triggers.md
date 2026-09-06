---
package: addy
name: negative triggers
slug: negative-triggers
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

# negative triggers

## Definition — verbatim
> "at least 3 positive triggers, 2 negative triggers (with `owner` where possible), and 1 behavioral eval." — CONTRIBUTING.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 42 | defines | Evaluation prompts designed to test skill boundaries and ensure a skill is not incorrectly activated. |

## Consumes
Adjacent or competing domain prompts that should route to other skills.

## Produces
Negative assertions confirming that a skill does not rank rank-1 for out-of-scope prompts.

## When applied
When defining the routing test suite in `evals/cases/<skill>.json`.

## Sub-concepts
none

## Part of
eval-case, trigger-evals

## Implementation status
clean

## Design notes
Negative triggers define boundary test cases that must not trigger a given skill. CI checks evaluate negative prompts across the catalog to verify that the target skill is never ranked first, preventing semantic description collisions and false-positive routing across adjacent skills.
