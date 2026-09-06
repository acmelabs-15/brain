---
package: addy
name: Connection Pool Exhaustion
slug: connection-pool-exhaustion
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

# Connection Pool Exhaustion

## Definition — verbatim
> "The signature is distinctive: **every** endpoint slows at once, the slow time is spent waiting for a connection rather than executing, and the database reports mostly idle sessions." — skills/performance-optimization/SKILL.md:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 187 | defined here | Identified as a database infrastructure bottleneck characterized by system-wide connection wait times |

## Consumes
Database connection pool configuration, serverless deployment topography, client request concurrency.

## Produces
Properly sized per-process connection pool limits, connection timeouts, or multiplexing proxies (pgbouncer, RDS Proxy).

## When applied
When multiple endpoints experience concurrent latency spikes waiting for idle database connections.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Connection pool exhaustion occurs when application instances allocate too many concurrent connections or instantiate unshared pools, exceeding the database server's connection ceiling and causing request queuing. Addy instructs agents to bound pool size per process, fail fast with connection timeouts, and introduce multiplexing connection proxies rather than inflating pool limits.
