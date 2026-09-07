---
package: rjm
name: MULTI_STEP
slug: multi-step
kind: technique
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

# MULTI_STEP

## Definition — verbatim
(used, not defined)

> "FILES_CHECK -->|YES| MULTI_STEP1[MULTI_STEP]" — docs/diagrams/routing-flowchart.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 90 | used here | Complexity assessment classification triggered when affected files exceed three or required agents exceed one. |

## Consumes
File count thresholds (> 3 files) or required agent count thresholds (> 1 agent).

## Produces
Moderate complexity classification routing to a sequence of 2–3 collaborating agents.

## When applied
Applied during orchestrator complexity assessment when a task touches multiple files or demands specialized handoffs.

## Sub-concepts
none

## Part of
orchestrator-routing-algorithm

## Implementation status
defects: missing-path

## Design notes
MULTI_STEP is a complexity assessment classification in rjm assigned when a task does not meet the multi-domain threshold but touches more than three files or requires more than one specialist agent. It triggers a moderate multi-agent sequence (2–3 agents) to address the scope without incurring full pipeline overhead.
