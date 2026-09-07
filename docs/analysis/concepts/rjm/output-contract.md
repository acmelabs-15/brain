---
package: rjm
name: Output Contract
slug: output-contract
kind: template
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

# Output Contract

## Definition — verbatim
(used, not defined)

> "Output Contract" — .agents/governance/agent-design-principles.md:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 271 | defines | Defined as the normative markdown structure for agent deliverables with Summary, Findings/Results, Recommendations, and Handoff. |

## Consumes
Agent execution results, analytical findings, code modifications, or recommendations.

## Produces
A standardized `## [Agent Name] Report: [Topic]` markdown deliverable.

## When applied
Whenever an agent completes its task and generates a report or handoff artifact.

## Sub-concepts
none

## Part of
- consistent-interface
- agent-design-principles

## Implementation status
defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor detection documented without automated enforcement at line 41)

## Design notes
The output contract standardizes the format of all deliverables produced by agents in the rjm system. By structuring outputs into Summary, Findings/Results, Recommendations, and Handoff sections, it ensures downstream agents and human reviewers can immediately locate executive summaries, technical details, and next-step actions. Without the output contract, deliverable formats would vary unpredictably across agents, breaking automated workflow chaining.
