---
package: rjm
name: partition_rows_by_run
slug: partition-rows-by-run
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/checks_rollup.py, sha256: dede2391ab079ee5be7c7e9964ab3de3308368ecaf137ec632ffb7af4c0759a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# partition_rows_by_run

## Definition — verbatim
(used, not defined)

> "def partition_rows_by_run(" — scripts/github_core/checks_rollup.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/checks_rollup.py | 46 | defined here | Splits same-named status check rows into groups sharing a single workflow run attempt. |

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
A utility function grouping status check rows by workflow run ID and attempt to prevent conflating rerun attempts, classified as name-only per D-023.
