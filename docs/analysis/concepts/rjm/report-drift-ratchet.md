---
package: rjm
name: report_drift_ratchet
slug: report-drift-ratchet
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

# report_drift_ratchet

## Definition — verbatim
(used, not defined)

> "def report_drift_ratchet(" — scripts/validation/check_skill_md_drift.py:390

## Also called — verbatim
`_report_drift_ratchet` — scripts/validation/check_skill_md_portability.py:104

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 390 | defined here | Function reporting drift ratchet regressions and improvements to standard output. |
| scripts/validation/check_skill_md_portability.py | 104 | used here | Imported as an aliased helper to emit drift ratchet status during portability checks. |

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
An internal reporting function outputting drift ratchet diff results rather than an agent lifecycle concept.
