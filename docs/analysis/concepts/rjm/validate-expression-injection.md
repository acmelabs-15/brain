---
package: rjm
name: validate_expression_injection
slug: validate-expression-injection
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_expression_injection

## Definition — verbatim
(used, not defined)

> "def validate_expression_injection(self, file_path: Path, content: dict[str, Any]) -> None:" — scripts/validate_workflows.py:371

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 371 | defined here | Scans workflow job run blocks and environment variables for unescaped expression interpolation and tracks single-hop taint propagation. |

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
`validate_expression_injection` is a Python method identifier in `validate_workflows.py` detecting expression injection vulnerabilities rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
