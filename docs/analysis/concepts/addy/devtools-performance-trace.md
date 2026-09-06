---
package: addy
name: DevTools performance trace
slug: devtools-performance-trace
kind: artifact
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

# DevTools performance trace

## Definition — verbatim
> "A DevTools performance trace" — commands/webperf.toml:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/webperf.toml | 12 | references | Artifact input triggering Deep mode in web performance audits for runtime CPU and rendering analysis. |

## Consumes
Recorded browser execution timeline via Chrome DevTools or the Chrome DevTools MCP.

## Produces
Main-thread flame charts, layout recalculation timings, and long task breakdowns.

## When applied
When deep profiling of client-side performance, scripting overhead, or rendering jank is required during `/webperf`.

## Sub-concepts
none

## Part of
webperf, web-performance-auditor

## Implementation status
clean

## Design notes
A DevTools performance trace records low-level browser execution data, capturing main thread work, JavaScript function durations, style calculations, and rendering events. It provides the empirical timeline data needed to isolate layout thrashing, excessive script execution, and long tasks that cause poor Interaction to Next Paint (INP).
