---
package: rjm
name: Phase 4: Memory Integration
slug: phase-4-memory-integration
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 4: Memory Integration

## Definition — verbatim
> "## Phase 4: Memory Integration (BLOCKING)" — .claude/skills/research-and-incorporate/references/workflow.md:310

## Also called — verbatim
> "Phase 4: MEMORY INTEGRATION (BLOCKING)" — .claude/skills/research-and-incorporate/SKILL.md:107

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 310 | defined here | Defined as blocking fourth phase detailing Serena project memory creation, 5-10 Forgetful atomic memories, memory linking, and skill enhancements. |
| .claude/skills/research-and-incorporate/SKILL.md | 107 | defined here | Outlined in skill process box as blocking memory integration phase. |

## Consumes
Verified analysis document with completed applicability section from Phase 3.

## Produces
Serena project memory, 5-10 atomic Forgetful memories, cross-memory links, and optional skill enhancements.

## When applied
Executed after Phase 3 verification passes in research-and-incorporate.

## Sub-concepts
serena-project-memory, forgetful-atomic-memories, link-related-memories, skill-enhancement

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The fourth phase of the research-and-incorporate workflow, responsible for transforming verified analysis and applicability findings into persistent, searchable project memory across Serena and Forgetful stores with proper attribution and linking.
