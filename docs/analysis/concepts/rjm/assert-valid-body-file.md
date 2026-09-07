---
package: rjm
name: assert_valid_body_file
slug: assert-valid-body-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# assert_valid_body_file

## Definition — verbatim
(used, not defined)

> "def assert_valid_body_file(body_file: str, allowed_base: str | None = None) -> None:" — scripts/github_core/validation.py:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/validation.py | 161 | defined here | Asserts that a body file exists and resides within permitted repository or scratch boundaries. |

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
A parameter assertion function (`assert_valid_body_file`) for guarding body file inputs rather than an SDLC lifecycle concept, classified as `name-only` per D-023.
