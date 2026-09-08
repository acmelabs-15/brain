---
package: rjm
name: Text status indicators
slug: text-status-indicators
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Text status indicators

## Definition — verbatim
> "- Text status indicators: [PASS], [FAIL], [WARNING], [COMPLETE], [BLOCKED]" — templates/agents/independent-thinker.shared.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/independent-thinker.shared.md | 33 | used here | Style guide requirement for standardized bracketed text status tokens. |
| templates/agents/janitor.shared.md | 27 | used here | Style guide requirement for standardized bracketed text status tokens. |
| templates/agents/merge-resolver.shared.md | 29 | used here | Style guide requirement for standardized bracketed text status tokens. |
| templates/agents/negotiation.shared.md | 26 | used here | Style guide requirement for standardized bracketed text status tokens. |

## Consumes
Tool execution outputs, gate checks, and process results.

## Produces
Machine-parseable and human-readable bracketed status indicators (`[PASS]`, `[FAIL]`, `[WARNING]`, `[COMPLETE]`, `[BLOCKED]`).

## When applied
Required across agent responses, style compliance sections, and handoff summaries.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A cross-agent style guide convention mandating uniform bracketed uppercase text status indicators (`[PASS]`, `[FAIL]`, `[WARNING]`, `[COMPLETE]`, `[BLOCKED]`) instead of emojis or decorative formatting, ensuring clean machine parseability and unambiguous status reporting across terminal harnesses.
