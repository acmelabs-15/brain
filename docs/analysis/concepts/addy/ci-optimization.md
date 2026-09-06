---
package: addy
name: CI Optimization
slug: ci-optimization
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CI Optimization

## Definition — verbatim
> "When the pipeline exceeds 10 minutes, apply these strategies in order of impact:" — skills/ci-cd-and-automation/SKILL.md:311

## Also called — verbatim
`CI Optimization` — skills/ci-cd-and-automation/SKILL.md:309

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 309 | defined here | Section heading outlining ordered optimization strategies when CI pipeline exceeds 10 minutes |

## Consumes
CI execution duration metrics, workflow configuration files, and job dependency graphs.

## Produces
Optimized CI pipeline executing within the 10-minute threshold using caching, parallel jobs, path filters, and runner scaling.

## When applied
Whenever cumulative CI pipeline execution time crosses the 10-minute threshold.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, CI Optimization sets an explicit 10-minute ceiling for pipeline runtime and prescribes a prioritized sequence of remedies: dependency caching, parallel jobs, path filters, matrix test sharding, test suite pruning, and larger compute runners. It preserves fast feedback loops so developers and agents maintain velocity.
