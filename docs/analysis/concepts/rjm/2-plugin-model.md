---
package: rjm
name: 2-plugin model
slug: 2-plugin-model
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 2-plugin model

## Definition — verbatim
(used, not defined)

> "Evaluate 2-plugin model vs 4-plugin model | 4 plugins may be over-engineering; consider core + extensions" — .agents/analysis/adr-045-feasibility-analysis.md:195

## Also called — verbatim
core + extensions — .agents/analysis/adr-045-feasibility-analysis.md:195

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 195 | defined here | Proposed as a pragmatic architectural alternative to avoid the maintenance overhead of 4 separate plugins. |

## Consumes
Marketplace architecture requirements and plugin taxonomy assessments.

## Produces
A simplified 2-plugin packaging topology consisting of core and optional extension bundles.

## When applied
Considered during plugin architectural review to evaluate trade-offs between granularity and overhead.

## Sub-concepts
none

## Part of
framework-extraction

## Implementation status
defects: missing-path

## Design notes
The 2-plugin model is an architectural alternative considered during rjm's framework extraction analysis. Rather than splitting the system into four separate plugins with multiple manifests, the 2-plugin model consolidates the system into a core framework plugin and an extensions plugin, minimizing namespace fragmentation and version coordination overhead.
