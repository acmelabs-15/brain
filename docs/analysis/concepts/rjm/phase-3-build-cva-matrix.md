---
package: rjm
name: Phase 3: Build CVA Matrix
slug: phase-3-build-cva-matrix
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

# Phase 3: Build CVA Matrix

## Definition — verbatim
> "### Phase 3: Build CVA Matrix" — .claude/skills/cva-analysis/SKILL.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 140 | defined here | Third phase of Commonality Variability Analysis where commonality rows and variability columns are assembled into a 2D matrix table. |

## Consumes
Commonalities identified in Phase 1 and variabilities identified in Phase 2 across two or more requirements or use cases.

## Produces
A 2D CVA matrix rendered as a Markdown table (at least 2×2) showing concrete implementations for each commonality/variability pair.

## When applied
Executed during CVA analysis after extracting commonalities and variabilities across use cases.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift

## Design notes
In `cva-analysis`, `Phase 3: Build CVA Matrix` constructs the foundational 2D table correlating commonalities (rows) against variabilities (columns) across multiple use cases, transforming implicit architectural assumptions into an explicit structural artifact from which design patterns can naturally emerge.
