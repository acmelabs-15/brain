---
package: rjm
name: FAIL_STATES
slug: fail-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FAIL_STATES

## Definition — verbatim
(used, not defined)

> "FAIL_STATES = {\"DIRTY\"}" — scripts/ci/check_pr_merge_state.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_pr_merge_state.py | 28 | defined here | Constant set defining conflicting PR merge states that cause validation failure. |

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
A module-level set constant (`FAIL_STATES`) enumerating failing pull request merge states recorded during inventory analysis, classified as `name-only` per D-023.
