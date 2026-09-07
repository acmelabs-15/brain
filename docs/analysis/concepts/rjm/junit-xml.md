---
package: rjm
name: JUnit XML
slug: junit-xml
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_result_helpers/helpers.py, sha256: 3c14f9ddcc6391bbb74b0bf22b0e6ef4f32213f2861f761032e96e22d08eada2}
  - {path: scripts/validation/assert_smoke_ran.py, sha256: 55d08814bfbf5f490cd6ea9a8d5641962d449b25b6f619c700b7ff8fbac6e2af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JUnit XML

## Definition — verbatim
> "removes that human step: it parses the JUnit XML pytest emits and exits non-zero" — scripts/validation/assert_smoke_ran.py:8

## Also called — verbatim
> "Generates JUnit XML files when tests are skipped but required status" — scripts/test_result_helpers/helpers.py:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_result_helpers/helpers.py | 3 | used here | Module docstring describing the generation of valid XML test result files when tests are skipped. |
| scripts/validation/assert_smoke_ran.py | 8 | used here | Describes parsing pytest JUnit XML reports to assert that smoke tests actually executed. |

## Consumes
Test execution results, test case outcome statuses, or CI skip reasons.

## Produces
Structured XML test reports consumed by CI test reporters and verification gates.

## When applied
Emitted during test execution in `rjm:test` by pytest `--junitxml` or synthesized by test result helper scripts for skipped suites.

## Sub-concepts
none

## Part of
test

## Implementation status
clean

## Design notes
`JUnit XML` is the standardized machine-readable test result reporting format used across rjm's test verification pipeline. It provides structured test outcome data (`<testsuite>`, `<testcase>`, `<failure>`, `<skipped>`) that downstream CI status checks and validation gates (such as `assert_smoke_ran.py`) inspect to ensure test suites actually ran without silent skips or unhandled errors.
