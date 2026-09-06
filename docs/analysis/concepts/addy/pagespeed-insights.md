---
package: addy
name: PageSpeed Insights
slug: pagespeed-insights
kind: reference
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PageSpeed Insights

## Definition — verbatim
> "- A PageSpeed Insights JSON response (includes Lighthouse + CrUX)" — commands/webperf.toml:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 10 | references | Listed as accepted input artifact triggering Deep mode in Gemini CLI. |
| commands/webperf.toml | 10 | references | Accepted performance input combining Lighthouse lab data and CrUX field metrics. |

## Consumes
Public webpage URL, optional Google API credentials

## Produces
Structured JSON response containing synthetic Lighthouse audits and field user experience distributions

## When applied
Utilized during Deep mode web performance audits when assessing production or public staging web applications.

## Sub-concepts
crux-api

## Part of
deep-mode, webperf

## Implementation status
clean

## Design notes
PageSpeed Insights serves as an authoritative composite source of performance data. By packaging both controlled synthetic Lighthouse lab benchmarks and 28-day Chrome User Experience Report (CrUX) field data into a single API response, it gives auditing agents a comprehensive view of real and simulated performance.
