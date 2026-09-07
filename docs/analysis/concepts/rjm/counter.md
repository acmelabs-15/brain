---
package: rjm
name: Counter
slug: counter
kind: artifact
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/otel-migration-reference.md, sha256: 9fb61670c70cb6839e200e0ca0e19771a0d1eab3ed5292345a86f8c490811bbd}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Counter

## Definition — verbatim
> "| Counter | Monotonically increasing | Requests total, errors total |" — .claude/skills/analyze/references/reliability-observability-pillars.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 39 | defined here | Defined in metrics types table as a monotonically increasing instrument for counts such as total requests or errors. |
| .claude/skills/observability/references/otel-migration-reference.md | 31 | defined here | Tabulated in OpenTelemetry metric instrument mapping table as a monotonically increasing metric. |
| .claude/skills/observability/references/three-pillars-reference.md | 37 | defined here | Listed in metric instrument types table as a monotonically increasing counter for cumulative totals. |

## Consumes
Discrete event occurrences (such as incoming HTTP requests or raised errors).

## Produces
Monotonically increasing cumulative numeric time-series values.

## When applied
Applied when instrumentation needs to measure cumulative event frequency or error volume over time.

## Sub-concepts
none

## Part of
metrics

## Implementation status
defects: missing-path

## Design notes
Counter is a fundamental metric instrument type in rjm's observability architecture that only increments, enabling rate calculation, traffic tracking, and cumulative error measurement across distributed services.
