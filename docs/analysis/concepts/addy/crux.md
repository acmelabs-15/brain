---
package: addy
name: CrUX
slug: crux
kind: reference
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CrUX

## Definition — verbatim
> "A PageSpeed Insights JSON response (includes Lighthouse + CrUX)" — commands/webperf.toml:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/webperf.toml | 10 | references | Listed as a real-user monitoring data source (via PageSpeed Insights or CrUX API) enabling Deep audit mode. |

## Consumes
Real-user telemetry queried via PageSpeed Insights or the CrUX API using `$CRUX_API_KEY` or `$GOOGLE_API_KEY`.

## Produces
Field data distributions reflecting 75th percentile Core Web Vitals experienced by real end users.

## When applied
When auditing production web applications where field performance data is available.

## Sub-concepts
none

## Part of
webperf, web-performance-auditor

## Implementation status
clean

## Design notes
Chrome User Experience Report (CrUX) provides real-world user performance distributions, complementing synthetic lab runs. Within `/webperf`, CrUX inputs allow agents to diagnose how changes impact actual users across variable network conditions and real-world hardware, avoiding the blind spots of clean development environments.
