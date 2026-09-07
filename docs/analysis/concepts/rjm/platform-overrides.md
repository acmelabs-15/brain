---
package: rjm
name: platform-overrides
slug: platform-overrides
kind: artifact
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

# platform-overrides

## Definition — verbatim
> "no `platform-overrides/` directory exists." — .agents/architecture/ADR-052-template-strategy.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-052-template-strategy.md | 18 | defined here | Planned directory holding per-agent and per-platform customization patches and frontmatter mappings. |

## Consumes
Platform-specific frontmatter definitions, tool mappings, and agent customization patches.

## Produces
Override configurations applied during automated multi-platform agent generation from canonical Claude sources.

## When applied
Used during automated build transformations when projecting canonical Claude Code agent prompts to VS Code or Copilot CLI formats.

## Sub-concepts
none

## Part of
- option-b-claude-first

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
`platform-overrides` is a planned configuration directory designed in ADR-052 to store platform-specific customizations (such as VS Code tool definitions and Copilot model identifiers) separately from the shared prompt body. This design allows canonical Claude Code agents to remain the single source of truth for agent behavior while supporting platform-specific syntax without forking prompt prose.
