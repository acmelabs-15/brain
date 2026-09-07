---
package: rjm
name: shadow-pytest-sample
slug: shadow-pytest-sample
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# shadow-pytest-sample

## Definition — verbatim
(used, not defined)

> "SAMPLE_MARKER = \"shadow-pytest-sample\"" — scripts/quality_gate/resolve_pytest_signal.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 76 | defined here | Defined as the constant log marker token emitted in GitHub Actions notices for greppable shadow evaluation telemetry. |

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
shadow-pytest-sample is a string literal log marker token defined in resolve_pytest_signal.py to enable telemetry counting rather than an autonomous lifecycle concept.
