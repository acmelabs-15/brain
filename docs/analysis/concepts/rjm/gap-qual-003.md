---
package: rjm
name: GAP-QUAL-003
slug: gap-qual-003
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md, sha256: f92484a428624acb2a63ba01debe7986e783a7eb8a6a26e15e352b126f2d3202}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GAP-QUAL-003

## Definition — verbatim
(used, not defined)

> "#### GAP-QUAL-003: Hardcoded Temp Paths" — .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md:304

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md | 304 | defines | Defect identifier cataloging hardcoded temporary file paths prone to race conditions in concurrent CI runs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
code-quality-gaps

## Implementation status
defects: missing-path

## Design notes
A defect identifier documenting hardcoded temporary file paths in action scripts; it is an issue identifier rather than a lifecycle concept.
