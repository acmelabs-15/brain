---
package: rjm
name: SECRET_ENVIRONMENT_VARIABLES
slug: secret-environment-variables
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SECRET_ENVIRONMENT_VARIABLES

## Definition — verbatim
(used, not defined)

> "SECRET_ENVIRONMENT_VARIABLES = (" — scripts/ai_review_outputs.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 17 | defined here | Tuple defining sensitive environment variable names whose values must be redacted from review context outputs. |
| scripts/ci/build_ai_review_context.py | 34 | used here | Imported from retry helpers to ensure credentials and bot tokens are masked in generated context files. |

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
`SECRET_ENVIRONMENT_VARIABLES` is an internal configuration tuple identifier in review scripts listing token names for redaction rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
