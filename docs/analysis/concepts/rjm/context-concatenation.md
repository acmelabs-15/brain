---
package: rjm
name: context concatenation
slug: context-concatenation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# context concatenation

## Definition — verbatim
> "context concatenation: the orchestrator emits a prompt, a sub-agent emits a" — .agents/architecture/ADR-065-orchestrator-as-router.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 30 | defined here | Defines the actual operational mechanic of multi-agent interaction where orchestrator prompts and sub-agent replies are concatenated into fresh context. |

## Consumes
Prior orchestrator prompt and sub-agent reply text.

## Produces
Appended conversational context for the subsequent orchestrator turn.

## When applied
Applied across all multi-agent interaction turns during orchestrated workflows.

## Sub-concepts
none

## Part of
orchestration-architecture

## Implementation status
defects: missing-path

## Design notes
Context concatenation is the operational reality of multi-agent interactions in rjm: rather than continuous in-process supervision, agent coordination consists strictly of discrete prompt emission and response concatenation into new input context. Acknowledging this mechanic forces the orchestrator to rely on deterministic routing and code-level verification rather than conversational prompting.
