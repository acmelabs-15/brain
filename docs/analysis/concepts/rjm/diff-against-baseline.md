---
package: rjm
name: diff_against_baseline
slug: diff-against-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# diff_against_baseline

## Definition — verbatim
(used, not defined)

> "def diff_against_baseline(" — scripts/validation/check_doc_interpreter_portability.py:459

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 459 | defined here | Compares detected offenses against baseline records to compute regressions and improvements. |
| scripts/validation/check_skill_md_exec_portability.py | 348 | defined here | Computes baseline diffs for execution portability violations. |
| scripts/validation/check_skill_md_portability.py | 730 | defined here | Calculates regressions and improvements against markdown portability baselines. |
| scripts/validation/check_skill_portability.py | 247 | defined here | Calculates baseline diffs for vendor portability violations in skills. |
| scripts/validation/portability_common.py | 45 | defined here | Shared baseline comparison utility function used across portability checks. |

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
defects: doc-drift, orphan, other

## Design notes
A Python baseline comparison utility function implemented across portability checks to track ratchet progress, classified as name-only per D-023.
