---
package: rjm
name: Composability
slug: composability
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

# Composability

## Definition — verbatim
> "Agents can work together in sequences without modification." — .agents/governance/agent-design-principles.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 169 | defines | Defined as Principle 4 requiring standardized task inputs and report deliverables so agents chain together without custom bridges. |
| docs/agent-governance.md | 24 | defines | Formulated as the fourth foundational agent design principle for chaining agents across workflows. |

## Consumes
Standardized task input descriptions, structured upstream artifacts, and explicit handoff summaries.

## Produces
Composable multi-agent sequence chains (e.g., analyst -> architect -> implementer -> qa) operating without custom translation adapters.

## When applied
During agent proposal design, architectural review, and multi-agent workflow composition to ensure sequence compatibility.

## Sub-concepts
- input-contract
- output-contract

## Part of
- agent-design-principles

## Implementation status
defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor detection documented without automated enforcement at line 41)

## Design notes
Composability is the core structural pattern in rjm enabling multi-agent orchestration without fragile point-to-point adapters. By mandating standard markdown input tasks and output report contracts, rjm ensures any specialist agent can consume the output of an upstream agent and pass its own structured deliverable downstream. Without composability, multi-agent workflows would require brittle custom translation bridges between different agent personas.
