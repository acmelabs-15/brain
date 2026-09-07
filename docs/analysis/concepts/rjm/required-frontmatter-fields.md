---
package: rjm
name: REQUIRED_FRONTMATTER_FIELDS
slug: required-frontmatter-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
  - {path: scripts/validation/validate_design_review.py, sha256: f661f67d438dac52a7cfbc335a1857408c16601a8a962cb387e637a2420ef671}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REQUIRED_FRONTMATTER_FIELDS

## Definition — verbatim
(used, not defined)

> "REQUIRED_FRONTMATTER_FIELDS = (" — scripts/validate_skill_installation.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 34 | defined here | Constant tuple defining mandatory YAML frontmatter fields required in SKILL.md files. |
| scripts/validation/validate_design_review.py | 21 | defined here | Constant set defining required YAML frontmatter fields in DESIGN-REVIEW markdown documents. |

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
defects: doc-drift

## Design notes
`REQUIRED_FRONTMATTER_FIELDS` is a configuration constant identifier specifying mandatory YAML frontmatter keys in skills and design reviews rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
