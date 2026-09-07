---
package: rjm
name: Check Paths
slug: check-paths
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
  - {path: scripts/validation/check_colocated_skill_tests.py, sha256: 49ed724b3e8cedbd9917a596e3dd3fdec039097bbdc3ce64c4c058834b9225f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Check Paths

## Definition — verbatim
(used, not defined)

> "name: Check Paths" — .github/workflows/validate-generated-agents.yml:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 31 | defined here | Name of the CI workflow job checking whether modified files match relevant paths. |
| docs/codeql-architecture.md | 20 | used here | Node in Mermaid flowchart representing the check-paths CI step skipping scans when no scannable files change. |
| docs/codeql-integration.md | 245 | used here | Cited in documentation as the workflow job that skips CodeQL analysis when no scannable files change. |
| docs/codeql-rollout-checklist.md | 180 | used here | Checklist step verifying that check-paths accurately detects scannable file changes in CI. |
| scripts/validation/check_colocated_skill_tests.py | 77 | defined here | Python function definition inspecting path lists for colocated test violations. |

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
defects: internal-contradiction, script-bug, doc-drift, missing-path, always-failing-gate

## Design notes
Check Paths is a CI workflow job label and Python function name used across workflows and validation scripts to filter changed file paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
