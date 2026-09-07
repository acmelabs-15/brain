---
package: rjm
name: Extracted Learnings
slug: extracted-learnings
kind: artifact
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Extracted Learnings

## Definition — verbatim
> "## Phase 4: Extracted Learnings" — .claude/skills/retrospective/references/learning-template.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 62 | defined here | Phase 4 section of retrospective artifact defining structured, atomic learning entries. |

## Consumes
Validated action decisions from Phase 3 and empirical evidence from Phase 0.

## Produces
Structured learning items with atomic statements, atomicity scores, evidence citations, and skill operation targets.

## When applied
Applied in Phase 4 of retrospective execution to transform insights into persistent knowledge items.

## Sub-concepts
none

## Part of
learning-extraction-template

## Implementation status
clean

## Design notes
Extracted Learnings defines the standardized container for operational insights ready for permanent storage. Each entry enforces atomicity constraints (maximum 15 words, measurable impact, concrete trigger) to ensure that lessons learned can be cleanly retrieved and applied in future sessions.
