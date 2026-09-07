---
package: rjm
name: create_maintenance_summary
slug: create-maintenance-summary
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

# create_maintenance_summary

## Definition — verbatim
(used, not defined)

> "def create_maintenance_summary(" — scripts/pr_maintenance/maintenance.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance/__init__.py | 15 | used here | Re-exported in module initialization namespace. |
| scripts/pr_maintenance/maintenance.py | 90 | defined here | Generates markdown table summarizing PR maintenance metrics for GitHub Actions step summary. |

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
`create_maintenance_summary` is a Python helper function identifier formatting GitHub Actions step summaries rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
