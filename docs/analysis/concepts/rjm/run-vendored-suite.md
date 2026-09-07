---
package: rjm
name: _run_vendored_suite
slug: run-vendored-suite
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _run_vendored_suite

## Definition — verbatim
> "def _run_vendored_suite() -> subprocess.CompletedProcess[str]:" — scripts/metrics/check_vendored_install.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/check_vendored_install.py | 44 | defined here | Helper function invoking pytest on the vendored-install integration test file via subprocess. |

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
defects: script-bug

## Design notes
`_run_vendored_suite` is a helper function in `scripts/metrics/check_vendored_install.py` executing the pytest suite for vendored installation validation rather than a lifecycle concept, classified as `name-only` per D-023.
