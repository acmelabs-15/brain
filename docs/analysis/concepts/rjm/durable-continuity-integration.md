---
package: rjm
name: Durable Continuity Integration
slug: durable-continuity-integration
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

# Durable Continuity Integration

## Definition — verbatim
> "### Durable Continuity Integration" — .claude/skills/reflect/references/integration-and-design.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/integration-and-design.md | 68 | defined here | Section detailing session-end triggers and Stop hook integration to ensure reflections persist across sessions. |

## Consumes
Session turn history, distinct skill invocation counts (≥3 skills), and Stop hook notification events.

## Produces
Durably committed memory observations persisted to disk before session termination.

## When applied
At session end or when Stop hooks signal high-confidence learnings across multi-skill workflows.

## Sub-concepts
none

## Part of
reflect

## Implementation status
defects: missing-path

## Design notes
A workflow integration pattern ensuring session continuity by binding reflection to session-end checklists and automated Stop hooks (triggering when ≥3 distinct skills were used), converting ephemeral conversation insights into durable disk artifacts.
