---
package: addy
name: Unbounded Data Fetching
slug: unbounded-data-fetching
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

# Unbounded Data Fetching

## Definition — verbatim
(used, not defined)

> "// BAD: Fetching all records" — skills/performance-optimization/SKILL.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 138 | defined here | Documented as a data access anti-pattern where unpaginated queries retrieve entire datasets |

## Consumes
Database query definitions without limit or pagination clauses.

## Produces
Paginated query structures with bounded result sets (`take`, `skip`, or cursor-based pagination).

## When applied
When reviewing database data access layers that fetch records without pagination bounds.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Unbounded data fetching occurs when queries retrieve entire database tables without pagination or limit constraints, leading to memory bloat, high database load, and network bottlenecks as data sets grow. Addy mandates paginated access patterns with explicit limits to protect service availability and maintain predictable query performance.
