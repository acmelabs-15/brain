---
package: addy
name: Deep mode
slug: deep-mode
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Deep mode

## Definition — verbatim
> "Deep mode — activate when any of these is available:" — commands/webperf.toml:8

## Also called — verbatim
`Deep mode` — agents/web-performance-auditor.md:16

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 8 | defines | Operating mode defined in Gemini CLI command activated by performance artifacts. |
| agents/web-performance-auditor.md | 16 | defines | Operating mode of the web-performance-auditor interpreting empirical metrics. |
| commands/webperf.toml | 8 | defines | Defines the conditions and artifacts required to trigger Deep mode auditing. |

## Consumes
Performance artifacts: Lighthouse JSON, PageSpeed Insights response, CrUX field data, or DevTools performance traces

## Produces
A fully populated performance scorecard with sourced metric values, verified bottlenecks, and empirical recommendations

## When applied
Activated whenever tool artifacts, live URLs with DevTools MCP, or API responses are available for analysis.

## Sub-concepts
pagespeed-insights, crux-api, chrome-devtools-mcp-cli

## Part of
webperf, web-performance-auditor

## Implementation status
clean

## Design notes
Deep mode provides empirical web performance auditing in addy. Unlike static code inspection, Deep mode parses concrete lab and field data (Lighthouse, CrUX, traces) to evaluate real-world user experience and prevent unverified performance claims.
