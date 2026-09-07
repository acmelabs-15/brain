---
package: rjm
name: Critical actions
slug: critical-actions
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critical actions

## Definition — verbatim
> "Critical actions: Memory loading enforced before task execution" — .agents/architecture/ADR-007-memory-first-architecture.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 59 | used here | Defined as a blocking gate mandating memory loading prior to beginning agent task execution. |

## Consumes
Agent invocation prompts and indexed repository memory files.

## Produces
Pre-task memory loading verification ensuring context retrieval precedes reasoning.

## When applied
At session start before executing any reasoning steps or code modifications.

## Sub-concepts
none

## Part of
memory-first-architecture

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A blocking lifecycle gate derived from the BMAD framework mandating that memory retrieval must always occur before an agent initiates task reasoning or modifications. By transforming memory retrieval into a non-negotiable critical action, the architecture prevents cross-session amnesia and duplicate problem-solving.
