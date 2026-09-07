---
package: rjm
name: Evolution Scoring Framework
slug: evolution-scoring-framework
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evolution Scoring Framework

## Definition — verbatim
> "# Evolution Scoring Framework" — .claude/skills/skillforge/references/evolution-scoring.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 1 | defined here | Defines the scoring methodology evaluating skill longevity, dependency stability, and anti-obsolescence. |

## Consumes
Candidate skill specifications, architecture patterns, and dependency declarations.

## Produces
Timelessness score (1-10) and approval verdict (pass threshold >= 7).

## When applied
Applied during skill evaluation and synthesis panel review to prevent technical debt and obsolescence.

## Sub-concepts
timelessness-scoring-rubric, temporal-projection-analysis, dependency-stability-assessment, extension-point-evaluation, anti-obsolescence-pattern-check, score-adjustment-factors, evolution-score-template

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
A structured evaluation framework measuring how well a skill will resist obsolescence over 6-month to 5-year horizons. It establishes a hard gate (score >= 7/10) to reject fragile, tightly-coupled, or ephemeral designs before generation.
