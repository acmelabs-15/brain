---
package: rjm
name: ReflexionMemory
slug: reflexionmemory
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReflexionMemory

## Definition — verbatim
(used, not defined)

> "Issue #180 proposes implementing reflexion memory with causal reasoning, based on claude-flow's ReflexionMemory pattern which achieves 84.8% SWE-Bench solve rate through coordinated learning." — .agents/architecture/ADR-038-reflexion-memory-schema.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 31 | used here | Cited as the claude-flow architectural pattern providing coordinated learning and causal reasoning. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
ReflexionMemory is an external architectural pattern identifier from claude-flow research rather than an operational software lifecycle concept.
