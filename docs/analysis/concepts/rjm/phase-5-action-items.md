---
package: rjm
name: Phase 5: Action Items
slug: phase-5-action-items
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

# Phase 5: Action Items

## Definition — verbatim
> "## Phase 5: Action Items" — .claude/skills/research-and-incorporate/references/workflow.md:429

## Also called — verbatim
> "Phase 5: ACTION ITEMS" — .claude/skills/research-and-incorporate/SKILL.md:116

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 429 | defined here | Defined as the final phase creating GitHub issues for identified work and recording deliverables in durable handoffs. |
| .claude/skills/research-and-incorporate/SKILL.md | 116 | defined here | Listed in the process diagram as the fifth phase for GitHub issue creation and session documentation. |

## Consumes
Identified implementation proposals and completed research artifacts from earlier phases.

## Produces
Issue body file (`.agents/analysis/{topic-slug}-issue-body.md`), GitHub issue, and durable handoff record.

## When applied
Executed as the final phase of research-and-incorporate when concrete implementation tasks have been identified.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The terminal phase of research-and-incorporate ensuring that actionable engineering recommendations resulting from research are persisted into tracker issues via scripts and documented in handoff logs.
