---
package: addy
name: CrUX API
slug: crux-api
kind: reference
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CrUX API

## Definition — verbatim
> "- A CrUX API response (requires CRUX_API_KEY or GOOGLE_API_KEY)" — .gemini/commands/webperf.toml:11

## Also called — verbatim
`CrUX API response` — agents/web-performance-auditor.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 11 | references | Listed as an accepted performance input artifact providing field data. |

## Consumes
Target web origin or page URL, CRUX_API_KEY or GOOGLE_API_KEY environment credentials

## Produces
Aggregated 28-day p75 real user metric distributions for Core Web Vitals (LCP, INP, CLS)

## When applied
Queried during Deep mode audits to obtain empirical real-user performance data for production web applications.

## Sub-concepts
none

## Part of
deep-mode, webperf, core-web-vitals

## Implementation status
clean

## Design notes
The CrUX API (Chrome User Experience Report) delivers real-user measurement distributions directly from Chrome users in the field. In addy, it provides the ultimate empirical benchmark for Core Web Vitals, ensuring performance assessments are grounded in real user conditions rather than purely synthetic lab simulations.
