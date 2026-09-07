---
package: rjm
name: Forked Context
slug: forked-context
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Forked Context

## Definition — verbatim
> "## Forked Context for Panel Agents" — .claude/skills/skillforge/references/synthesis-protocol.md:434

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 434 | defined here | Section heading introducing isolated sub-agent process execution where context is not inherited from the parent. |

## Consumes
Task prompt, isolated skill definition with context: fork, and specified agent type.

## Produces
Execution results returned to parent conversation upon sub-agent termination.

## When applied
Applied when a skill requires complete context isolation, such as security-sensitive reviews or unpolluted fresh-state evaluations.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
An execution architecture pattern in Claude Code where an agent runs in a distinct sub-process with independent history rather than inheriting parent context, preventing contamination at the cost of duplicate prompt overhead.
