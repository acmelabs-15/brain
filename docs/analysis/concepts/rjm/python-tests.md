---
package: rjm
name: Python Tests
slug: python-tests
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/main_pytest_failure_alert.py, sha256: bb367255b46c592ece4b2e1018fb1ad9befd29cad8627942838779241c92984a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Python Tests

## Definition — verbatim
(used, not defined)

> "Create or update an issue when Python Tests fails on main." — scripts/ci/main_pytest_failure_alert.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/main_pytest_failure_alert.py | 2 | used here | Named in the module docstring as the CI test workflow monitored for branch failures on main. |

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
defects: orphan

## Design notes
Python Tests is the name of the GitHub Actions CI workflow executing test suites on the main branch rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
