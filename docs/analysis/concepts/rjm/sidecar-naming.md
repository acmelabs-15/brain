---
package: rjm
name: Sidecar Naming
slug: sidecar-naming
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Sidecar Naming

## Definition — verbatim
> "### Agent Sidecar Naming: `{skill-name}-observations.md`" — .claude/skills/reflect/references/integration-and-design.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/integration-and-design.md | 44 | defined here | Architectural design decision prescribing the standard `{skill-name}-observations.md` sidecar convention. |

## Consumes
Skill and agent domain names.

## Produces
Standardized file paths (`.serena/memories/{skill-name}-observations.md`) registered in the memory index.

## When applied
When persisting or indexing new skill observation memories during reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
defects: missing-path

## Design notes
Architectural naming convention aligning skill observation memory files with the ADR-007 agent sidecar pattern (`{skill-name}-observations.md`), ensuring deterministic file discovery and preventing orphaned learnings.
