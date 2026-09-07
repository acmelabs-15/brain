---
package: rjm
name: _SAFE_EXPRESSION_HEADS
slug: safe-expression-heads
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SAFE_EXPRESSION_HEADS

## Definition — verbatim
(used, not defined)

> "_SAFE_EXPRESSION_HEADS: frozenset[str] = frozenset(" — scripts/validate_workflows.py:278

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 278 | defined here | Allowlist constant of GitHub-generated context expression heads that cannot carry attacker-controlled free text in workflow run blocks. |

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
`_SAFE_EXPRESSION_HEADS` is an internal Python constant in `validate_workflows.py` defining an allowlist of safe GitHub expression contexts rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
