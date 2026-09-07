---
package: rjm
name: Phase 5: Validation and Handoff
slug: phase-5-validation-and-handoff
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 5: Validation and Handoff

## Definition — verbatim
> "### Phase 5: Validation and Handoff" — .claude/skills/cva-analysis/SKILL.md:263

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 263 | defined here | Fifth phase of Commonality Variability Analysis validating matrix structure via script and routing decisions to downstream review agents. |

## Consumes
Pattern recommendations, CVA matrix Markdown file, and ADR stub.

## Produces
Matrix validation report via `validate-cva-matrix.py`, routed tasks to `decision-critic` and `architect` agent, and documented reassessment triggers.

## When applied
Executed as the final stage of CVA analysis following pattern mapping and ADR stub creation.

## Sub-concepts
adr-stub, validate-cva-matrix-py

## Part of
cva-analysis

## Implementation status
defects: doc-drift

## Design notes
`Phase 5: Validation and Handoff` establishes a quality and governance gate for CVA analysis by executing automated script validation on matrix dimensions and completeness, routing recommended abstractions to `decision-critic` for stress testing and `architect` for ADR formalization, and establishing concrete reassessment triggers.
