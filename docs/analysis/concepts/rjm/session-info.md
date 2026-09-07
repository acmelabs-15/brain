---
package: rjm
name: Session Info
slug: session-info
kind: artifact
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session Info

## Definition — verbatim
> "## Session Info" — .claude/skills/retrospective/references/learning-template.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 17 | defined here | Top-level metadata section in retrospective artifact capturing Date, Agents, Task Type, and Outcome. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 221 | defined here | Generated section in retrospective orchestrator script populating date and outcome flags. |

## Consumes
Session execution context, agent metadata, task type classification, and session outcome.

## Produces
Structured header section linking the retrospective artifact to its origin session.

## When applied
Instantiated at the beginning of artifact generation in Phase 0 / Phase 4.

## Sub-concepts
none

## Part of
learning-extraction-template

## Implementation status
clean

## Design notes
Session Info establishes the provenance and execution envelope of the retrospective artifact. Recording the session date, participating agents, task type, and overall outcome provides necessary search and indexing metadata for historical auditing.
