---
package: rjm
name: Shared Context
slug: shared-context
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shared Context

## Definition — verbatim
> "**Current Approach (Shared Context):**" — .claude/skills/skillforge/references/synthesis-protocol.md:457

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 457 | defined here | Architectural specification for executing panel evaluators within the main conversation context via background tasks. |

## Consumes
Prior conversational artifacts across Phase 1, Phase 2, and Phase 3.

## Produces
Background task evaluations and verdicts within the shared parent conversation thread.

## When applied
Applied by default in SkillForge multi-agent synthesis panels to preserve analysis and specification context across evaluators.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
A collaborative multi-agent execution pattern where background evaluation tasks share the primary conversation context, avoiding redundant token re-ingestion while risking context window pollution.
