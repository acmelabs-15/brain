---
package: addy
name: Lighthouse
slug: lighthouse
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

# Lighthouse

## Definition — verbatim
> "A Lighthouse JSON report file (e.g. `npx lighthouse <url> --output json --output-path ./report.json`, or `npx -p chrome-devtools-mcp chrome-devtools lighthouse_audit --output-format=json` from the Chrome DevTools MCP CLI)" — commands/webperf.toml:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/webperf.toml | 9 | references | Listed as an external JSON report artifact enabling Deep mode for web performance audits. |

## Consumes
Target web application URL or running local server preview.

## Produces
JSON performance report detailing Core Web Vitals, performance opportunities, and diagnostic audits.

## When applied
When auditing browser-facing web applications via the `/webperf` command or `web-performance-auditor`.

## Sub-concepts
none

## Part of
webperf, web-performance-auditor

## Implementation status
clean

## Design notes
Lighthouse is the primary automated synthetic audit tool for evaluating Core Web Vitals and web performance in addy's lifecycle. Providing a pre-computed or DevTools MCP-generated Lighthouse report shifts `/webperf` audits from speculative static code inspection to empirical, measurement-driven remediation.
