---
package: addy
name: N+1 query
slug: n-1-query
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# N+1 query

## Definition — verbatim
(used, not defined)
> "Optimize this N+1 query" — evals/cases/performance-optimization.json:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 6 | used here | Used in trigger prompt to activate the performance-optimization skill. |

## Consumes
Data access layer implementation, ORM query logs, or endpoint profiling traces.

## Produces
Batched queries, eager-loading joins, or subqueries replacing sequential roundtrips.

## When applied
Identified during performance profiling or code review when rendering collections of related records.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
The `N+1 query` pattern is a pervasive database performance defect where an application executes one query to fetch parent records followed by N individual queries to fetch related child records. Addy highlights this anti-pattern as a primary trigger for profiling and optimization, mandating batch loading or eager joins. Without detecting and fixing N+1 queries, backend endpoints experience severe, non-linear latency degradation as data size scales.
