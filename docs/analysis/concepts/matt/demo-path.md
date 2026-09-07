---
package: matt
name: demo path
slug: demo-path
kind: technique
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# demo path

## Definition — verbatim
> "Some people add a &quot;demo path&quot; line to each ticket for this reason, and report it nudges the model toward vertical decomposition." — external/to-tickets.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-tickets.md | 54 | defined here | Recommends adding a demo path line to tickets to steer LLMs toward vertical tracer-bullet slicing rather than horizontal layering. |

## Consumes
An individual ticket definition during decomposition.

## Produces
An explicit demonstrable user-facing behavior or verification path recorded on the ticket.

## When applied
Applied during ticket creation or the `/to-tickets` quiz step to prevent horizontal slicing.

## Sub-concepts
none

## Part of
to-tickets, tracer bullet

## Implementation status
defects: other

## Design notes
A ticket authoring technique that requires defining an observable, demonstrable path through all layers of a change for every ticket, preventing models from defaulting to layer-by-layer horizontal partitioning.
