---
package: rjm
name: EXIT_REGRESSION
slug: exit-regression
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_REGRESSION

## Definition — verbatim
(used, not defined)

> "EXIT_REGRESSION = 1" — scripts/ci/check_pr_merge_state.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_pr_merge_state.py | 15 | defined here | Defined as exit code 1 when merge state regressions are detected. |
| scripts/ci/cli_exit_contract_ratchet.py | 57 | used here | Referenced in exit code contract ratchet validation. |
| scripts/ci/count_ratchet.py | 75 | defined here | Defined as exit code 1 when defect count exceeds baseline ratchet threshold. |
| scripts/ci/ruff_count_ratchet.py | 42 | defined here | Defined as exit code 1 when ruff lint count exceeds baseline. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 32 | defined here | Defined as exit code 1 when unencoded subprocess calls exceed baseline. |
| scripts/ci/taste_count_ratchet.py | 52 | defined here | Defined as exit code 1 when taste lint findings exceed baseline ratchet. |
| scripts/ci/validate_ai_review_budgets.py | 16 | defined here | Defined as exit code 1 when AI review budget allocations are exceeded. |
| scripts/validation/check_adr_lifecycle.py | 138 | defined here | Defined as exit code 1 when ADR lifecycle contract violations are found. |

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
An exit code constant identifier (`EXIT_REGRESSION`) denoting ratchet regression failures across scripts recorded during inventory analysis, classified as `name-only` per D-023.
