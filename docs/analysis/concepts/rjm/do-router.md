---
package: rjm
name: Do Router
slug: do-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Do Router

## Definition — verbatim
> "Over-routing is cheap. Under-routing compounds." — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 54 | used here | Cited as a foundational principle mandating routing to specialist agents prior to executing high-stakes actions. |

## Consumes
Agent task assignments, multi-agent workflows, and high-stakes lifecycle operations.

## Produces
Mandatory routing delegations to specialist personas (such as critic or QA) before critical state changes.

## When applied
Applied whenever an agent attempts high-stakes operations, forcing delegation to specialized roles.

## Sub-concepts
none

## Part of
vexjoy-principles

## Implementation status
defects: doc-drift, missing-path

## Design notes
"Do Router" is a foundational multi-agent orchestration principle in rjm captured by the maxim: "Over-routing is cheap. Under-routing compounds." In ADR-033, it justifies forcing autonomous agents to route tasks to dedicated specialist agents (such as QA validation and Critic review) before high-stakes actions can proceed, ensuring comprehensive scrutiny.
