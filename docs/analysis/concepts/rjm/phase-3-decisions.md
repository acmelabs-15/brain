---
package: rjm
name: "Phase 3: Decisions"
slug: phase-3-decisions
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3: Decisions

## Definition — verbatim
> "## Phase 3: Decisions" — .claude/skills/retrospective/scripts/run_retrospective.py:253

## Also called — verbatim
Phase 3: Decide What to Do — .claude/skills/retrospective/SKILL.md:123

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 253 | defined here | Section heading in generated artifact structuring action classification, SMART validation, and sequencing. |

## Consumes
Diagnosed root causes, success patterns, and prioritized findings from Phase 2.

## Produces
Action classifications (Keep/Drop/Add/Modify), SMART validation outcomes, and dependency-ordered action sequences.

## When applied
Applied after diagnosis to transition analytical findings into actionable, concrete decisions.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
clean

## Design notes
Phase 3: Decisions bridges retrospective diagnosis and learning extraction by turning prioritized findings into concrete, SMART-validated actions. By requiring explicit classification of changes and dependency sequencing, this phase ensures that retrospective outcomes are pragmatic and directly executable rather than vague aspirations.
