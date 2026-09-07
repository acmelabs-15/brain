---
package: rjm
name: scan_marker_suppressions
slug: scan-marker-suppressions
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

# scan_marker_suppressions

## Definition — verbatim
(used, not defined)

> "def scan_marker_suppressions(repo_root: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_exec_portability.py:305

## Also called — verbatim
`def scan_marker_suppressions(root: Path) -> dict[str, int]:` — scripts/validation/check_skill_md_portability.py:709

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 305 | defined here | Scans and returns counts of executable invocations suppressed by vendor-portability-exec markers. |
| scripts/validation/check_skill_md_portability.py | 709 | defined here | Scans and returns counts of path references suppressed by vendor-portability markers across roots. |

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
A Python helper function identifier scanning for marker-suppressed portability violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
