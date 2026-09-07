---
package: rjm
name: Orchestrator Routing Flowchart
slug: orchestrator-routing-flowchart
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Orchestrator Routing Flowchart

## Definition — verbatim
> "# Orchestrator Routing Flowchart" — docs/diagrams/routing-flowchart.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 1 | defined here | Title and visual reference document modeling the orchestrator routing decision pipeline. |

## Consumes
Orchestrator routing rules, classification axes, complexity thresholds, and agent compatibility matrix.

## Produces
Visual flowchart specifications and Mermaid state diagrams illustrating routing logic.

## When applied
Consulted to inspect, verify, or configure orchestrator routing logic across task classification and execution phases.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path

## Design notes
Orchestrator Routing Flowchart is a visual reference document in rjm providing detailed Mermaid diagrams for the orchestrator's four execution phases (Classify, Select, Execute, Synthesize) along with specific flowcharts for task classification, complexity assessment, risk level, agent selection, execution strategy, and conflict resolution.
