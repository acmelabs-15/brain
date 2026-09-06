---
package: addy
name: Keep or Revert
slug: keep-or-revert
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Keep or Revert

## Definition — verbatim
> "A fix is a hypothesis until you re-measure. This step decides whether it survives." — skills/performance-optimization/SKILL.md:370

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 368 | defined here | Defines the decision gate evaluating optimization experiments against baseline measurements and test suite results |

## Consumes
Baseline performance measurements, post-optimization benchmarks, automated test suite results.

## Produces
A binary decision to commit the optimization (with before/after metrics) or revert the code changes and log the experiment in an optimization ledger.

## When applied
Immediately following the implementation of any performance optimization attempt during Step 4 of the workflow.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Keep or Revert is a strict verification gate in addy's performance workflow that prevents codebase complexity accumulation. Optimizations that fail to exceed measurement noise thresholds, degrade secondary metrics, or break test suites are reverted immediately rather than retained, ensuring only proven improvements survive in the codebase.
