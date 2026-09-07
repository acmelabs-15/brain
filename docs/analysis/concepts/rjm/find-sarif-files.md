---
package: rjm
name: find_sarif_files
slug: find-sarif-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_codeql_sarif.py, sha256: e20a24e447806fac29fce1245d20683d67b25fda571e06fd6ee6c5d1ac359c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_sarif_files

## Definition — verbatim
(used, not defined)

> "def find_sarif_files(sarif_dir: Path) -> list[Path]:" — scripts/ci/check_codeql_sarif.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_codeql_sarif.py | 149 | defined here | Function locating `.sarif` report files in the target output directory. |

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
defects: orphan

## Design notes
A Python function identifier (`find_sarif_files`) discovering SARIF report files on disk recorded during inventory analysis, classified as `name-only` per D-023.
