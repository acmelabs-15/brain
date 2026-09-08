---
package: rjm
name: marker_files
slug: marker-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# marker_files

## Definition — verbatim
(used, not defined)

> "The marker_files object records refs suppressed by '<!-- vendor-portability: ... -->' markers so stale declarations do not stay green forever." — scripts/validation/skill_md_portability_baseline.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_floor.py | 34 | used here | Documented as a counted baseline section tracking suppressed references. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Explanatory header comment describing marker_files recording suppressed bare executable invocations. |
| scripts/validation/skill_md_exec_portability_baseline.json | 144 | defined here | Top-level JSON section recording suppression counts for skill markdown executable invocations. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Explanatory header comment describing marker_files recording suppressed upstream path references. |
| scripts/validation/skill_md_portability_baseline.json | 110 | defined here | Top-level JSON section recording suppression counts for skill markdown vendor portability references. |

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
A JSON dictionary key and counted section identifier in vendor portability ratchet baseline stores, classified as name-only per D-023.
