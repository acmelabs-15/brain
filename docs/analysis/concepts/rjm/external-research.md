---
package: rjm
name: External Research
slug: external-research
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

# External Research

## Definition — verbatim
> "### External Research" — .claude/skills/research-and-incorporate/references/workflow.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 45 | defines | Subsection defining protocol for fetching external URLs and conducting web searches with two-step analysis. |

## Consumes
External URLs and targeted web search queries.

## Produces
Extracted verbatim quotes and summarized external documentation.

## When applied
Executed during Phase 1 when external URLs are provided or web searches are necessary.

## Sub-concepts
two-step-analysis, normal-research-failures

## Part of
phase-1-research-and-context-gathering

## Implementation status
defects: doc-drift

## Design notes
A structured external information retrieval technique combining URL fetching with permission fallbacks and targeted web searches to gather primary source evidence.
