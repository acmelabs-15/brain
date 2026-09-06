---
package: addy
name: N+1 fixes
slug: n-1-fixes
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# N+1 fixes

## Definition — verbatim
(used, not defined)
> "core web vitals targets, profiling, bundle analysis, n+1 fixes." — external/code-review-and-quality.md:12

## Also called — verbatim
> "when N+1 query patterns need fixing" — skills/performance-optimization/SKILL.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 12 | used here | Listed in performance-optimization search keywords and summary |
| external/security-and-hardening.md | 12 | used here | Cited in performance-optimization card in the Review skills grid |

## Consumes
Database execution traces, ORM query logs, backend latency profiles.

## Produces
Batched queries, eager-loading relations, joined queries, or dataloaders that replace iterative individual roundtrips.

## When applied
When code profiling or query logging reveals repeated database queries executed inside loops.

## Sub-concepts
none

## Part of
`performance-optimization`

## Implementation status
clean

## Design notes
N+1 fixes restructure iterative, per-record data fetches into efficient single batched queries or joins, eliminating excessive network roundtrips and database connection pool exhaustion.
