---
package: rjm
name: files
slug: files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/doc_interpreter_baseline.json, sha256: 62b405d88881f963e77d8b9452f6bd6de13151d866f980edd90e394f0ababe27}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
  - {path: scripts/validation/skill_portability_baseline.json, sha256: 19be7c6de8ec9639ccde43c96cde35a3826b6dfadd239d08156ddd050fcc51f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# files

## Definition — verbatim
(used, not defined)

> "`files` counts violations, where lower is better." — scripts/validation/portability_floor.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/doc_interpreter_baseline.json | 2 | defined here | Baseline mapping key storing per-file execution violation counts for doc-interpreter verification. |
| scripts/validation/portability_floor.py | 34 | used here | Documented counted-section identifier representing per-file violation counts governed by the ratchet floor. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Explanatory comment describing the files object as counting bare executable invocations per file. |
| scripts/validation/skill_md_exec_portability_baseline.json | 3 | defined here | Top-level JSON dictionary mapping skill Markdown files to recorded executable portability violation counts. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Explanatory comment describing the files object as counting undeclared upstream-only path references. |
| scripts/validation/skill_md_portability_baseline.json | 3 | defined here | Top-level JSON dictionary mapping Markdown files to upstream-only path reference counts. |
| scripts/validation/skill_portability_baseline.json | 3 | defined here | Top-level JSON dictionary mapping skill scripts to upstream-only path reference counts. |

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
A JSON dictionary key representing per-file violation counts across portability and doc-interpreter baseline files, classified as name-only per D-023.
