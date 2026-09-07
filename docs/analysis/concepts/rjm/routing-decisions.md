---
package: rjm
name: Routing decisions
slug: routing-decisions
kind: artifact
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

# Routing decisions

## Definition — verbatim
> "3. **Routing decisions are logged.** Each route emits a structured record:" — .agents/architecture/ADR-065-orchestrator-as-router.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 87 | defined here | Mandates structured logging of every orchestrator route to enable audits and deterministic replays. |

## Consumes
Input payload, classifier output, and router selection rules.

## Produces
Structured log records (`input_id`, `chosen_agent`, `reason`) in standard run logs.

## When applied
Generated on every dispatch event where an orchestrator routes an input to a specific agent.

## Sub-concepts
none

## Part of
deterministic-router

## Implementation status
defects: missing-path

## Design notes
ADR-065 Rule 3 requires that all routing decisions be emitted as structured log records capturing input ID, chosen agent, and routing reason. This audit trail allows retrospective analysis and offline replay without requiring re-execution of LLM prompts.
