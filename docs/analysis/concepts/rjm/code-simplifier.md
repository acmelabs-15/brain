---
package: rjm
name: code-simplifier
slug: code-simplifier
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# code-simplifier

## Definition — verbatim
> "Use this agent when code has been written or modified and needs to be simplified for clarity, consistency, and maintainability while preserving all functionality." — .claude/agents/code-simplifier.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-simplifier.md | 2 | defined here | Agent frontmatter and prompt defining the post-hoc code refinement and simplification persona. |
| docs/agent-catalog.md | 20 | used here | Agent catalog entry describing role, trigger conditions, and scope for simplifying modified code. |

## Consumes
Recently written or modified code, diffs, functions, and accompanying unit tests.

## Produces
Rewrite diffs or structured refactoring recommendations that improve code clarity and maintainability while preserving observable behavior.

## When applied
Triggered automatically after completing a coding task or writing a logical chunk of code.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
The code-simplifier agent is a specialized support persona dedicated to post-hoc code refinement. By reviewing newly written or modified code for clarity over brevity, eliminating nested ternaries, ensuring comment hygiene, and applying language-native idioms without altering functionality, it allows implementers to focus on functional correctness while ensuring long-term code maintainability.
