---
package: rjm
name: System Boundaries
slug: system-boundaries
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# System Boundaries

## Definition — verbatim
> "### 2. System Boundaries" — .claude/skills/review/references/architect.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 64 | defined here | Focus area checking module boundaries, separation of concerns, and architectural layering. |

## Consumes
Module definitions, inter-module imports, and cross-cutting concern implementations.

## Produces
Findings on boundary violations, inappropriate layer bypassing, or leaky concerns.

## When applied
Applied during architect PR review when code touches module boundaries or cross-cutting systems.

## Sub-concepts
none

## Part of
architect

## Implementation status
clean

## Design notes
An architect review focus area in rjm verifying that proposed changes respect module boundaries, maintain proper architectural layering, and preserve separation of concerns.
