---
package: rjm
name: Existing Knowledge Check
slug: existing-knowledge-check
kind: gate
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

# Existing Knowledge Check

## Definition — verbatim
> "### Pre-Work: Existing Knowledge Check" — .claude/skills/research-and-incorporate/references/workflow.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 21 | defines | Pre-work step requiring querying project memories and existing knowledge before conducting external research. |

## Consumes
Topic keywords and project memory stores.

## Produces
Identified related ADRs, protocols, skills, and existing memories.

## When applied
Executed before initiating external research.

## Sub-concepts
none

## Part of
phase-1-research-and-context-gathering

## Implementation status
defects: doc-drift

## Design notes
A mandatory pre-research gate querying project memories and existing repository artifacts to discover what is already known and prevent redundant investigations.
