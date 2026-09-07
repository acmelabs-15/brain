---
package: rjm
name: Freshness
slug: freshness
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Freshness

## Definition — verbatim
> "1. **Freshness**: Data processed within SLA" — .claude/skills/slo-designer/references/slo-design-patterns.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 104 | used here | Recommended SLI for data pipelines measuring whether data has been processed and made available within schedule thresholds. |

## Consumes
Pipeline completion timestamps and current system time (`time() - pipeline_last_success_timestamp`).

## Produces
Quantitative measure of data recency and pipeline processing lag.

## When applied
When monitoring data warehouses, analytics pipelines, and scheduled ingestion jobs.

## Sub-concepts
none

## Part of
data-pipeline-pattern

## Implementation status
defects: orphan

## Design notes
Freshness is an asynchronous data quality SLI that measures the time elapsed since the last successful pipeline execution, ensuring downstream consumers and decision dashboards operate on sufficiently up-to-date information.
