---
package: rjm
name: EXIT_NOT_PUBLISHED
slug: exit-not-published
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_npm_published.py, sha256: fa15b877b242e367ca2210d209b6fb26ecb341e79078d4e7c4cbd9dae457e916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_NOT_PUBLISHED

## Definition — verbatim
(used, not defined)

> "EXIT_NOT_PUBLISHED = 1" — scripts/ci/verify_npm_published.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_npm_published.py | 24 | defined here | Constant defining the exit code returned when package publication cannot be verified on the registry. |

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
defects: always-failing-gate

## Design notes
A Python constant identifier (`EXIT_NOT_PUBLISHED`) indicating unconfirmed package publication, classified as `name-only` per D-023.
