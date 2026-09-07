---
package: rjm
name: Verifiable Success
slug: verifiable-success
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verifiable Success

## Definition — verbatim
> "Agent success is measurable against defined criteria." — .agents/governance/agent-design-principles.md:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 209 | defines | Defined as Principle 5 requiring quantifiable metrics, task-specific acceptance criteria, and baseline measurements. |
| docs/agent-governance.md | 25 | defines | Listed as the fifth foundational agent design principle governing measurable success metrics across all agents. |

## Consumes
Agent interview responses, task-specific acceptance criteria, and baseline performance metrics.

## Produces
Quantitative evaluation rubrics, target performance thresholds, and quarterly review audit results.

## When applied
Applied during agent specification in the interview protocol, quarterly performance reviews, and routing evaluations.

## Sub-concepts
none

## Part of
- agent-design-principles

## Implementation status
defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor detection documented without automated enforcement at line 41)

## Design notes
Verifiable success ensures agent performance in rjm is grounded in empirical, testable metrics rather than subjective impression. By requiring target detection rates, bounded completion times, and explicit error thresholds (such as false positive rates and CWE coverage targets), rjm provides objective criteria for validating whether an agent is functioning effectively. Without verifiable success, agent regressions or misalignments would go undetected until downstream failures occur.
