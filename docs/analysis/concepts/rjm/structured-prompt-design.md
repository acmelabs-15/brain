---
package: rjm
name: structured prompt design
slug: structured-prompt-design
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# structured prompt design

## Definition — verbatim
> "- [Agent Architecture Patterns](references/agent-architecture-patterns.md) - Skill budget rule, structured prompt design, diagnostic signals for agent reliability" — .claude/skills/analyze/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 71 | used here | Agent architecture technique for prompt formatting ensuring repeatable execution and diagnostic visibility. |

## Consumes
Task requirements and tool interface specifications.

## Produces
Formatted agent prompt structures with clear section delimitations, state requirements, and verification checklists.

## When applied
Applied when designing agent prompts and skill instruction templates.

## Sub-concepts
none

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
`structured prompt design` is the methodology of structuring agent instructions using XML tags, clear phase demarcations, and explicit state requirements to eliminate ambiguity and prevent reasoning drift.
