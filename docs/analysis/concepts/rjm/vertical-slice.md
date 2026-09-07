---
package: rjm
name: vertical slice
slug: vertical-slice
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# vertical slice

## Definition — verbatim
> "Each milestone delivers a vertical slice with measurable exit criteria. Not a phase. Not a sprint. A shippable increment." — .claude/agents/milestone-planner.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 44 | defined here | Core delivery principle requiring each milestone to ship an end-to-end usable slice rather than a horizontal phase. |

## Consumes
Cross-cutting architectural layers, user stories, and feature requirements.

## Produces
An end-to-end demonstrable capability across UI, business logic, persistence, and automated tests.

## When applied
Applied during epic planning when slicing scope into sequential delivery packages.

## Sub-concepts
none

## Part of
milestone-structure

## Implementation status
clean

## Design notes
Vertical slice enforces that development work is organized by end-to-end feature functionality across all architectural layers rather than horizontal architectural tiers. In rjm, this prevents the risk of building disconnected backend or database layers that cannot be validated until an entire system is assembled at the end of a project.
