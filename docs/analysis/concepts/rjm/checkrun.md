---
package: rjm
name: CheckRun
slug: checkrun
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/checks_rollup.py, sha256: dede2391ab079ee5be7c7e9964ab3de3308368ecaf137ec632ffb7af4c0759a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CheckRun

## Definition — verbatim
(used, not defined)

> "flags across all row types (CheckRun and StatusContext) for that name." — scripts/github_core/checks_rollup.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/checks_rollup.py | 8 | used here | Referenced in module docstring identifying GitHub Checks API check-run row types. |

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
A GitHub Checks API entity type representing an execution of a check suite workflow, classified as name-only per D-023.
