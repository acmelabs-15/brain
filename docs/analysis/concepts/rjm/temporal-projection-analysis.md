---
package: rjm
name: Temporal Projection Analysis
slug: temporal-projection-analysis
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

# Temporal Projection Analysis

## Definition — verbatim
> "### Step 1: Temporal Projection Analysis" — .claude/skills/skillforge/references/evolution-scoring.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 141 | defined here | Defines Step 1 of evolution scoring evaluating usage patterns, ecosystem shifts, and risks across four time horizons. |

## Consumes
Skill problem statement, proposed tooling, and surrounding ecosystem context.

## Produces
Multi-horizon projection report across 6 months, 1 year, 2 years, and 5 years.

## When applied
Applied as the first procedural step of evolution scoring during specification.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
A forecasting method that systematically examines potential failure modes, platform shifts, and usage evolution across expanding time horizons (6mo, 1yr, 2yr, 5yr) to uncover hidden obsolescence risks.
