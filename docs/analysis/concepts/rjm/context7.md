---
package: rjm
name: Context7
slug: context7
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/context-hub-setup.md, sha256: df6e2fd17f0cae46d889f77dc4c7169422c86095ece9aace0c584738b429522f}
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context7

## Definition — verbatim
> "2. **Context7** - Framework documentation (recommended for `/context-gather`)" — .claude/commands/context-hub-setup.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/context-hub-setup.md | 14 | used here | Listed as a recommended prerequisite plugin for framework documentation in `/context-gather`. |
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 36 | used here | Designated as an always-on global MCP tool alongside Chrome DevTools to provide framework docs. |

## Consumes
Queries regarding framework APIs, software libraries, and external documentation.

## Produces
Up-to-date framework documentation and syntax references injected into agent context.

## When applied
When gathering external context, exploring library architectures, or querying framework usage patterns.

## Sub-concepts
none

## Part of
context-hub-setup

## Implementation status
defects: doc-drift, missing-path (.claude/commands/context-hub-setup.md:120, .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:2)

## Design notes
Context7 provides real-time access to authoritative framework documentation, preventing agents from hallucinating deprecated APIs or outdated syntax. By configuring it as an always-on global resource, rjm gives coding agents instant access to upstream documentation without the token overhead of raw web searching.
