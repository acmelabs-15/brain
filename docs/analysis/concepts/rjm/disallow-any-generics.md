---
package: rjm
name: disallow_any_generics
slug: disallow-any-generics
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

# disallow_any_generics

## Definition — verbatim
(used, not defined)

> "disallow_any_generics = true" — pyproject.toml:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| pyproject.toml | 184 | defined here | Mypy configuration flag requiring explicit type arguments on generic classes. |

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
disallow_any_generics is a Mypy configuration flag in pyproject.toml prohibiting unparameterized generic collections rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
