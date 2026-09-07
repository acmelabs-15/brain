---
package: rjm
name: Claude Code Delta
slug: claude-code-delta
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Claude Code Delta

## Definition — verbatim
> "Claude Code is a separate contract:" — .claude/skills/agent-harness-reference/SKILL.md:263

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 261 | defines | Comparative matrix contrasting hook execution dimensions between Claude Code and Copilot CLI. |

## Consumes
Claude Code and Copilot CLI hook specifications and empirical comparison matrices.

## Produces
Architectural understanding of cross-harness differences in environment variables, cwd resolution, and event models.

## When applied
Applied when porting skills, commands, or hooks between Claude Code and Copilot CLI.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
A comparison reference highlighting the key architectural contrasts between Claude Code and Copilot CLI. By making explicit the differing assumptions around root resolution, event schemas, and timeout policies, it prevents invalid generalizations across agent execution engines.
