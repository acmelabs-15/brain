---
package: rjm
name: SUMMARY_JSON
slug: summary-json
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/write_pr_discovery_summary.py, sha256: 606ee2545ae45f5844c9c52ffd9fe276782f0d605abe4e4e6eb0b15617a11241}
  - {path: scripts/ci/write_pr_maintenance_summary.py, sha256: eecaebee965826cc090a8d784719c101978eb7ca5fc80e9543a715b9f93f3639}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SUMMARY_JSON

## Definition — verbatim
(used, not defined)

> "Reads SUMMARY_JSON from the environment, builds a markdown summary," — scripts/ci/write_pr_discovery_summary.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/write_pr_discovery_summary.py | 4 | used here | Environment variable containing JSON payload of PR discovery metrics parsed for step summaries. |
| scripts/ci/write_pr_maintenance_summary.py | 4 | used here | Environment variable containing JSON payload of PR scan results parsed to identify agent-controlled PRs. |

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
SUMMARY_JSON is an environment variable identifier conveying serialized PR metrics between workflow steps rather than an operational lifecycle concept.
