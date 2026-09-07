---
package: rjm
name: Cost-Latency Tradeoff
slug: cost-latency-tradeoff
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cost-Latency Tradeoff

## Definition — verbatim
> "Design so fast/cheap layers filter traffic for expensive/deep layers." — .claude/skills/threat-modeling/references/security-defense-in-depth.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 37 | defined here | Architectural principle and reference table for positioning security layers by latency, cost, and accuracy trade-offs. |

## Consumes
Traffic volume estimates, compute latency budgets, and security accuracy targets.

## Produces
Sequenced processing pipelines where high-throughput, low-cost filters protect downstream, resource-intensive analysis engines.

## When applied
When ordering defensive controls to balance system throughput and operational cost with deep analytical security.

## Sub-concepts
none

## Part of
- defense-in-depth

## Implementation status
defects: missing-path

## Design notes
A design principle optimizing resource allocation across layered defenses: positioning broad, low-latency, low-cost heuristic filters upstream so that expensive, high-accuracy analysis is reserved strictly for suspicious traffic.
