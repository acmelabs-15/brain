---
package: rjm
name: Layer 4
slug: layer-4
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Layer 4

## Definition — verbatim
(used, not defined)

> "Layer 3 stays in `burstiness.py`, Layer 4 stays with the agent." — .claude/skills/prose-self-check/scripts/prose_lint.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 23 | used here | Cited in module docstring as the manual semantic review layer retained by the executing agent. |

## Consumes
Prose text that has successfully passed automated checks in Layers 1–3.

## Produces
Semantic emptiness review verdict ensuring each paragraph contains a nameable, disagreeable claim.

## When applied
Applied as the final quality gate in prose-self-check after automated checks exit cleanly.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
clean

## Design notes
In prose-self-check, Layer 4 (the emptiness gate) represents the non-delegable manual semantic review performed by the agent to ensure every paragraph asserts a substantive, disagreeable claim rather than vacuous filler.
