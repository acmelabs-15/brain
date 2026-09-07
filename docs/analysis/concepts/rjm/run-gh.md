---
package: rjm
name: _run_gh
slug: run-gh
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
  - {path: scripts/ci/main_pytest_failure_alert.py, sha256: bb367255b46c592ece4b2e1018fb1ad9befd29cad8627942838779241c92984a}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _run_gh

## Definition — verbatim
(used, not defined)

> "Run a gh CLI command and return the result." — scripts/analyze_pr_failure.py:40

## Also called — verbatim
`run_gh` — scripts/ci/check_pr_merge_state.py:41
`run_gh` — scripts/gh_retry_helpers.py:217

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/analyze_pr_failure.py | 39 | defined here | Wrapper function executing GitHub CLI commands with timeout handling for failure analysis. |
| scripts/ci/check_pr_merge_state.py | 41 | defined here | Subprocess runner executing gh commands to inspect pull request mergeability state. |
| scripts/ci/main_pytest_failure_alert.py | 27 | defined here | Helper function invoking the gh CLI to file issue alerts when main branch tests fail. |
| scripts/ci/update_needs_split_label.py | 15 | defined here | Invokes gh CLI commands to add or remove needs-split labels based on PR size. |
| scripts/gh_retry_helpers.py | 217 | defined here | Core retry wrapper executing gh CLI invocations with backoff and deadline enforcement. |
| scripts/report_pr_supersession.py | 227 | defined here | Helper function executing gh CLI commands to detect and report superseded pull requests. |

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
defects: exit-code-mismatch, orphan, other, missing-path

## Design notes
`_run_gh` is a helper function identifier across multiple scripts executing GitHub CLI subprocess calls rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
