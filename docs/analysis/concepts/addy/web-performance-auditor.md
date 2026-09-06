---
package: addy
name: web-performance-auditor
slug: web-performance-auditor
kind: role
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# web-performance-auditor

## Definition — verbatim
> "You are an experienced Web Performance Engineer conducting a performance audit. Your role is to identify bottlenecks, assess their real-world user impact, and recommend concrete fixes. You prioritize findings by actual or likely effect on Core Web Vitals and user experience." — agents/web-performance-auditor.md:8

## Also called — verbatim
`web-performance-auditor` — .gemini/commands/webperf.toml:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 20 | applies | Designated persona executed by Gemini CLI /webperf command. |
| agents/web-performance-auditor.md | 6 | defines | Primary persona specification defining scope, operating modes, and scorecard schema. |
| commands/webperf.toml | 1 | applies | Targeted subagent persona spawned by the Claude Code /webperf command. |
| docs/agents.md | 10 | defines | Cataloged in agents reference guide as specialist performance engineering role. |
| README.md | 295 | references | Listed in root repository README under specialized agent personas table. |

## Consumes
Web application source files, UI component trees, commit diffs, or performance artifacts (Lighthouse JSON, PSI responses, CrUX data, traces)

## Produces
A structured audit report containing a performance scorecard, prioritized findings, positive observations, and concrete recommendations

## When applied
Spawned when executing `/webperf` audits on browser-facing web applications; intentionally separated from general `/ship` reviews.

## Sub-concepts
deep-mode, quick-mode, potential-impact

## Part of
webperf, performance-optimization

## Implementation status
clean

## Design notes
The `web-performance-auditor` role provides specialized frontend performance analysis in addy. By operating as a dedicated subagent rather than part of general code review, it applies focused scrutiny to Core Web Vitals, asset loading hierarchies, and rendering bottlenecks without cluttering non-web workflows.
