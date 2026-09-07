---
package: rjm
name: Phase 1: Research and Context Gathering
slug: phase-1-research-and-context-gathering
kind: phase
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

# Phase 1: Research and Context Gathering

## Definition — verbatim
> "## Phase 1: Research and Context Gathering (BLOCKING)" — .claude/skills/research-and-incorporate/references/workflow.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 19 | defines | Section header defining the blocking first phase covering existing knowledge checks and external research. |

## Consumes
Research topic, URLs, and project memories.

## Produces
Verbatim quotes, web search results, and synthesis requirements satisfying verification criteria.

## When applied
Initiated at the beginning of the research and incorporate workflow.

## Sub-concepts
existing-knowledge-check, external-research, two-step-analysis, phase-1-verification

## Part of
research-and-incorporate-workflow

## Implementation status
defects: doc-drift

## Design notes
The initial blocking phase of research that audits existing project memory to prevent duplicate effort before conducting disciplined external research via grounded quote extraction.
