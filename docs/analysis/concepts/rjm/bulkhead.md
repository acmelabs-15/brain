---
package: rjm
name: bulkhead
slug: bulkhead
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# bulkhead

## Definition — verbatim
(used, not defined)

> "`circuit breaker`, `bulkhead`, and production resilience in .py, .cs, .ts, .tsx, .js, .ps1, .sql, and service design docs." — .claude/skills/software-engineering-library/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/SKILL.md | 4 | used here | Listed in skill description as a production resilience pattern trigger for software engineering references. |

## Consumes
Resource allocations, service connection pools, execution queues, and worker threads.

## Produces
Partitioned resource pools preventing cascading failures across service boundaries.

## When applied
Applied when designing resilient systems, remote service integrations, and concurrent workloads requiring fault containment.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
A stability and resilience pattern from Michael Nygard's *Release It!* that partitions system capacities to prevent a failure in one subsystem from taking down the entire service.
