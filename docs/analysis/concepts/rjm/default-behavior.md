---
package: rjm
name: Default Behavior
slug: default-behavior
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Default Behavior

## Definition — verbatim
> "For non-trivial tasks: `Task(subagent_type=\"orchestrator\", prompt=\"...\")`" — CLAUDE.md:22

## Also called — verbatim
> "### Default Behavior" — CLAUDE.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 20 | defined here | Section heading establishing default delegation to the orchestrator subagent for multi-step tasks. |

## Consumes
Task prompt descriptions representing non-trivial engineering work.

## Produces
Subagent dispatch call initializing the orchestrator with the specified prompt.

## When applied
Triggered automatically whenever an incoming prompt represents a non-trivial, multi-step engineering task.

## Sub-concepts
none

## Part of
claude-code-specifics

## Implementation status
clean

## Design notes
Default execution pattern ensuring that complex user requests are immediately delegated to the `orchestrator` subagent rather than handled monolithically by the root assistant.
