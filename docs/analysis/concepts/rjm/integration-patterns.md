---
package: rjm
name: Integration Patterns
slug: integration-patterns
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration Patterns

## Definition — verbatim
> "### How Scripts Are Called from Skills" — .claude/skills/skillforge/references/script-integration-framework.md:327

## Also called — verbatim
> "## Integration Patterns" — .claude/skills/skillforge/references/script-integration-framework.md:325

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 325 | defined here | Defines the patterns governing how skill markdown instructions invoke underlying executable scripts. |

## Consumes
Script executables, CLI arguments, stdin pipes, and environment variables.

## Produces
Standardized invocation commands (Direct, Conditional, Piped, Subcommand) embedded in SKILL.md.

## When applied
When documenting how an agent should execute scripts from within skill markdown instructions.

## Sub-concepts
none

## Part of
script-integration-framework

## Implementation status
clean

## Design notes
Establishes four standardized ways for Claude Code skills to invoke external scripts (direct execution, conditional routing, piped data transformation, and subcommands), creating consistent execution contracts.
