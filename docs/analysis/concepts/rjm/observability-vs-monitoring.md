---
package: rjm
name: Observability vs Monitoring
slug: observability-vs-monitoring
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Observability vs Monitoring

## Definition — verbatim
(used, not defined)

> "## Observability vs Monitoring" — .claude/skills/analyze/references/reliability-observability-pillars.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 11 | defined here | Section heading contrasting predefined monitoring alerts with open exploratory observability. |
| .claude/skills/observability/references/three-pillars-reference.md | 11 | defined here | Section heading introducing the conceptual comparison table between monitoring and observability. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Observability vs Monitoring is a markdown section heading in observability reference documents contrasting known failure alerting with unknown-unknown exploration, rather than an independent lifecycle concept, classified as name-only per D-023.
