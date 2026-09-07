---
package: rjm
name: _project_to_lines
slug: project-to-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _project_to_lines

## Definition — verbatim
(used, not defined)

> "def _project_to_lines(data: coverage.CoverageData, scratch_path: Path) -> coverage.CoverageData:" — scripts/ci/combine_pin_coverage.py:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/combine_pin_coverage.py | 122 | defined here | Converts branch/arc coverage data to line-only data by extracting executed line numbers and writing to a scratch database. |

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
An internal script function projecting branch arcs to line numbers to allow dataset merging rather than a lifecycle concept.
