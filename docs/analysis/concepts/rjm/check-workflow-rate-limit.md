---
package: rjm
name: check_workflow_rate_limit
slug: check-workflow-rate-limit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/test_rate_limit.py, sha256: 51a6e37f475906db141e0afebf83f4c6d67a90e503092fdff6a0e745f60fe9f9}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/rate_limit.py, sha256: 5d4b36bbf056d64c5d45e9f783b33042a8cc0d6475888bb4b9c0f8218a39ef00}
  - {path: scripts/pr_maintenance/__init__.py, sha256: b157ddeaa91069989c8d80c38031dd661fe6763f52a6445b306199e7a1eba733}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_workflow_rate_limit

## Definition — verbatim
(used, not defined)

> "def check_workflow_rate_limit(" — scripts/github_core/rate_limit.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/test_rate_limit.py | 27 | used here | Imported from scripts.github_core.api to run rate limit checks in workflow CLI. |
| scripts/github_core/api.py | 40 | used here | Re-exported from scripts.github_core.rate_limit as part of public API. |
| scripts/github_core/rate_limit.py | 219 | defined here | Function definition verifying GitHub API rate limits before workflow execution. |
| scripts/pr_maintenance/__init__.py | 8 | used here | Re-exported in module initialization for workflow maintenance operations. |
| scripts/update_reviewer_signal_stats.py | 36 | used here | Imported to verify API rate limits before querying pull request review comments. |

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
defects: exit-code-mismatch, doc-drift, orphan

## Design notes
`check_workflow_rate_limit` is a Python function identifier in `scripts/github_core/rate_limit.py` that verifies GitHub API rate limits before workflow execution rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
