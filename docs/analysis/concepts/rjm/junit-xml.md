---
package: rjm
name: JUnit XML
slug: junit-xml
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
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
