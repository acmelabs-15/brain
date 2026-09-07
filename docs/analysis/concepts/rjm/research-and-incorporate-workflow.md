---
package: rjm
name: Research and Incorporate Workflow
slug: research-and-incorporate-workflow
kind: technique
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

# Research and Incorporate Workflow

## Definition — verbatim
> "# Research and Incorporate Workflow" — .claude/skills/research-and-incorporate/references/workflow.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 1 | defines | Document title introducing multi-phase research, analysis, and integration process. |

## Consumes
Research topic, external URLs, search queries, and existing project memories.

## Produces
Deep analysis document and integrated project knowledge.

## When applied
Used when conducting deep research on external methodologies, libraries, or architectures.

## Sub-concepts
phase-1-research-and-context-gathering, phase-2-deep-analysis-document, phase-3-applicability-assessment

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift

## Design notes
A structured multi-phase protocol for thoroughly investigating external concepts, validating findings against existing codebase context, producing deep analytical documentation, and systematically integrating insights into agent systems.
