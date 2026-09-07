---
package: rjm
name: supervision loop
slug: supervision-loop
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

# supervision loop

## Definition — verbatim
> "supervision loop between the orchestrator and sub-agents. There is only" — .agents/architecture/ADR-065-orchestrator-as-router.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 29 | defined here | Identified as a fictitious capability that does not exist in LLM agent systems, explicitly rejected in favor of deterministic routing. |

## Consumes
none

## Produces
none

## When applied
Explicitly rejected in favor of deterministic routing and stateless context concatenation.

## Sub-concepts
none

## Part of
orchestration-architecture

## Implementation status
defects: missing-path

## Design notes
In rjm's architecture, supervision loop is recognized as a stability anti-pattern and anthropomorphic illusion. ADR-065 rejects the assumption that an orchestrator LLM continuously monitors, coaches, and course-corrects sub-agents, clarifying that stateless LLM calls cannot maintain continuous supervisory feedback.
