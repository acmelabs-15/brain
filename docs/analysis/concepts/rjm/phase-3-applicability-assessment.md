---
package: rjm
name: Phase 3: Applicability Assessment
slug: phase-3-applicability-assessment
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

# Phase 3: Applicability Assessment

## Definition — verbatim
> "## Phase 3: Applicability Assessment (BLOCKING)" — .claude/skills/research-and-incorporate/references/workflow.md:223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 223 | defines | Heading defining the blocking third phase evaluating integration across agents, protocols, memory, and governance. |

## Consumes
Verified deep analysis document and project architecture context.

## Produces
Applicability section detailing integration points and priority assessment.

## When applied
Entered after passing Phase 2 verification in the research workflow.

## Sub-concepts
phase-3-verification

## Part of
research-and-incorporate-workflow

## Implementation status
defects: doc-drift

## Design notes
The third blocking phase of the research workflow systematically evaluating how newly researched concepts should be adopted across agents, protocols, memory, governance, and automation.
