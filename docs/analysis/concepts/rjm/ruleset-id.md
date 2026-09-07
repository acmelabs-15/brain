---
package: rjm
name: RULESET_ID
slug: ruleset-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruleset_required_contexts.py, sha256: e20d3bab6c5e8d2312db178d5a46b54f27f0a1fc6401ccd229996a4f7f57234b}
  - {path: scripts/validation/ruleset_params_baseline.json, sha256: 02f34be33d286be3183642951eefeebfeebbdb6490b05ea7c8d45767393b7e91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RULESET_ID

## Definition — verbatim
(used, not defined)

> "RULESET_ID = \"11104075\"" — scripts/ci/ruleset_required_contexts.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruleset_required_contexts.py | 7 | defined here | Constant identifying the target GitHub branch protection ruleset ID for query verification. |
| scripts/validation/ruleset_params_baseline.json | 2 | defined here | JSON configuration key specifying the expected GitHub ruleset numerical identifier. |

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
`RULESET_ID` is a constant identifier specifying the GitHub repository protection ruleset numerical ID rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
