---
package: rjm
name: Input Contract
slug: input-contract
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

# Input Contract

## Definition — verbatim
(used, not defined)

> "Input Contract" — .agents/governance/agent-design-principles.md:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 259 | defines | Defined as the normative markdown structure for assigning work to agents with Objective, Scope, Context, Constraints, and Expected Output. |

## Consumes
Task instructions, operational context, boundary constraints, and deliverable expectations.

## Produces
A standardized `## Task for [Agent Name]` markdown block for invoking specialist agents.

## When applied
Whenever an orchestrator, peer agent, or human operator assigns a task to an agent in the rjm system.

## Sub-concepts
none

## Part of
- consistent-interface
- agent-design-principles

## Implementation status
defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor detection documented without automated enforcement at line 41)

## Design notes
The input contract defines the structured invocation schema required to dispatch tasks to any rjm agent. By enforcing explicit fields for Objective, Scope, Context, Constraints, and Expected Output, it ensures that agents receive all necessary task parameters without ambiguous or conversational drift. Without this standard contract, agents frequently fail or hallucinate due to missing context or unstated constraints.
