---
package: rjm
name: IssueStateLookup
slug: issuestatelookup
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# IssueStateLookup

## Definition — verbatim
(used, not defined)

> "IssueStateLookup = Callable[[int], str | None]" — scripts/validation/active_plan_closeout.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 41 | defined here | Type alias defining the callable signature for issue state lookup functions querying GitHub issue statuses. |

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
`IssueStateLookup` is a Python type alias in `active_plan_closeout.py` defining a callable contract for issue state resolution rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
