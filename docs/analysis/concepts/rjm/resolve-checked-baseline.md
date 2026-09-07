---
package: rjm
name: _resolve_checked_baseline
slug: resolve-checked-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _resolve_checked_baseline

## Definition — verbatim
(used, not defined)

> "def resolve_checked_baseline(" — scripts/validation/portability_common.py:201

## Also called — verbatim
`resolve_checked_baseline` — scripts/validation/portability_common.py:201

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 41 | used here | Imported under alias to locate and vet the baseline file path before running checks. |
| scripts/validation/portability_common.py | 201 | defined here | Function resolving and validating baseline file existence, repository containment, and git diffability. |

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
clean in scripts/validation/portability_common.py; defects: other in scripts/validation/check_skill_md_exec_portability.py

## Design notes
An internal baseline path resolution and security vetting helper rather than an agent lifecycle concept.
