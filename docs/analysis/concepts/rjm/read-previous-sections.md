---
package: rjm
name: read_previous_sections
slug: read-previous-sections
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# read_previous_sections

## Definition — verbatim
(used, not defined)

> "def read_previous_sections(" — scripts/validation/portability_floor.py:179

## Also called — verbatim
`_read_previous_sections` — scripts/validation/check_skill_md_portability.py:126

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 34 | used here | Imported to read existing baseline sections before verifying or updating exec portability baselines. |
| scripts/validation/check_skill_md_portability.py | 126 | used here | Imported as an aliased helper to retrieve predecessor baseline counts during portability checks. |
| scripts/validation/portability_baseline.py | 50 | used here | Exported in `__all__` and invoked to inspect prior baseline counts before atomic writes. |
| scripts/validation/portability_floor.py | 179 | defined here | Function reading counted baseline sections from disk and git committed state to establish ratchet floors. |

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
clean in scripts/validation/portability_floor.py, scripts/validation/portability_baseline.py; defects: other in scripts/validation/check_skill_md_exec_portability.py, doc-drift in scripts/validation/check_skill_md_portability.py

## Design notes
A Python helper reading baseline sections from git and filesystem state rather than an agent lifecycle concept.
