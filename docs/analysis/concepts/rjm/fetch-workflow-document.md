---
package: rjm
name: fetch_workflow_document
slug: fetch-workflow-document
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/workflow_provenance.py, sha256: 54e330d98b0775ed2ddc545d4b03aaaee833cbdee1ffa05ba2e0efbea4b2d9d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fetch_workflow_document

## Definition — verbatim
(used, not defined)

> "def fetch_workflow_document(" — scripts/github_core/workflow_provenance.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/workflow_provenance.py | 68 | defined here | Reads and parses a workflow YAML file from the GitHub REST contents API at a specific ref. |

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
Helper function identifier (`fetch_workflow_document`) in `workflow_provenance.py` fetching workflow files via API rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
