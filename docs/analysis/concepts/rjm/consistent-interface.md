---
package: rjm
name: Consistent Interface
slug: consistent-interface
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

# Consistent Interface

## Definition — verbatim
> "All agents follow the same input/output contract." — .agents/governance/agent-design-principles.md:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 248 | defines | Defined as Principle 6 prescribing standardized markdown formats for task assignments and report deliverables. |
| docs/agent-governance.md | 26 | defines | Listed as the sixth foundational agent design principle mandating uniform input/output schemas. |

## Consumes
Task requests with Objective, Scope, Context, Constraints, and Expected Output.

## Produces
Standardized agent reports containing Summary, Findings/Results, Recommendations, and Handoff sections.

## When applied
Applied across all agent task dispatches and deliverable handoffs in the multi-agent system.

## Sub-concepts
- input-contract
- output-contract

## Part of
- agent-design-principles

## Implementation status
defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor detection documented without automated enforcement at line 41)

## Design notes
Consistent interface establishes uniform syntactic contracts for agent invocations and outputs across rjm. By establishing a fixed markdown schema for task assignments and deliverable reports, the system eliminates parsing ambiguity for both human operators and coordinating agents. Without a consistent interface, orchestrators and downstream agents would need custom heuristics to locate findings, recommendations, and handoff directives.
