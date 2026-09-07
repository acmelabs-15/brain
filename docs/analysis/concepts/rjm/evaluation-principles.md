---
package: rjm
name: Evaluation Principles
slug: evaluation-principles
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evaluation Principles

## Definition — verbatim
> "## Evaluation Principles" — .claude/skills/review/references/qa.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 43 | defined here | Core review principles defining four rules for QA evaluation: Evidence-Based, Quantitative, Defense in Depth, and Context-Aware. |

## Consumes
Pull request diffs, code locations, measurable quality criteria, and PR type classifications.

## Produces
Rigorous, evidence-based review verdicts supported by concrete code citations and quantitative metrics.

## When applied
Applied throughout QA pull request reviews to guide evaluative reasoning and verdict formulation.

## Sub-concepts
none

## Part of
qa-review

## Implementation status
clean

## Design notes
The foundational methodology principles in rjm governing QA review, mandating that reviewers ground all findings in cited code locations, apply quantitative thresholds rather than subjective impressions, focus deeply on failure modes, and adjust scrutiny dynamically based on PR type.
