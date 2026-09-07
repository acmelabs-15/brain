---
package: rjm
name: subagent-isolation
slug: subagent-isolation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# subagent-isolation

## Definition — verbatim
(used, not defined)

> "at lower cost (one model call instead of a parent-to-subagent dispatch) and without subagent-isolation complexity?" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:28

## Also called — verbatim
`Isolation: subagents add context-isolation complexity and a known 1M-context failure mode` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 28 | used here | Cited as the architectural complexity trade-off inherent in dispatching work to child agent processes. |

## Consumes
Orchestrator context and child agent execution boundaries.

## Produces
Independent execution environment and sanitized conversation context.

## When applied
Employed when delegating complex or security-sensitive tasks to isolated child contexts.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
Subagent isolation separates child agent context from parent context to prevent prompt contamination and token bloat, balanced against invocation overhead and multi-context failure modes.
