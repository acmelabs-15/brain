---
package: rjm
name: Standalone Configuration
slug: standalone-configuration
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Standalone Configuration

## Definition — verbatim
> "### Plugin vs Standalone Configuration" — .agents/analysis/claude-code-plugin-marketplaces.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 44 | defined here | Contrasted against plugins as a direct local `.claude/` directory configuration pattern. |

## Consumes
Local `.claude/` directory structure, unbundled commands, and standalone skill definitions.

## Produces
Direct, project-specific agent commands and capabilities without plugin packaging overhead.

## When applied
Applied for rapid prototyping, individual developer workflows, and project-specific customizations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Standalone Configuration represents the unbundled pattern of placing agent commands and skills directly in `.claude/` for lightweight local use, contrasted with formal plugin packaging and distribution.
