---
package: rjm
name: BLOCK_THRESHOLD
slug: block-threshold
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_scope_explosion.py, sha256: d7bfbd26d4d3d5afd838adcbee0815b32f7730ca41ef2f7ce98c686f5870bfa9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCK_THRESHOLD

## Definition — verbatim
(used, not defined)

> "BLOCK_THRESHOLD = 50" — scripts/detect_scope_explosion.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_scope_explosion.py | 50 | defined here | Constant defining the hard blocking threshold of 50 changed files for pull request scope tracking. |

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
defects: exit-code-mismatch, missing-path

## Design notes
BLOCK_THRESHOLD is a constant integer identifier in scripts/detect_scope_explosion.py specifying hard file blocking limits rather than an operational lifecycle concept.
