---
package: rjm
name: Using CVA for Single Use Case
slug: using-cva-for-single-use-case
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Using CVA for Single Use Case

## Definition — verbatim
> "<description>Using CVA for Single Use Case (no comparison possible)</description>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:468

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 468 | defined here | Defined in SKILL_SPEC as a minor anti-pattern applying CVA when no comparison basis exists. |
| .claude/skills/cva-analysis/SKILL.md | 333 | defined here | Noted in SKILL.md anti-patterns instructing engineers to defer CVA until at least two use cases exist. |

## Consumes
Single-feature requirements, standalone isolated use cases without comparative family members.

## Produces
Degenerate 1x1 matrices, wasted analysis effort, speculative generalization without comparative basis.

## When applied
Checked during CVA gating to bypass analysis for single-use-case scenarios.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Using CVA for Single Use Case is an anti-pattern highlighting a boundary condition of Commonality-Variability Analysis: CVA fundamentally requires two or more use cases to establish commonalities and differences. Running CVA on an isolated, single use case results in a meaningless 1x1 matrix with no empirical basis for abstraction discovery. rjm enforces that single use cases must proceed with simple, concrete implementations under YAGNI until a second concrete variant emerges.
