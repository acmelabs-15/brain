---
package: rjm
name: testpaths
slug: testpaths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# testpaths

## Definition — verbatim
(used, not defined)

> "testpaths = [\"tests\"]" — pyproject.toml:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| pyproject.toml | 68 | defined here | Pytest configuration setting specifying the root directory containing test files. |
| scripts/validation/check_zero_collection_tests.py | 17 | used here | Quoted in script documentation as the configuration contract governing pytest test discovery paths. |

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
clean (pyproject.toml), defects: orphan (check_zero_collection_tests.py)

## Design notes
testpaths is a pytest configuration key in pyproject.toml defining directories searched during test discovery rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
