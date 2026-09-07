---
package: rjm
name: Actionable
slug: actionable
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Actionable

## Definition — verbatim
> "Include pattern/example/pitfall, not just theory" — .claude/skills/research-and-incorporate/references/workflow.md:362

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 362 | defined here | Specified as the third constraint under RULE 0, demanding practical patterns, examples, or pitfalls rather than purely theoretical descriptions. |

## Consumes
Theoretical concepts and abstract research.

## Produces
Pragmatic memory content containing application patterns, concrete examples, and pitfalls.

## When applied
Applied during memory creation in Phase 4 of research-and-incorporate.

## Sub-concepts
none

## Part of
forgetful-atomic-memories, phase-4-memory-integration

## Implementation status
defects: doc-drift

## Design notes
A quality requirement for memory items ensuring that knowledge retained by agents contains concrete patterns, failure modes, and guidance that can directly inform software engineering tasks.
