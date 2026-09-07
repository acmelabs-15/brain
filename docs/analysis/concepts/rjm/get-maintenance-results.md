---
package: rjm
name: get_maintenance_results
slug: get-maintenance-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/pr_maintenance/__init__.py, sha256: b157ddeaa91069989c8d80c38031dd661fe6763f52a6445b306199e7a1eba733}
  - {path: scripts/pr_maintenance/maintenance.py, sha256: 526b89e4ca39d779c63f64fbd4ebc3d623870e18d6cf72c129be8622f2b89dc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_maintenance_results

## Definition — verbatim
(used, not defined)

> "def get_maintenance_results(log_path: str | Path) -> MaintenanceResults:" — scripts/pr_maintenance/maintenance.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 17 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 35 | defined here | Parses PR maintenance workflow log file to extract execution counts and blocked PRs. |

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
`get_maintenance_results` is a Python helper function identifier extracting metrics from maintenance workflow log files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
