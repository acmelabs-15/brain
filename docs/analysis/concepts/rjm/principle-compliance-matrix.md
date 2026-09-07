---
package: rjm
name: Principle Compliance Matrix
slug: principle-compliance-matrix
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Principle Compliance Matrix

## Definition — verbatim
(used, not defined)

> "Principle Compliance Matrix" — .agents/governance/agent-design-principles.md:294

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 294 | defines | Defined as an audit matrix tracking each agent's adherence to all six governance design principles. |

## Consumes
Agent interview reports, architectural reviews, and quarterly evaluation results.

## Produces
A tabular compliance record across Non-Overlap, Entry Criteria, Limitations, Composable, Verifiable, and Consistent columns.

## When applied
Applied during quarterly governance reviews and when evaluating new agent proposals.

## Sub-concepts
none

## Part of
- agent-design-principles

## Implementation status
defects: other (Principle Compliance Matrix table at .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder with blank checkboxes for all agents; capability floor detection documented without automated enforcement at line 41)

## Design notes
The Principle Compliance Matrix serves as a central governance scorecard evaluating every agent in rjm against the six core design principles. It provides an at-a-glance audit mechanism to identify agents requiring consolidation, improved interface standardization, or tighter limitation definitions. Without this matrix, system architects lack a consolidated overview of governance compliance across the agent catalog.
