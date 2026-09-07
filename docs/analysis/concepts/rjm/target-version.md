---
package: rjm
name: target-version
slug: target-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# target-version

## Definition — verbatim
(used, not defined)

> "target-version = \"py310\"" — pyproject.toml:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| pyproject.toml | 105 | defined here | Ruff configuration setting restricting emitted Python syntax to the 3.10 interpreter floor. |

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
target-version is a Ruff linter configuration key in pyproject.toml pinning target Python language features rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
