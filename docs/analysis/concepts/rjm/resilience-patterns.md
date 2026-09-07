---
package: rjm
name: Resilience Patterns
slug: resilience-patterns
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Resilience Patterns

## Definition — verbatim
(used, not defined)

> "| Reliability | Observability Pillars | Resilience Patterns | SLO/SLI/SLA, Error Budgets | Chaos Engineering, Threat Modeling | Platform Strategy |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 78 | defined here | Listed in Problem Domain Cross-Reference table as a Tier 2 (Junior) reliability architectural pattern. |

## Consumes
Failure mode analyses, dependency interfaces, network boundary constraints.

## Produces
Fault-tolerant design mechanisms such as circuit breakers, retries, fallbacks, and bulkheads.

## When applied
Applied when analyzing component reliability to ensure services gracefully degrade under partial failures.

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
Resilience Patterns categorizes Tier 2 reliability techniques in rjm's engineering complexity matrix, ensuring systems isolate faults through proven patterns like timeouts, retries with backoff, and circuit breakers.
