---
package: rjm
name: PRD
slug: prd
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PRD

## Definition — verbatim
> "The gate emits a Markdown block embedded into the PRD as its first section" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 101 | used here | Cited as the core specification artifact into which Step 6 embeds the Prior Art / Constraints section. |
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 1 | used here | Header title of the archival planning document for AI PR Quality Gate Prompt Refinement. |
| .agents/archive/planning/PRD-skills-index-registry.md | 1 | used here | Header title of the archival planning document for the Skills Index Registry. |
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 106 | used here | Mandates that the structured Step 0 block be produced as the first section of the PRD. |

## Consumes
Problem statement, requirements interview elicitation, Step 0 answers, and Prior Art block.

## Produces
Comprehensive product requirements document specifying scope, user stories, acceptance criteria, and constraints.

## When applied
Produced during the specification phase (Step 2 and Step 6) to guide downstream planning and implementation.

## Sub-concepts
prior-art-constraints, step-0

## Part of
rjm:spec

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
The primary functional specification artifact in the rjm lifecycle that defines requirements, user stories, and acceptance criteria while incorporating mandatory prior art and first-principles demand sections.
