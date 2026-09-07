---
package: rjm
name: Memory or files read this session
slug: memory-or-files-read-this-session
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Memory or files read this session

## Definition — verbatim
> "2. **Memory or files read this session.** Content you opened in this session via Read, Grep, or Glob. Strong, but lower than (1) because the file may have changed since you read it; re-read before citing if the gap is wide." — .claude/agents/implementer.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 29 | defined here | Designated as Level 2 evidence, strong but lower than tool execution due to potential file mutation. |
| templates/agents/implementer.shared.md | 38 | defined here | Shared implementer template defining Level 2 evidence from session file inspections. |

## Consumes
File contents, search outputs, directory listings, and project memory retrieved via read tools during the session.

## Produces
Level 2 circumstantial evidence grounding claims in observed repository state.

## When applied
Applied when referencing codebase structures, existing types, configurations, or recorded project decisions.

## Sub-concepts
none

## Part of
four-level-hierarchy, evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Constitutes Level 2 evidence in the rjm hierarchy. While direct inspection of files and project memories provides strong grounding in repository reality, it ranks below active tool execution because files may change concurrently or become stale over extended multi-step sessions, necessitating re-reading when temporal gaps widen.
