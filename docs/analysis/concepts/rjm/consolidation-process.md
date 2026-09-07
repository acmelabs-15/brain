---
package: rjm
name: Consolidation Process
slug: consolidation-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consolidation Process

## Definition — verbatim
(used, not defined)

> "Consolidation Process" — .agents/governance/steering-committee-charter.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 83 | defined here | Section heading outlining consolidation review triggers, workflow steps, and migration plan requirements. |
| docs/agent-governance.md | 14 | used here | Table entry referencing the consolidation process documentation for merging overlapping agents. |

## Consumes
Overlap analysis reports (>20% overlap), agent usage metrics (<5% monthly invocations), and routing telemetry.

## Produces
Consolidation ADR, migration plan, 30-day deprecation notice, and capability transfer to a surviving agent.

## When applied
When agents trigger consolidation thresholds such as >20% capability overlap, low monthly usage (<5%), or routing confusion.

## Sub-concepts
migration-plan-requirements

## Part of
steering-committee-charter

## Implementation status
defects: doc-drift, missing-path

## Design notes
Systematic lifecycle mechanism for deprecating and merging overlapping or underutilized agents. By enforcing objective triggers (>20% overlap, <5% invocations) and structured deprecation workflows, the package prevents technical debt and cognitive confusion caused by redundant agents.
