---
package: rjm
name: RUNNER_TEMP
slug: runner-temp
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RUNNER_TEMP

## Definition — verbatim
(used, not defined)

> "runner_temp = os.environ.get(\"RUNNER_TEMP\")" — scripts/ai_review_outputs.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 70 | used here | Environment variable queried to resolve the temporary workspace directory for review files. |
| scripts/ci/spec_extract_refs.py | 12 | used here | Documented and read as the temporary working directory for extracted specification references. |
| scripts/ci/spec_load_content.py | 11 | used here | Documented and read as the base scratch directory for downloaded specification content. |

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
defects: orphan, missing-path

## Design notes
`RUNNER_TEMP` is a standard GitHub Actions runner environment variable specifying the temporary directory path rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
