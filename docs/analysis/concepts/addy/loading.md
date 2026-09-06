---
package: addy
name: Loading
slug: loading
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Loading

## Definition — verbatim
(used, not defined)
> "### 2. Loading" — agents/web-performance-auditor.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/web-performance-auditor.md | 69 | defines | Section heading structuring audit criteria for TTFB, resource hints, font optimization, bundle sizes, and script loading strategies. |

## Consumes
HTML head tags, server response configurations, font declarations, and bundle size profiles.

## Produces
Audit findings on resource delivery, critical path bottlenecks, and loading latency.

## When applied
Applied when evaluating web application load performance and initial asset transfer.

## Sub-concepts
none

## Part of
web-performance-audit

## Implementation status
clean

## Design notes
Loading defines the performance audit category dedicated to critical path resource delivery, covering TTFB, bundle budgets, font subsetting, and resource hints.
