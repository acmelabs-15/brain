---
package: rjm
name: fetch_live_params
slug: fetch-live-params
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# fetch_live_params

## Definition — verbatim
(used, not defined)

> "def fetch_live_params(ruleset_id: int) -> dict[str, Any]:" — scripts/validation/check_ruleset_params_drift.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ruleset_params_drift.py | 56 | defined here | Function retrieving live ruleset parameters from the GitHub API using the gh CLI. |

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
defects: exit-code-mismatch, orphan

## Design notes
A Python function identifier querying live branch protection ruleset parameters via the GitHub API rather than an agent lifecycle concept.
