---
package: rjm
name: Build CVA Matrix
slug: build-cva-matrix
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Build CVA Matrix

## Definition — verbatim
> "<name>Build CVA Matrix</name>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 219 | defined here | Defined as Phase 3 in the CVA skill specification process schema. |

## Consumes
Identified commonalities (rows) and variabilities across use cases (columns).

## Produces
Visual CVA Markdown table showing concrete cell values and relationship structures.

## When applied
Executed during Phase 3 of CVA analysis to synthesize commonalities and variabilities into a single artifact.

## Sub-concepts
cvamatrix, commonality

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Build CVA Matrix is Phase 3 of the CVA workflow defined in SKILL_SPEC.md. It renders the relationship between common invariant operations and variable use cases into a tabular matrix, transforming implicit assumptions into an explicit, auditable visual artifact. Without this phase, teams skip visual validation and fail to perceive structural patterns across dimensions, making pattern selection intuitive rather than empirical.
