---
package: rjm
name: TRUE_INCOHERENCE
slug: true-incoherence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TRUE_INCOHERENCE

## Definition — verbatim
(used, not defined)

> "TRUE_INCOHERENCE: genuinely conflicting claims" — scripts/incoherence.py:383

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 383 | defined here | Verdict status classification indicating genuinely conflicting assertions between documentation and code sources. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
An internal verification verdict label within `scripts/incoherence.py` distinguishing genuine contradictions from false positives rather than an independent lifecycle concept.
