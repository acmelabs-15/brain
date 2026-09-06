---
package: addy
name: potential impact
slug: potential-impact
kind: pattern
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

# potential impact

## Definition — verbatim
> "Quick mode — default when none of the above are available. Scan source code for structural anti-patterns and label every finding as `potential impact`." — commands/webperf.toml:16

## Also called — verbatim
`potential impact` — agents/web-performance-auditor.md:14

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 16 | defines | Mandated labeling pattern for all static performance heuristic findings. |
| commands/webperf.toml | 16 | used here | Requirement enforcing clear separation between heuristic scans and measured data. |

## Consumes
Static source code observations and identified structural anti-patterns

## Produces
Explicitly qualified performance finding classifications that disclaim empirical measurement

## When applied
Mandatory on every finding reported during Quick mode web performance audits when no lab or field artifacts are present.

## Sub-concepts
none

## Part of
quick-mode, webperf, web-performance-auditor

## Implementation status
clean

## Design notes
The `potential impact` classification is an epistemic integrity mechanism in addy. It prevents agents from presenting static code heuristics as verified performance bottlenecks, ensuring developers understand that code-level optimizations remain hypotheses until empirically validated.
