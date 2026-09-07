---
package: rjm
name: Danger Signs
slug: danger-signs
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Danger Signs

## Definition — verbatim
> "## Danger Signs" — .claude/skills/cva-analysis/references/multidimensional-cva.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 61 | defined here | Checklist of diagnostic warning indicators in multidimensional CVA analysis. |

## Consumes
Draft multidimensional CVA matrices and cross-cutting analysis tables.

## Produces
Validation warnings flagging sparse matrices (>30% empty cells), ambiguous cross-matrix rows, or invariant rows that should be constants.

## When applied
Applied when reviewing and validating multidimensional CVA matrices prior to architectural pattern commitment.

## Sub-concepts
none

## Part of
multidimensional-cva

## Implementation status
defects: missing-path

## Design notes
A quality gate checklist for multidimensional CVA in rjm specifying explicit quantitative red flags (such as exceeding 30% empty cells or finding identical cells across a row), preventing architects from forcing unrelated concerns into a single dimension or abstracting invariant behaviors.
