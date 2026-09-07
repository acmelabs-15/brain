---
package: rjm
name: Bulkheads
slug: bulkheads
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bulkheads

## Definition — verbatim
> "## Bulkheads" — .claude/skills/software-engineering-library/references/release-it.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 200 | used here | Listed as a dependency chain mitigation strategy to isolate dependency failures. |
| .claude/skills/software-engineering-library/references/release-it.md | 80 | defined here | Core resilience pattern section defining partitioning of shared thread pools, worker queues, and connection limits by concern. |

## Consumes
Shared resource pools (thread pools, connection pools, worker queues, memory quotas).

## Produces
Isolated resource partitions and explicit capacity allocations preventing cross-component starvation.

## When applied
When multiple concurrent flows or distinct customer workloads share finite system resources.

## Sub-concepts
none

## Part of
release-it

## Implementation status
defects: orphan, missing-path

## Design notes
Bulkheads partition critical system resources into isolated compartments, guaranteeing that resource exhaustion caused by one slow or failing dependency cannot cascade to starve unrelated operations.
