---
package: rjm
name: _DEFAULT_TRUSTED_REPO
slug: default-trusted-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DEFAULT_TRUSTED_REPO

## Definition — verbatim
(used, not defined)

> "_DEFAULT_TRUSTED_REPO = \"rjmurillo/ai-agents\"" — scripts/validation/assert_trusted_smoke_context.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_trusted_smoke_context.py | 42 | defined here | Constant defining the default repository slug expected in trusted smoke test execution contexts. |

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
A module-level configuration constant identifier in `assert_trusted_smoke_context.py` holding the default trusted repository name, classified as `name-only` per D-023 because it is a Python code identifier rather than a development lifecycle concept.
