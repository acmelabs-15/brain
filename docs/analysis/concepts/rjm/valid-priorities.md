---
package: rjm
name: VALID_PRIORITIES
slug: valid-priorities
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
  - {path: scripts/validation/validate_design_review.py, sha256: f661f67d438dac52a7cfbc335a1857408c16601a8a962cb387e637a2420ef671}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_PRIORITIES

## Definition — verbatim
(used, not defined)

> "VALID_PRIORITIES = (\"P0\", \"P1\", \"P2\", \"P3\")" — scripts/validation/check_dual_priority_labels.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 15 | used here | Quoted in docstrings referencing canonical priority label constants. |
| scripts/validation/validate_design_review.py | 23 | defined here | Constant set specifying valid priority values in design review frontmatter. |

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
defects: orphan

## Design notes
A constant tuple/set specifying valid task and issue priority classifications, classified as name-only per D-023.
