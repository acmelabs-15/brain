---
package: rjm
name: real-CLI smoke
slug: real-cli-smoke
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# real-CLI smoke

## Definition — verbatim
> "Fail loud when the real-CLI smoke did not actually run (issue #2231 item 4)." — scripts/validation/assert_smoke_ran.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_smoke_ran.py | 2 | defined here | Module docstring defining verification gate ensuring real-CLI smoke tests execute rather than silently skip. |

## Consumes
Environment variable `RUN_CLI_E2E=1`, installed CLI binaries on PATH, and end-to-end integration test suites (`test_cli_hook_e2e.py`).

## Produces
JUnit XML execution records confirming end-to-end hook and CLI interactions ran to completion.

## When applied
During nightly CI workflows (`.github/workflows/nightly-cli-smoke.yml`) and pre-release qualification to validate real Copilot and Claude CLI integrations.

## Sub-concepts
none

## Part of
smoke-testing

## Implementation status
clean

## Design notes
An end-to-end integration testing technique that exercises tools against actual installed CLI binaries rather than mocked interfaces, validated by `assert_smoke_ran.py` to ensure that conditionally skipped tests fail loudly if omitted in CI.
