---
package: rjm
name: drift_counts_from_failures
slug: drift-counts-from-failures
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_drift.py, sha256: 6b40fae460dc8dfe9dcc290ea47974ca5af1f625d54bcd0d897c62e4d6d41155}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# drift_counts_from_failures

## Definition — verbatim
(used, not defined)

> "def drift_counts_from_failures(drift_failures: list[str]) -> dict[str, int]:" — scripts/validation/check_skill_md_drift.py:380

## Also called — verbatim
`_drift_counts_from_failures` — scripts/validation/check_skill_md_portability.py:98

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 380 | defined here | Function aggregating drift failure strings into per-file count mappings for baseline tracking. |
| scripts/validation/check_skill_md_portability.py | 98 | used here | Imported as an aliased helper to aggregate path drift failures during portability validation. |

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
defects: doc-drift

## Design notes
An internal data transformation function aggregating failure messages into counts rather than an agent lifecycle concept.
