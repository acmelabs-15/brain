---
package: rjm
name: secret-redaction
slug: secret-redaction
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# secret-redaction

## Definition — verbatim
(used, not defined)

> "secret-redaction backstop (``.claude/rules/secret-redaction.md``) does not" — scripts/metrics/kill_criteria.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 40 | used here | Cited in docstring noting that the secret-redaction rule backstop is bypassed on the hot metrics emission path. |

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
`secret-redaction` is a rule file reference (`.claude/rules/secret-redaction.md`) for stripping sensitive tokens and credentials rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
