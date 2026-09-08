---
package: rjm
name: GitHub Codespace
slug: github-codespace
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GitHub Codespace

## Definition — verbatim
(used, not defined)

> "unavailable inside a Claude web container or a GitHub Codespace (detected by env" — scripts/validation/run_workflow_local_test.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/run_workflow_local_test.py | 29 | used here | Cloud-hosted development container environment detected via CODESPACES where tool gaps degrade to warnings. |

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
defects: doc-drift

## Design notes
A cloud development container platform name used for environment detection rather than an agent lifecycle concept, classified as name-only per D-023.
