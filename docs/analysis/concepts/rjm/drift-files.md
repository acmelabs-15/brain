---
package: rjm
name: drift_files
slug: drift-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# drift_files

## Definition — verbatim
(used, not defined)

> "The drift_files object records marker path-drift findings per file (issue #4116)." — scripts/validation/skill_md_portability_baseline.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_floor.py | 35 | used here | Counted baseline section in COUNTED_SECTIONS tracking marker path-drift findings per file. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Explanatory comment describing the drift_files object recording marker path-drift findings per file. |
| scripts/validation/skill_md_portability_baseline.json | 306 | defined here | Top-level JSON section mapping skill files to marker path-drift finding counts. |

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
