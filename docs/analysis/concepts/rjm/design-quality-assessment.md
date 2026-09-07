---
package: rjm
name: Design Quality Assessment
slug: design-quality-assessment
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design Quality Assessment

## Definition — verbatim
> "### Design Quality Assessment" — .claude/skills/review/references/architect.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 120 | defined here | Section heading for the 1-5 rating table evaluating pattern adherence, boundaries, coupling, cohesion, and extensibility. |

## Consumes
Architectural analysis of the pull request diff across structural design dimensions.

## Produces
A structured markdown table rating pattern adherence, boundary respect, coupling, cohesion, and extensibility on a 1-5 scale with explanatory notes.

## When applied
When structuring the output report of an architectural review.

## Sub-concepts
overall-design-score

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A standardized output section in rjm's architectural review that scores five foundational software design dimensions on a 1-5 scale, providing a structured rubric for assessing codebase architecture.
