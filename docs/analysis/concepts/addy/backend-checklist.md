---
package: addy
name: Backend Checklist
slug: backend-checklist
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

# Backend Checklist

## Definition — verbatim
(used, not defined)
> "## Backend Checklist" — references/performance-checklist.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 10 | defines | Section heading and checklist detailing server-side performance audits covering databases, query plans, indexing, connection pooling, APIs, and infrastructure |

## Consumes
Server-side code, database schemas, query execution plans, connection pool configs, and API handlers

## Produces
Remediation items for server latency, database bottlenecks, and throughput limits

## When applied
During backend architecture reviews, database query optimization, or service scaling reviews

## Sub-concepts
none

## Part of
performance-checklist

## Implementation status
clean

## Design notes
A server-side performance checklist establishing concrete verification standards for databases (query planning, indexes, pool sizing), API response SLAs (< 200ms p95), and infrastructure caching.
