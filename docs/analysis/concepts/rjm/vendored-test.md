---
package: rjm
name: VENDORED_TEST
slug: vendored-test
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# VENDORED_TEST

## Definition — verbatim
(used, not defined)

> "VENDORED_TEST = \"tests/integration/test_vendored_install.py\"" — scripts/metrics/check_vendored_install.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/check_vendored_install.py | 39 | defined here | Constant defining the relative file path to the integration test suite for vendored installation. |

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
`VENDORED_TEST` is a string constant specifying the target integration test path in `scripts/metrics/check_vendored_install.py` rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
