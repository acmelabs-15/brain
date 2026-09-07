---
package: rjm
name: Traces
slug: traces
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
  - {path: scripts/eval/_runtime_output.py, sha256: 27b0e3d4e48261471599dc8dd4b433cc41620902ca4c462460cb64fb93c4fc42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Traces

## Definition — verbatim
> "Distributed request flow across services." — .claude/skills/analyze/references/reliability-observability-pillars.md:50-52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 50 | defined here | Pillar of observability capturing end-to-end distributed request flows across service boundaries. |
| .claude/skills/observability/references/otel-semantic-conventions.md | 35 | defined here | Telemetry signal category covering span names, kinds, HTTP methods, and database system attributes. |
| scripts/eval/_runtime_output.py | 198 | defined here | Evaluation helper function collecting tool and subagent event traces from CLI execution outputs. |

## Consumes
Propagated trace contexts, span events, and execution runtime logs.

## Produces
Distributed call graphs, latency waterfall diagrams, and subagent execution traces.

## When applied
When diagnosing distributed system latency, tracking asynchronous workflows, or evaluating multi-agent execution steps.

## Sub-concepts
span, trace

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
Traces form the third pillar of observability in rjm's architectural reference model, representing distributed request flows across service and component boundaries. They correlate spans via propagated trace context, enabling engineers and evaluation harnesses to inspect execution paths, identify latency bottlenecks, and debug asynchronous multi-agent coordination failures.
