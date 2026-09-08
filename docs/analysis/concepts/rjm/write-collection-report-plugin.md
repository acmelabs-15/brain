---
package: rjm
name: _write_collection_report_plugin
slug: write-collection-report-plugin
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _write_collection_report_plugin

## Definition — verbatim
(used, not defined)

> "def _write_collection_report_plugin(scratch_root: Path) -> Path:" — scripts/validation/check_zero_collection_tests.py:331

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_zero_collection_tests.py | 331 | defined here | Writes a temporary pytest collector plugin to the scratch directory and returns the target report path. |

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
`_write_collection_report_plugin` is an internal helper function in `check_zero_collection_tests.py` generating a transient pytest reporting plugin file rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
