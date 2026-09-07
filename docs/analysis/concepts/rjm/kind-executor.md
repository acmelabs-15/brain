---
package: rjm
name: KIND_EXECUTOR
slug: kind-executor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KIND_EXECUTOR

## Definition — verbatim
(used, not defined)

> "KIND_EXECUTOR = \"executor\"" — scripts/quality_gate/resolve_pytest_signal.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 86 | defined here | Constant identifying a workflow job tier that genuinely executed the pytest test suite. |

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
KIND_EXECUTOR is a string constant identifier in resolve_pytest_signal.py classifying workflow jobs that actually ran tests rather than an autonomous lifecycle concept.
