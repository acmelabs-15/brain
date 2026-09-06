---
package: addy
name: N+1 Queries
slug: n-1-queries
kind: pattern
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

# N+1 Queries

## Definition — verbatim
(used, not defined)

> "// BAD: N+1 — one query per task for the owner" — skills/performance-optimization/SKILL.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 123 | defined here | Highlighted as a common backend database anti-pattern resolved via batching or joins |

## Consumes
Database queries executed in iterative loops over collections.

## Produces
Optimized batch queries using joins, eager includes, or dataloader patterns.

## When applied
When backend profiling or database execution logs indicate repeated queries executing for each item in a collection.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
In addy's performance review guidance, N+1 queries represent a primary backend database anti-pattern where an initial query fetches N entities and subsequently executes N individual queries to fetch associated relations. The pattern advocates replacing iterative lookups with single joined queries or explicit relation includes to minimize round-trip database latency.
