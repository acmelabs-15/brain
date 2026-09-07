---
package: rjm
name: validate_ci_dependency_pins
slug: validate-ci-dependency-pins
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_ci_dependency_pins

## Definition — verbatim
(used, not defined)

> "def validate_ci_dependency_pins(repo_root: Path) -> bool:" — scripts/validation/checks_tooling.py:524

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 40 | used here | Cited as the pre-PR validation function entry point binding pin checks into the local gate runner. |
| scripts/validation/checks_tooling.py | 524 | defined here | Pre-PR validation function comparing CI workflow pins against pyproject.toml constraints. |

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
defects: doc-drift, other, exit-code-mismatch

## Design notes
`validate_ci_dependency_pins` is a Python validation function identifier in `checks_tooling.py` verifying CI dependency pins against `pyproject.toml` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
