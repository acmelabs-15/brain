---
package: rjm
name: escaped_newline_body_error
slug: escaped-newline-body-error
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

# escaped_newline_body_error

## Definition — verbatim
(used, not defined)

> "def escaped_newline_body_error(body: str | None) -> str | None:" — scripts/github_core/validation.py:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/validation.py | 200 | defined here | Checks whether an inline Markdown body contains literal backslash-n sequences without newlines. |

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
A validation function (`escaped_newline_body_error`) for detecting unexpanded literal newlines in Markdown comments rather than an SDLC lifecycle concept, classified as `name-only` per D-023.
