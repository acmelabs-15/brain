---
package: rjm
name: Shared resource exhaustion
slug: shared-resource-exhaustion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shared resource exhaustion

## Definition — verbatim
> "**Shared resource exhaustion**: one tenant or one bad request consumes a pool everyone depends on; no bulkhead." — .claude/skills/software-engineering-library/references/release-it.md:223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 223 | defined here | Defined as a stability anti-pattern where a single tenant or request monopolizes an unpartitioned resource pool needed by all. |

## Consumes
Global thread pools, unpartitioned database connection pools, shared agent worker slots, and common memory limits.

## Produces
Starvation of unrelated healthy workloads and platform-wide contention.

## When applied
Evaluated during architectural reviews and performance audits of shared resource infrastructure.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
An anti-pattern where unpartitioned resources allow a single pathological request or high-volume tenant to exhaust shared capacity, starving independent operations. Partitioning resources using bulkheads and dedicated quotas in rjm protects critical paths from resource exhaustion.
