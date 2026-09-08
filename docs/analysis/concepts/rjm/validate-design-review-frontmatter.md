---
package: rjm
name: validate_design_review_frontmatter
slug: validate-design-review-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_design_review.py, sha256: f661f67d438dac52a7cfbc335a1857408c16601a8a962cb387e637a2420ef671}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_design_review_frontmatter

## Definition — verbatim
(used, not defined)

> "def validate_design_review_frontmatter(repo_root: Path) -> bool:" — scripts/validation/validate_design_review.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_design_review.py | 27 | defined here | Function checking DESIGN-REVIEW markdown files for required frontmatter fields and blocking consistency. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Python validation function in validate_design_review.py executing design review frontmatter verification rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
