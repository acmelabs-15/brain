---
package: rjm
name: Context Engineering
slug: context-engineering
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context Engineering

## Definition — verbatim
> "## 3-File Planning Pattern (Context Engineering)" — .claude/skills/analyze/references/agent-architecture-patterns.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 24 | defined here | Subtitled under the 3-file planning pattern to describe systematic management of agent context. |

## Consumes
Context window token limits, session histories, and attention constraints.

## Produces
Context optimization strategies including external state caching, structured files, and tool pruning.

## When applied
Applied continuously across multi-turn agent workflows to maintain high reasoning quality.

## Sub-concepts
3-file-planning-pattern, attention-manipulation, think-in-code-principle

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path

## Design notes
Context Engineering encompasses deliberate techniques for managing and shaping the token stream provided to LLM agents. Instead of treating context as an unmanaged buffer, context engineering minimizes token bloat through file externalization, structured compaction hooks, and targeted attention manipulation, avoiding memory degradation and erratic model behavior.
