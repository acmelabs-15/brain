---
package: addy
name: Guard Against Regression
slug: guard-against-regression
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

# Guard Against Regression

## Definition — verbatim
> "Guard the metric the user actually feels, not every available number." — skills/performance-optimization/SKILL.md:405

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 403 | defined here | Establishes automated CI gates and production field monitoring to prevent performance degradation |

## Consumes
Established performance benchmarks, critical user-centric metrics (LCP, INP, P95 latency).

## Produces
Automated CI performance budget checks (bundlesize, Lighthouse CI) and real-user monitoring (RUM) alerts.

## When applied
As Step 5 of the performance optimization workflow, after verifying and keeping a performance fix.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Guard Against Regression establishes enduring safety mechanisms that protect verified performance improvements from future erosion. By coupling synthetic automated CI gates (such as bundle size ceilings and Lighthouse scores) with real-user monitoring alerts, addy ensures performance regressions are caught before or immediately upon deployment.
