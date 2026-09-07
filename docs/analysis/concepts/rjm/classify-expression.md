---
package: rjm
name: _classify_expression
slug: classify-expression
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _classify_expression

## Definition — verbatim
(used, not defined)

> "def _classify_expression(self, expression: str, tainted_steps: set[str]) -> str | None:" — scripts/validate_workflows.py:343

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 343 | defined here | Evaluates an individual GitHub Actions expression against safe expression heads and tainted step outputs to detect injection risks. |

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
`_classify_expression` is an internal Python helper method in `validate_workflows.py` classifying expressions for command injection risks rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
