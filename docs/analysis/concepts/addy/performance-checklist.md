---
package: addy
name: Performance Checklist
slug: performance-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Performance Checklist

## Definition — verbatim
> "Quick reference checklist for web application performance. Use alongside the `performance-optimization` skill." — references/performance-checklist.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 1 | defines | Root reference document containing targets, checklists, and diagnostic workflows for full-stack web performance |

## Consumes
Web application source code, assets, database queries, and deployment configuration

## Produces
Audit checklist covering Core Web Vitals, TTFB, frontend assets, database indexing, caching strategies, and anti-patterns

## When applied
When optimizing web application performance, diagnosing regressions, or auditing code during review or launch phases

## Sub-concepts
core-web-vitals-targets, ttfb-diagnosis, frontend-checklist, backend-checklist, caching-strategies, measurement-commands, common-anti-patterns

## Part of
performance-optimization

## Implementation status
clean

## Design notes
A comprehensive engineering reference checklist complementing the `performance-optimization` skill. It provides actionable, quantitative guidance for optimizing web performance across the stack, preventing regressions before release.
