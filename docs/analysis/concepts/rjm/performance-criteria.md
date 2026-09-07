---
package: rjm
name: Performance Criteria
slug: performance-criteria
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Performance Criteria

## Definition — verbatim
> "### Performance Criteria" — docs/codeql-rollout-checklist.md:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 312 | defined here | Success criteria table specifying quantitative execution budgets and false positive thresholds. |

## Consumes
Timing benchmarks from CI/CD runs, local full scans, quick scans, and cache operations.

## Produces
Quantitative evaluation of scan performance against operational ceilings.

## When applied
During post-rollout evaluation to verify analysis workloads meet SLA targets.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Performance Criteria specifies quantitative performance limits that prevent CodeQL analysis from degrading developer throughput. It establishes hard targets: CI analysis under 300 seconds, local full and quick scans under 60 seconds, faster execution with cached databases, and a false positive rate strictly under 20%.
