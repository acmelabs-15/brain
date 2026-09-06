---
package: addy
name: EXPLAIN ANALYZE
slug: explain-analyze
kind: technique
package_phase: addy:Review
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# EXPLAIN ANALYZE

## Definition — verbatim
> "`EXPLAIN ANALYZE` captured **before** the fix, not just after — it is the baseline" — references/performance-checklist.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 97 | used here | Backend database query checklist rule requiring execution plan baselines before and after indexing |
| skills/performance-optimization/SKILL.md | 157 | used here | Code example demonstrating query execution profiling to identify missing indexes or sequence scans |

## Consumes
SQL query string and live database schema statistics

## Produces
Query execution plan report detailing actual runtime costs, node types (Seq Scan, Index Scan, Sort), and row count estimates vs actuals

## When applied
Before adding, altering, or removing database indexes, and when diagnosing slow SQL queries

## Sub-concepts
none

## Part of
backend-checklist

## Implementation status
clean

## Design notes
The definitive SQL command for measuring real query execution plans and timing. Addy enforces capturing `EXPLAIN ANALYZE` before proposing database index changes, and strictly reverting indexes that do not alter the query execution plan.
