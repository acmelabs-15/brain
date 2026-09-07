---
package: rjm
name: agent context
slug: agent-context
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent context

## Definition — verbatim
(used, not defined)

> "instructions into agent context." — .claude/skills/taste-lints/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 17 | used here | Cited as the working memory space into which custom lint error messages inject remediation instructions. |

## Consumes
System prompts, conversation history, tool outputs, and diagnostic remediation messages.

## Produces
Informed model reasoning and autonomous decision-making capacity.

## When applied
Present continuously during all agent interactions and tool invocations across the lifecycle.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The active working memory window of an autonomous coding agent that receives instructions, code context, and lint diagnostics to guide task execution.
