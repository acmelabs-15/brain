---
package: matt
name: context windows
slug: context-windows
kind: reference
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# context windows

## Definition — verbatim
(used, not defined)
> "The spec exists because context windows end." — external/to-spec.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 34 | used here | Explains that the finite boundary and termination of conversational context windows necessitates persisting agreed decisions into a durable specification. |

## Consumes
Active conversation turns, tool interaction logs, and codebase context.

## Produces
Ephemeral reasoning space for language model execution during an interactive session.

## When applied
Throughout all LLM sessions; acts as an operational constraint driving the transition from conversation to durable spec.

## Sub-concepts
none

## Part of
to-spec

## Implementation status
defects: orphan, doc-drift

## Design notes
Context windows represent the finite token memory limit of individual agent sessions. Because context windows inevitably terminate and reset, critical architectural decisions argued during conversational grilling will vanish unless captured into durable external artifacts like specs and tickets.
