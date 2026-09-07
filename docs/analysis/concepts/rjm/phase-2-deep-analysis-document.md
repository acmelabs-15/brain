---
package: rjm
name: Phase 2: Deep Analysis Document
slug: phase-2-deep-analysis-document
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

# Phase 2: Deep Analysis Document

## Definition — verbatim
> "## Phase 2: Deep Analysis Document (BLOCKING)" — .claude/skills/research-and-incorporate/references/workflow.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 119 | defines | Section heading defining the blocking second phase producing a comprehensive analysis document. |

## Consumes
Verified Phase 1 research findings and structured synthesis.

## Produces
Comprehensive analysis document at `.agents/analysis/{topic-slug}.md` meeting word count and quality gates.

## When applied
Entered upon passing Phase 1 verification in the research and incorporate workflow.

## Sub-concepts
phase-2-verification

## Part of
research-and-incorporate-workflow

## Implementation status
defects: doc-drift

## Design notes
The second blocking phase of the research workflow where verified evidence is synthesized into an extensive, structured reference document under `.agents/analysis/{topic-slug}.md`.
