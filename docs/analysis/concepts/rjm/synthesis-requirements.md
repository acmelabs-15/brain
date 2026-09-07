---
package: rjm
name: Synthesis Requirements
slug: synthesis-requirements
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Synthesis Requirements

## Definition — verbatim
> "### Synthesis Requirements (MUST include all)" — .claude/skills/research-and-incorporate/references/workflow.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 96 | defines | Checklist of mandatory content components required when synthesizing research findings. |
| .claude/skills/skillforge/references/specification-template.md | 280 | defines | XML verification block specifying unanimous approval and threshold scores from the synthesis panel. |

## Consumes
Researched quotes, frameworks, and candidate specifications.

## Produces
Comprehensive synthesis encompassing principles, frameworks, applications, failure modes, and panel consensus.

## When applied
Applied before completing Phase 1 research or finalizing skill specifications.

## Sub-concepts
none

## Part of
research-and-incorporate-workflow

## Implementation status
defects: doc-drift

## Design notes
A mandatory checklist defining the essential ingredients of valid synthesis, ensuring all analyses address foundations, models, concrete applications, failure modes, and panel consensus.
