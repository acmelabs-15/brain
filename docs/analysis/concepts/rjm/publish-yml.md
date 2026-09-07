---
package: rjm
name: publish.yml
slug: publish-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_npm_package_metadata.py, sha256: a512033119983342b4e302a36cee1ec3ca2678492662c59de71861aac4bbd256}
  - {path: scripts/ci/verify_npm_published.py, sha256: fa15b877b242e367ca2210d209b6fb26ecb341e79078d4e7c4cbd9dae457e916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# publish.yml

## Definition — verbatim
(used, not defined)

> "Replaces the inline node -e block in publish.yml (issue #3533)." — scripts/ci/verify_npm_package_metadata.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_npm_package_metadata.py | 6 | used here | Referenced in docstring as the GitHub Actions workflow whose inline scripts were replaced by this validator. |
| scripts/ci/verify_npm_published.py | 6 | used here | Referenced in docstring as the GitHub Actions publishing workflow invoking the post-publish check. |

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
A GitHub Actions workflow file name (`publish.yml`) referenced in CI verification script docstrings, classified as `name-only` per D-023.
