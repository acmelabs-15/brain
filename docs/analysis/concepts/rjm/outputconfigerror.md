---
package: rjm
name: OutputConfigError
slug: outputconfigerror
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

# OutputConfigError

## Definition — verbatim
(used, not defined)

> "Output environment is missing required GitHub Actions fields." — scripts/ai_review_outputs.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 31 | defined here | Custom exception class raised when required GitHub Actions environment variables like RUNNER_TEMP are unset. |
| scripts/ci/build_ai_review_context.py | 20 | used here | Imported from ai_review_outputs to handle missing CI environment variable configurations during context builds. |

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
`OutputConfigError` is an exception class identifier in `ai_review_outputs.py` signaling missing CI configuration variables rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
