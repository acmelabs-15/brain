---
package: matt
name: Claude Code hooks
slug: claude-code-hooks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Code hooks

## Definition — verbatim
(used, not defined)

> "Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute." — skills/misc/git-guardrails-claude-code/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/SKILL.md | 3 | used here | Frontmatter description citing hooks as the interception mechanism for blocking dangerous commands. |
| skills/misc/README.md | 5 | used here | Catalog summary describing the use of hooks to intercept dangerous git commands before execution. |

## Consumes
Harness event trigger and matching configuration in settings.json.

## Produces
Interception and execution of custom scripts on agent tool events.

## When applied
Configured in settings.json to trigger external scripts during Claude Code tool execution cycles.

## Sub-concepts
pretooluse-hook

## Part of
git-guardrails-claude-code

## Implementation status
clean

## Design notes
Claude Code's native extensibility mechanism allowing external shell scripts to run before or after tool invocations, used by safety guardrails to inspect tool arguments and abort destructive commands before execution.
