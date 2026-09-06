---
package: matt
name: spec/ticket flows
slug: spec-ticket-flows
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# spec/ticket flows

## Definition — verbatim
(used, not defined)
> "Matt Pocock's agent skills for real engineering: grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding." — .claude-plugin/plugin.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/marketplace.json | 12 | defined here | Summarized in marketplace catalog description as a key engineering workflow. |
| .claude-plugin/plugin.json | 4 | defined here | Summarized in plugin manifest description as a foundational capability. |

## Consumes
User requests, product requirements, bug reports, and domain context.

## Produces
Validated specification documents (`to-spec`) and decomposed issues or tickets (`to-tickets`).

## When applied
Applied during early engineering phases when transitioning from concept exploration to concrete tasks.

## Sub-concepts
spec, ticket

## Part of
mattpocock-skills

## Implementation status
clean

## Design notes
`spec/ticket flows` refers to the phased progression from requirements clarification to discrete task execution in `matt`. By coupling specification generation (`to-spec`) with issue decomposition (`to-tickets`), the workflow prevents agents from jumping directly from high-level user ideas into unconstrained code editing.
