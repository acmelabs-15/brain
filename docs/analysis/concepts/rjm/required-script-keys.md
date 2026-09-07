---
package: rjm
name: REQUIRED_SCRIPT_KEYS
slug: required-script-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REQUIRED_SCRIPT_KEYS

## Definition — verbatim
(used, not defined)

> "REQUIRED_SCRIPT_KEYS = [" — scripts/validate_pr_review_config.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_pr_review_config.py | 61 | defined here | Constant list defining required script hook names in PR review configuration. |

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
REQUIRED_SCRIPT_KEYS is a schema list identifier specifying mandatory review script hooks in scripts/validate_pr_review_config.py rather than an SDLC lifecycle concept.
