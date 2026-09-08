---
package: rjm
name: find_workflow_files
slug: find-workflow-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_workflow_files

## Definition — verbatim
(used, not defined)

> "Find all YAML workflow and action files under the given path." — scripts/validation/sha_pinning.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/sha_pinning.py | 63 | defined here | Discovers all YAML files under `.github/workflows` and `.github/actions`. |

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
A Python filesystem discovery function in `sha_pinning.py`, classified as name-only per D-023.
