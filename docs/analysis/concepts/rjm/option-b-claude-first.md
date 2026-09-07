---
package: rjm
name: Option B: Claude-First
slug: option-b-claude-first
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Option B: Claude-First

## Definition — verbatim
> "**Option B: Claude-First**. Claude Code agents are the canonical source. VS Code and Copilot CLI agents are derived from Claude agents through a transformation script." — .agents/architecture/ADR-052-template-strategy.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-052-template-strategy.md | 79 | defined here | Architectural decision selecting Claude Code agent prompts as canonical source for generating other platform variants. |

## Consumes
Canonical Claude Code agent prompt files (`src/claude/`) and platform transformation rules.

## Produces
Derived agent files formatted for VS Code Copilot Chat and GitHub Copilot CLI.

## When applied
Adopted by ADR-052 as the target distribution architecture for eliminating the redundant intermediate shared template layer.

## Sub-concepts
- platform-overrides

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Option B: Claude-First is the architectural strategy chosen in ADR-052 to govern multi-platform agent distribution. Under this pattern, Claude Code prompt definitions serve as the authoritative system of record, while secondary platforms (VS Code and Copilot CLI) receive generated projections derived via automated build transformations. This design reduces maintenance overhead from three parallel trees to a single source with deterministic derivation.
