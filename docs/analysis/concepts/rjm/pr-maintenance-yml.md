---
package: rjm
name: pr-maintenance.yml
slug: pr-maintenance-yml
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: scripts/ci/detect_human_changes_requested.py, sha256: 54c20c8899411a5c94c089ced5574b0ca47d2597c231025d1edcc08f894bdab1}
  - {path: scripts/ci/prepare_conflict_context.py, sha256: b295ad081fbf5c4e50ad56f3ee61caa1437aa66f9c03863f47507511775c5491}
  - {path: scripts/ci/write_pr_discovery_summary.py, sha256: 606ee2545ae45f5844c9c52ffd9fe276782f0d605abe4e4e6eb0b15617a11241}
  - {path: scripts/ci/write_pr_maintenance_summary.py, sha256: eecaebee965826cc090a8d784719c101978eb7ca5fc80e9543a715b9f93f3639}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-maintenance.yml

## Definition — verbatim
(used, not defined)

> "Replaces the inline PowerShell block in pr-maintenance.yml (ADR-006)." — scripts/ci/detect_human_changes_requested.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/detect_human_changes_requested.py | 3 | used here | Documented as the GitHub Actions workflow file hosting pull request maintenance tasks. |
| scripts/ci/prepare_conflict_context.py | 3 | used here | Documented as the parent workflow invoking the conflict context preparation script. |
| scripts/ci/write_pr_discovery_summary.py | 3 | used here | Documented as the parent workflow invoking the PR discovery summary writer. |
| scripts/ci/write_pr_maintenance_summary.py | 3 | used here | Documented as the parent workflow invoking the final PR maintenance summary writer. |
| scripts/report_pr_supersession.py | 58 | used here | Cited as the calling workflow that invokes the PR supersession report. |

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
defects: orphan, missing-path

## Design notes
`pr-maintenance.yml` is a GitHub Actions workflow configuration filename orchestrating automated pull request maintenance jobs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
