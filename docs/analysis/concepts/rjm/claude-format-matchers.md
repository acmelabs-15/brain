---
package: rjm
name: Claude-format matchers
slug: claude-format-matchers
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Claude-format matchers

## Definition — verbatim
(used, not defined)

> "Source: hook reference, Claude-format matchers and Matcher filtering." — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 151 | used here | Cited as vendor documentation source for Claude-format matcher semantics in Copilot CLI compatibility. |

## Consumes
Claude tool names, pipe-separated alternations, and case-sensitive whole-name regular expressions.

## Produces
Tool event matching compatibility allowing Claude-authored hook manifests to run in Copilot CLI.

## When applied
Applied when evaluating PreToolUse and PermissionRequest hooks registered with PascalCase compatibility keys.

## Sub-concepts
none

## Part of
matchers

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A compatibility matcher syntax supporting Claude Code conventions (e.g., literal tool names like `Bash` and alternations like `Edit|Write`) within Copilot CLI's hook runtime.
