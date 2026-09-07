---
package: rjm
name: _refuse_marker_files_growth
slug: refuse-marker-files-growth
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _refuse_marker_files_growth

## Definition — verbatim
(used, not defined)

> "def _refuse_marker_files_growth(" — scripts/validation/check_skill_md_exec_portability.py:419

## Also called — verbatim
`def _refuse_marker_files_growth(` — scripts/validation/check_skill_md_portability.py:1139

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 419 | defined here | Prevents baseline updates from silently absorbing increases in suppressed execution counts without explicit flags. |
| scripts/validation/check_skill_md_portability.py | 1139 | defined here | Refuses baseline writes when suppressed path reference counts increase without `--allow-marker-grow`. |

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
defects: other, doc-drift

## Design notes
An internal Python validation function identifier rejecting unflagged growth in suppressed marker files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
