---
package: rjm
name: current_count
slug: current-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/merge_tree_ratchet_registry.py, sha256: eaa4167914b5f6f546a258a8dec7ed8ed0de02369eabec21885d10bf20dc9f2e}
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# current_count

## Definition — verbatim
(used, not defined)

> "Count of uncovered scripts, or None when the tracked-file scan failed." — scripts/ci/cli_exit_contract_ratchet.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_ratchet.py | 70 | defined here | Implemented to return the current count of uncovered CLI scripts or None on error. |
| scripts/ci/merge_tree_ratchet_registry.py | 26 | defined here | Defined as a method on `MergeTreeRatchet` delegating count evaluation to the underlying module. |
| scripts/ci/ruff_count_ratchet.py | 56 | defined here | Exported in `__all__` and implemented to count active ruff lint violations. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 74 | defined here | Implemented to count subprocess encoding violations across Python source files. |
| scripts/ci/taste_count_ratchet.py | 88 | defined here | Implemented to count error-severity violations from `taste_lints.py`. |
| scripts/ci/type_ignore_count_ratchet.py | 92 | defined here | Implemented to count `# type: ignore` comments across tracked Python files. |

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
`current_count` is a Python function and method identifier conforming to the count ratchet evaluation protocol rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
