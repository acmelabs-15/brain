---
package: matt
name: PreToolUse hook
slug: pretooluse-hook
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PreToolUse hook

## Definition — verbatim
> "Sets up a PreToolUse hook that intercepts and blocks dangerous git commands before Claude executes them." — skills/misc/git-guardrails-claude-code/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/SKILL.md | 8 | defined here | Introductory section defining the safety interception gate that runs before tool execution. |

## Consumes
Tool call input data passed via stdin (e.g. JSON with .tool_input.command).

## Produces
Exit code 0 to allow execution, or non-zero exit code (e.g. 2) with error output to abort the tool call.

## When applied
Invoked by the Claude Code harness immediately prior to executing a matched tool (such as Bash).

## Sub-concepts
none

## Part of
claude-code-hooks, git-guardrails-claude-code

## Implementation status
clean

## Design notes
A lifecycle gate that intercepts tool calls before execution, providing an automated barrier to prevent an autonomous agent from executing irreversible operations without human authority.
