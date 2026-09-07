---
package: rjm
name: Evolution Score Template
slug: evolution-score-template
kind: template
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

# Evolution Score Template

## Definition — verbatim
> "## Evolution Score Template" — .claude/skills/skillforge/references/evolution-scoring.md:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 323 | defined here | Defines the standard markdown template for recording base scores, adjustments, final score, and verdict. |

## Consumes
Evolution scoring evaluation data and reviewer feedback.

## Produces
Standardized markdown evolution score section within the skill specification or review artifact.

## When applied
Applied at the conclusion of evolution analysis to format the official score and verdict.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
A structured template ensuring uniform reporting of base criterion scores, adjustments, final timelessness rating, and actionable remediation requirements across all evaluated skills.
