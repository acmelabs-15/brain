---
package: addy
name: Cardinality
slug: cardinality
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Cardinality

## Definition — verbatim
> "**Cardinality is the failure mode.** Every unique label combination is a separate time series." — skills/observability-and-instrumentation/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/observability-and-instrumentation/SKILL.md | 110 | defined here | Critical constraint rule warning against high-cardinality label combinations in metric time series. |

## Consumes
Metric design specifications, label schemas, and dimensionality definitions.

## Produces
Bounded label sets (e.g. route templates, status code classes) that protect metric storage engines.

## When applied
Whenever defining labels and tags on Prometheus, OpenTelemetry, or APM metrics.

## Sub-concepts
none

## Part of
- metric
- observability-and-instrumentation

## Implementation status
clean

## Design notes
An architectural constraint in metrics design mandating that label values belong to small, bounded enumerations rather than unbounded domains (like user IDs or URLs), preventing metric store memory exhaustion.
